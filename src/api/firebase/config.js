import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAm7shnPaYpJUuUAePwap-jwXH0GA9ppMM",
    authDomain: "qrapp-1e077.firebaseapp.com",
    projectId: "qrapp-1e077",
    storageBucket: "qrapp-1e077.appspot.com",
    messagingSenderId: "80326239986",
    appId: "1:80326239986:web:99433246af7b854b92526b",
    measurementId: "G-FHEKN8RWY7",
    databaseURL: "https://qrapp-1e077-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }