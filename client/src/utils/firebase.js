// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "calendar-5b632.firebaseapp.com",
  projectId: "calendar-5b632",
  storageBucket: "calendar-5b632.firebasestorage.app",
  messagingSenderId: "487191362420",
  appId: "1:487191362420:web:86f5c8d8575fdf8a0c4a21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);