// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB6bIqVWJgnogT7eqXAjg5TA7u4SrEpNuc",
  // authDomain: "sports-equipment-site.firebaseapp.com",
  // projectId: "sports-equipment-site",
  // storageBucket: "sports-equipment-site.firebasestorage.app",
  // messagingSenderId: "158441419946",
  // appId: "1:158441419946:web:196189c4c324258863ccd3"
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;