// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6be86.firebaseapp.com",
  projectId: "mern-blog-6be86",
  storageBucket: "mern-blog-6be86.appspot.com",
  messagingSenderId: "1029402344986",
  appId: "1:1029402344986:web:e38df0e45e694dc3d7dba3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);