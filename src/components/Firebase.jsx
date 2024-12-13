import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDbjXFTxJviuAcOvkBi18M4Ca9_p9hu5ww",
  authDomain: "social-media-1abcd.firebaseapp.com",
  projectId: "social-media-1abcd",
  storageBucket: "social-media-1abcd.firebasestorage.app",
  messagingSenderId: "378803694007",
  appId: "1:378803694007:web:dbc40c7288ea466386a032"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {auth, firestore, onAuthStateChanged,};