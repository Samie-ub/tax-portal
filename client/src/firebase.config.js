// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAhg0_SjncjeeJGk832SWMykwG1qMoRODo",
  authDomain: "tax-portal-email.firebaseapp.com",
  projectId: "tax-portal-email",
  storageBucket: "tax-portal-email.appspot.com",
  messagingSenderId: "517474997345",
  appId: "1:517474997345:web:e97672942206c52d340620",
  measurementId: "G-TTSXTJE7YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
