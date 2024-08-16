// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDKbFNYy1uLj4JVxsIaU6dC8nB4Q1LcUY",
  authDomain: "flashsaas-ffa20.firebaseapp.com",
  projectId: "flashsaas-ffa20",
  storageBucket: "flashsaas-ffa20.appspot.com",
  messagingSenderId: "893942199871",
  appId: "1:893942199871:web:7d6d5ec725fd0e624fea8a",
  measurementId: "G-TMFHEXX8KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);