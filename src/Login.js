// Author: @devangs

import React, { useState } from 'react';
import "./Login.css";
import  auth from "./firebase";
import {Link , useHistory} from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{

          history.push("/");
        })
        .catch((e)=> alert(e.message));
    };

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
          history.push("/");
        })
        .catch((e) =>alert(e.message));
    };

    return (
        <div className="login">
          <Link to='/'>
          <img className="login__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
             alt="img"/>
        </Link>
        <div className="login__container"> 
          <h1>Sign In</h1>
          <form>
              <h5>Email</h5>
              <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
              <h5>Password</h5>
              <input type="password" value={password} onChange={event=> setPassword(event.target.value)} />
              <button onClick={login}  type="submit" className="login__signInButton">Sign in</button>
          </form>
          <p> By signing-in you agree to Amazon's conditions of use and sale. Please see our privacy notice, cookies notice and our interest based ads notice</p>
          <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
        </div>
           
        </div>
    )
}

export default Login
