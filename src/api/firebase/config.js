// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_vjda1Bj0URRNEIjxQ_axGzm2t3elCd4",
  authDomain: "qrapp-16095.firebaseapp.com",
  projectId: "qrapp-16095",
  storageBucket: "qrapp-16095.appspot.com",
  messagingSenderId: "840010868200",
  appId: "1:840010868200:web:78b3ac914b805ec593305d",
  measurementId: "G-6E49HLQ255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);