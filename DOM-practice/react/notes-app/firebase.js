import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAp_mCjP9CYWgtrYfTfhP6yM3-FsXaeNN8",
  authDomain: "react-notes-app-ec66d.firebaseapp.com",
  projectId: "react-notes-app-ec66d",
  storageBucket: "react-notes-app-ec66d.appspot.com",
  messagingSenderId: "863138498858",
  appId: "1:863138498858:web:59ac41d6623729c92d7653",
  measurementId: "G-EDWNJR8LPE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
