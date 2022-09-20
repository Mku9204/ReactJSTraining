// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD09etPyyKb8jfU3YN59TBk8dVGmk7NwNE",
    authDomain: "facebook-app-28731.firebaseapp.com",
    projectId: "facebook-app-28731",
    storageBucket: "facebook-app-28731.appspot.com",
    messagingSenderId: "604984848996",
    appId: "1:604984848996:web:b3c42c0a9316cc006fe571"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);
export default firebaseConfig;