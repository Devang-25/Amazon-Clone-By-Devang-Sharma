// Author: @devangs

import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import useStateValue from './StateProvider';
import{ useHistory} from "react-router-dom";

function Subtotal() {
    // eslint-disable-next-line
    const [{basket}, dispatch]= useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
        <CurrencyFormat 
          renderText={(value)=>(
          
             <>
              <p>Subtotal ({basket.length} items ): <strong>{ (value)}</strong>
              </p>
              <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
              </small>
             
              </>    
          )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"₹"}
        />
            <button onClick={e=> history.push("/payment")}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
