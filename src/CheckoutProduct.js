// Author: @devangs

import React from 'react'
import "./CheckoutProduct.css";
import useStateValue from './StateProvider';

function CheckoutProduct({id , title, image, price, rating , hideButton}) {
    // eslint-disable-next-line
    const [{basket}, dispatch]= useStateValue();
    const removeFromBasket = ()=>{
       dispatch({
           type : "REMOVE_FROM_BASKET",
           id : id,
       });
       
    }
   
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                  {
                   Array(rating).fill().map((_)=>{
                       // eslint-disable-next-line
                       return <p>⭐</p>
                   })
                 }
            </div>
            {!hideButton &&(  <button onClick={removeFromBasket} >Remove from the basket</button>)}
          
            </div>
        </div>
    )
}

export default CheckoutProduct
