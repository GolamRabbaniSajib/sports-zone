// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6bIqVWJgnogT7eqXAjg5TA7u4SrEpNuc",
  authDomain: "sports-equipment-site.firebaseapp.com",
  projectId: "sports-equipment-site",
  storageBucket: "sports-equipment-site.firebasestorage.app",
  messagingSenderId: "158441419946",
  appId: "1:158441419946:web:196189c4c324258863ccd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;