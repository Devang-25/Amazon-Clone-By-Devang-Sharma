// Author: @devangs

import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import "./Orders.css"
import useStateValue from './StateProvider';
import Order from "./Order";

function Orders() {
 const [orders , setOrders]= useState([]);
 const [{basket , user}, dispatch]= useStateValue();

 useEffect(()=>{
     if(user){
        db
        .collection("orders")
        .doc(user?.uid)
        .collection("users")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>(
            setOrders(snapshot.docs.map(doc=>({
                id : doc.id,
                data : doc.data()
            })))
        ))
     } else {
         setOrders([]);
     }
 }, [user])

    return (
        <div className="orders">
            <h1>Your orders</h1>
            <div className="orders__order">
              {orders?.map(order=>(
                  <Order order={order}/>
              ))}
            </div>
        </div>
    )
}

export default Orders
