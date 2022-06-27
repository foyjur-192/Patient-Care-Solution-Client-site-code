// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5SioB4X4mydWmkoiSfxYbr85HCqFNR4",
  authDomain: "search-doctor-c5b9c.firebaseapp.com",
  projectId: "search-doctor-c5b9c",
  storageBucket: "search-doctor-c5b9c.appspot.com",
  messagingSenderId: "1016178898143",
  appId: "1:1016178898143:web:e8d89b13819982600a256a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;