// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH6J0-YMZv8dFkPU_r3Y0OtAnFoJtY5xw",
    authDomain: "medikshop-9b9ed.firebaseapp.com",
    projectId: "medikshop-9b9ed",
    storageBucket: "medikshop-9b9ed.appspot.com",
    messagingSenderId: "84775068804",
    appId: "1:84775068804:web:59abefc49e2b4103518ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth