// Author: @devangs

import firebase from "firebase";
// eslint-disable-next-line
const firebaseConfig = {
    apiKey: "AIzaSyA9Gw5vMThyoMjIM0l4P34__7bg6T-HpTQ",
    authDomain: "clone-devang.firebaseapp.com",
    projectId: "clone-devang",
    storageBucket: "clone-devang.appspot.com",
    messagingSenderId: "947620072798",
    appId: "1:947620072798:web:e06489ea5eaf064cf353cf",
    measurementId: "G-8FB3SJMNNL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
export default auth;