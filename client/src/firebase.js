// Import the functions you need from the SDKs you need
import  firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTqvPFqGfcjwbACIAwKl2eYHDD584NHik",
  authDomain: "task-management-85a9f.firebaseapp.com",
  projectId: "task-management-85a9f",
  storageBucket: "task-management-85a9f.appspot.com",
  messagingSenderId: "84655993841",
  appId: "1:84655993841:web:fd28d6bfd17e19c3ec4a50",
  measurementId: "G-N18GX4VFW1"
};

// Initialize Firebase

export const app= initializeApp(firebaseConfig);
export const auth= getAuth(app);