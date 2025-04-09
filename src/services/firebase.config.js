// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLND1zj74LN88Brjxf-R_UzTkhG08GX_M",
  authDomain: "meu-site-78d42.firebaseapp.com",
  projectId: "meu-site-78d42",
  storageBucket: "meu-site-78d42.firebasestorage.app",
  messagingSenderId: "147454616402",
  appId: "1:147454616402:web:7d6f089caa2b00d65bd08b",
  measurementId: "G-7T5V8S37QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);