import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyKRWdc9YiLI-wo5StPUSsDVavMkn1fgY",
  authDomain: "hackmercedix.firebaseapp.com",
  projectId: "hackmercedix",
  storageBucket: "hackmercedix.appspot.com",
  messagingSenderId: "930309162938",
  appId: "1:930309162938:web:175e2f9d005e0dc2f23f83"
};

const app = initializeApp(firebaseConfig);

//If we need more add here.  Access using imports.
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const serverStamp = firebase.firestore.Timestamp