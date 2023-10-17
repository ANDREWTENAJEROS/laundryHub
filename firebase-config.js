// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBggfm-b7z6u6jV8xTf-j9d0Y0ukhT3E8U",
  authDomain: "laundryhub-ba0fc.firebaseapp.com",
  projectId: "laundryhub-ba0fc",
  storageBucket: "laundryhub-ba0fc.appspot.com",
  messagingSenderId: "584728688304",
  appId: "1:584728688304:web:1b6ca9006c0a3b544c6d75",
  measurementId: "G-X75GH4B0PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);