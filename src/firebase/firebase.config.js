// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxTmhTvxhraWI_uKY9AvsoRdUVEVGsPmM",
  authDomain: "assignment-11-toy-firebase.firebaseapp.com",
  projectId: "assignment-11-toy-firebase",
  storageBucket: "assignment-11-toy-firebase.appspot.com",
  messagingSenderId: "732167978785",
  appId: "1:732167978785:web:cfeeab3a4bc1d385360860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;