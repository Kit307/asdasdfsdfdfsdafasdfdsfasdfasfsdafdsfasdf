// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmbfD55_PD17ZvWC61eIhuhPSjpUrKwvk",
  authDomain: "worachetbaramee.firebaseapp.com",
  projectId: "worachetbaramee",
  storageBucket: "worachetbaramee.appspot.com",
  messagingSenderId: "836147729444",
  appId: "1:836147729444:web:af0630d90e2e20ddc034b1",
  measurementId: "G-ME0HRM8S5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
