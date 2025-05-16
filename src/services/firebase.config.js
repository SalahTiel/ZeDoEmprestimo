// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXozTA_Hxekxx5nd1XqPOXDkTYVYKwKj4",
  authDomain: "zedoemprestimo.firebaseapp.com",
  projectId: "zedoemprestimo",
  storageBucket: "zedoemprestimo.firebasestorage.app",
  messagingSenderId: "1008302718707",
  appId: "1:1008302718707:web:1f2a3dfa295b65e4774186",
  measurementId: "G-NM7NKE7B4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {auth, db}