// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAjZBLacayBgkB_uDnhm4SnCIAb5vptJCg",
   authDomain: "gptapp-9d363.firebaseapp.com",
   projectId: "gptapp-9d363",
   storageBucket: "gptapp-9d363.appspot.com",
   messagingSenderId: "840193690881",
   appId: "1:840193690881:web:ac10955462286946491f00",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}