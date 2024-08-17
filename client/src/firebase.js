// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-46bcb.firebaseapp.com",
  projectId: "mern-auth-46bcb",
  storageBucket: "mern-auth-46bcb.appspot.com",
  messagingSenderId: "20193219125",
  appId: "1:20193219125:web:82298661beda2d2285d77c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
