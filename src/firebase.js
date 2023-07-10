
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAOaePfNJGMuOn9-uLTgqKUcwR4m3ThwSs",
  authDomain: "thekeymind-d8d3e.firebaseapp.com",
  databaseURL: "https://thekeymind-d8d3e-default-rtdb.firebaseio.com",
  projectId: "thekeymind-d8d3e",
  storageBucket: "thekeymind-d8d3e.appspot.com",
  messagingSenderId: "74551672960",
  appId: "1:74551672960:web:2a9c2e2d3186c6441da665",
  measurementId: "G-0RR57WP68D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };