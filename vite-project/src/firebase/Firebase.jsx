// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARJ2FBxZqpZCCBVe_ZnzohtduoRrKWNLo",
  authDomain: "ecommerce-website-be6c4.firebaseapp.com",
  projectId: "ecommerce-website-be6c4",
  storageBucket: "ecommerce-website-be6c4.appspot.com",
  messagingSenderId: "371409586428",
  appId: "1:371409586428:web:61fdd061b530f24ff22f79"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);

export{fireDB,auth}