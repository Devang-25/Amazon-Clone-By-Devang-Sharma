// Author: @devangs

import React,{useState} from 'react';
import "./Product.css";
import useStateValue from './StateProvider';

function Product({id, title, price, rating, image}) {
    // eslint-disable-next-line
   const [{basket} , dispatch]= useStateValue();
//const[isMouseOver, setIsMouseOver]= useState(false);

   const addToBasket = ()=>{
       dispatch({
           type: "ADD_TO_BASKET",
           item:{
               id:id,
               title:title,
               image:image,
               price:price,
               rating:rating,
           },
       });
   };
    
    return (
        <div className="product" >
        <div className="product___info"> 
         <p>{title}</p>
          <p className="product__price">
              <small>₹</small>
              <strong>{price}</strong>
          </p>
            <div className="product__rating">
               {
                   Array(rating).fill().map((_)=>{
                       // eslint-disable-next-line
                       return <p>⭐</p>
                   })
               }
            </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product

