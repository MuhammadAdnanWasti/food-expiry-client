// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGMb4AieGfn3JFA0EuDMCJYZt0y7T_Hc",
  authDomain: "food-expiry-tracker-bbdfe.firebaseapp.com",
  projectId: "food-expiry-tracker-bbdfe",
  storageBucket: "food-expiry-tracker-bbdfe.firebasestorage.app",
  messagingSenderId: "546523059693",
  appId: "1:546523059693:web:2e04b687d99ef6608f43e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);