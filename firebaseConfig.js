// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5rkxvKQl3y-QGLMxhcwiAVuVUmtF4Qq0",
  authDomain: "baby-sitters-5745e.firebaseapp.com",
  projectId: "baby-sitters-5745e",
  storageBucket: "baby-sitters-5745e.appspot.com",
  messagingSenderId: "700050884997",
  appId: "1:700050884997:web:ba24e79dbe3c6850925cec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
