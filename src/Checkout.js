// Author: @devangs

import React from 'react'
import useStateValue from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"
import "./Checkout.css"


function Checkout() {
     // eslint-disable-next-line
    const [{ user,basket} , dispatch]= useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__left" >
           <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" /> 
           {basket?.length === 0 ?(
               <div>
                   <h2>Your shopping basket is empty</h2>
                   <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item</p>
               </div>
           ):(
               <div>
                  <h3>Hello, {user?.email}</h3>
                   <h2 className="checkout__title">Here is your shopping basket</h2>
                   {basket.map(item =>(
                       <CheckoutProduct
                       id = {item.id}
                       title={item.title}
                       price={item.price}
                       image={item.image}
                       rating={item.rating}
                       
                        />
                   ))}
               </div>
           )}
           </div>
           {basket.length > 0 && (
               <div className="checkout__right">
               <Subtotal />
               </div>
           )}
        </div>
    );
}

export default Checkout
