// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWMMBHth6FsMuQfUahLqX8Hr5IwQZKao4",
    authDomain: "simple-authentication-fi-e69cc.firebaseapp.com",
    projectId: "simple-authentication-fi-e69cc",
    storageBucket: "simple-authentication-fi-e69cc.appspot.com",
    messagingSenderId: "1000898523426",
    appId: "1:1000898523426:web:49cb745c578b38e015757b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;