// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQFbx_kNt5kEXrHem3muzYnrzDEOcIM30",
  authDomain: "my-mobile-shop-699c1.firebaseapp.com",
  projectId: "my-mobile-shop-699c1",
  storageBucket: "my-mobile-shop-699c1.appspot.com",
  messagingSenderId: "804752129439",
  appId: "1:804752129439:web:8b5d9cd55298d178c6d1aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

const auth=getAuth(app);
export default auth ;