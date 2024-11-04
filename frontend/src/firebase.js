// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUBhu8vF_sybpALEEz2KF9sr1oorXsDC8",
  authDomain: "flashconnect-bab08.firebaseapp.com",
  projectId: "flashconnect-bab08",
  storageBucket: "flashconnect-bab08.firebasestorage.app",
  messagingSenderId: "1091655628707",
  appId: "1:1091655628707:web:18fd5049d7b0027066cc16",
  measurementId: "G-4RXNJJJ3KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
