// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBekX80aEi1fgAeGdtjxYqLlBI6hx4jMG4",
  authDomain: "resto-5b80e.firebaseapp.com",
  projectId: "resto-5b80e",
  storageBucket: "resto-5b80e.firebasestorage.app",
  messagingSenderId: "114073379506",
  appId: "1:114073379506:web:09aefe8ba0df6c6ded9fab",
  measurementId: "G-L3ZJMXCC9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);