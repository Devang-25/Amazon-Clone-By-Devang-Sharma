// Author: @devangs

import React, { useState , useEffect} from 'react'
import "./Payment.css";
import useStateValue from './StateProvider';
import {Link , useHistory} from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from "./axios";
import { db } from "./firebase.js";

function Payment() {
  const history = useHistory();

    const [{basket , user}, dispatch]= useStateValue();
    const [error , setError]= useState(null);
    const [disabled , setDisabled]= useState(true);

    const [processing, setProcessing]= useState("");
    const[succeeded, setSucceeded]= useState(false);
    const[clientSecret, setClientSecret]=useState(true);

    const stripe = useStripe();
    const elements = useElements();

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer 
       const getClientSecret = async() => {
         const response = await axios({
           method : 'post',
           // stripe expects the total in currency subunits
           url : `/payments/create?total=${getBasketTotal(basket)* 100}`
         });
         setClientSecret(response.data.clientSecret);
       }
       getClientSecret();
  }, [basket])  

  console.log("secret is >>>>", clientSecret);

const handleSubmit = async (event) => {
  event.preventDefault();
  setProcessing(true);
  
  const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method :{
      card : elements.getElement(CardElement)
    }
  }).then(({paymentIntent})=>{
    //paymentIntent == payment confirmation
 
     db.collection("orders")
      .doc(user?.uid)
      .collection("users")
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount : paymentIntent.amount,
        created : paymentIntent.created
      })
      

    setSucceeded(true);
    setError(null);
    setProcessing(false);
    dispatch({
      type : "EMPTY_BASKET"
    })
    history.replace("/orders")
  })
  

}
const handleChange = (event) =>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  
}

    return (
       
      <div className="payment">
         <div className="payment__container">
            <h1>
                Checkout (
                    <Link to="/checkout">
                    {basket.length} items
                    </Link> )
            </h1>
             {/* address details */}
             <div className="payment__section">
                  <div className="payment__title">
                  <h3>Delivery Address</h3>
                  </div>

                  <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>chennai, India</p> 
                </div>

             </div>


             {/* product reviews */}
              <div className="payment__section">
                   <div className="payment__title">
                       <h3>Review items and delivery</h3>
                   </div>
              <div className="payment__items">
                {basket.map(item=>(
                    <CheckoutProduct
                    id = {item.id}
                       title={item.title}
                       price={item.price}
                       image={item.image}
                       rating={item.rating}
                       
                        />
                ))}
                </div>
             </div>



             {/* card details */}
             <div className="payment__section">
                  <div className="payment__title">
                     <h3>Payment method</h3>
                  </div>
                <div className="payment__details">
                   {/* stripe magic will go */}
                   <form onClick={ handleSubmit }>
                      <CardElement  onChange={ handleChange }/>
                     
                      <div className="payment__priceContainer">
                      <CurrencyFormat 
                           renderText={(value)=>(
                          <>
                          <h3>Order Total: {(value)} </h3> 
                         </>    
                       )}
                         decimalScale={2}
                         value={getBasketTotal(basket)}
                         displayType={"text"}
                         thousandSeperator={true}
                         prefix={"₹"}
                     />
                     <button disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>

                     </button>

                      </div>
                      {error && <div> {error} </div>}
                    </form>
                  
                  </div>
             </div>
     </div>
</div>

    )
}

export default Payment
