// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5a2b2.firebaseapp.com",
  projectId: "mern-blog-5a2b2",
  storageBucket: "mern-blog-5a2b2.firebasestorage.app",
  messagingSenderId: "522821991613",
  appId: "1:522821991613:web:224a768904ccbad425cbd4",
  measurementId: "G-8F01TJ0R7G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
