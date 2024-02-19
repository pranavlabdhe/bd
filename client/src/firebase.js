// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1VEkLDfTZCIS2u_yCgsTwF47WdaB5MXQ",
  authDomain: "blog-89278.firebaseapp.com",
  projectId: "blog-89278",
  storageBucket: "blog-89278.appspot.com",
  messagingSenderId: "102882198737",
  appId: "1:102882198737:web:5bdf2e519ee235ea1371f0",
  measurementId: "G-86HMDJF9DP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);