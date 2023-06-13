// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63eumVFE37GfsiSeBKxssmr0nrCmay9s",
  authDomain: "otp-project-b0d26.firebaseapp.com",
  projectId: "otp-project-b0d26",
  storageBucket: "otp-project-b0d26.appspot.com",
  messagingSenderId: "91502891808",
  appId: "1:91502891808:web:939186ea3a3569a0cafd45",
  measurementId: "G-END1H43N93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
