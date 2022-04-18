// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQuu_2mIyaG7GjdjCJjc2sH0lNmVaJpWM",
  authDomain: "royal-photography-8a502.firebaseapp.com",
  projectId: "royal-photography-8a502",
  storageBucket: "royal-photography-8a502.appspot.com",
  messagingSenderId: "1000356302227",
  appId: "1:1000356302227:web:61bac9f5cb8cc56de2ec66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
