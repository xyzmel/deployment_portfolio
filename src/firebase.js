
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAW0GJir5lO4TvHuDeGakBmIr7YkiIxeiw",
  authDomain: "portfolio-81f1c.firebaseapp.com",
  projectId: "portfolio-81f1c",
  storageBucket: "portfolio-81f1c.appspot.com",
  messagingSenderId: "715064443284",
  appId: "1:715064443284:web:dc1f1831b32e05fbbb8f8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);