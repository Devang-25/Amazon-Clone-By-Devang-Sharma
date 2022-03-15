// Author: @devangs

import React, {useEffect} from 'react';
import Checkout from "./Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import './App.css';
import Login from './Login';
import auth from "./firebase";
import useStateValue from './StateProvider';
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import  Orders from "./Orders";

const promise = loadStripe("pk_test_51HQBDXB2ReZD5im6i3hLUK3klChDdR5mMIaSgHvBLXFX5Xj0fiJ78VWW0Gm1CxvumH8JxETePjkY7H8Hlft3vJhW00KSF3xQAb");


function App() {
  const [{user}, dispatch]= useStateValue();
  

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if(authUser){
        dispatch({
          type: "SET_USER",
          user : authUser,
        });
    }else{
      dispatch({
        type: "SET_USER",
        user : null,
      });
    }
   });
   return ()=>{
    unsubscribe();
   }
 }, []);


// useEffect(() => {
//   effect
//   return () => {
//     cleanup
//   }
// }, [input])



  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/checkout">
          <Header />
          <Checkout />
      </Route>
      <Route path="/orders">
         <Header />
        <Orders />
      </Route>

      <Route path="/login">
       <Login />
      </Route>

      <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>  
      </Route>
      
      <Route path="/">
          <Header />
          <Home />
      </Route>
     
      </Switch>
    </div>
    </Router>
  );
}

export default App;
