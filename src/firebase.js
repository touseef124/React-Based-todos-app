
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

var firebaseConfig = {
    apiKey: "AIzaSyDROtvZESOsrFtR_KNE_3ppoxMHPZq8hD4",
    authDomain: "fir-database-f7b0b.firebaseapp.com",
    databaseURL: "https://fir-database-f7b0b.firebaseio.com",
    projectId: "fir-database-f7b0b",
    storageBucket: "fir-database-f7b0b.appspot.com",
    messagingSenderId: "731420709027",
    appId: "1:731420709027:web:37c9ad24ba3badddc02f16"
  };
  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);