// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoKruSCfxk62wL0lTeN1OQXYQyXRRKo7c",
  authDomain: "newspaper-9aefe.firebaseapp.com",
  projectId: "newspaper-9aefe",
  storageBucket: "newspaper-9aefe.appspot.com",
  messagingSenderId: "872015882375",
  appId: "1:872015882375:web:f0dd720e227408c6a87022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth