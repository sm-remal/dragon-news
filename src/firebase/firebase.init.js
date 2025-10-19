// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaidgIKZXv04Ia4VsjSa9IN_WxS3NcyWw",
  authDomain: "dragon-news-44a46.firebaseapp.com",
  projectId: "dragon-news-44a46",
  storageBucket: "dragon-news-44a46.firebasestorage.app",
  messagingSenderId: "1078926887239",
  appId: "1:1078926887239:web:1f9bd228619a0d11e8e462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);