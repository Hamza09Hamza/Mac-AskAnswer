import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD8Q6qqfb2S305ov4gb_zo_4Bv65qw_6KU",
  authDomain: "ask-answer-32461.firebaseapp.com",
  projectId: "ask-answer-32461",
  storageBucket: "ask-answer-32461.appspot.com",
  messagingSenderId: "733893398157",
  appId: "1:733893398157:web:5405d9144e4f1b44985cc4",
  measurementId: "G-332NREGYPJ"
};

const app = initializeApp(firebaseConfig);
export const  Auth= getAuth(app);
export const RTDatabase= getDatabase(app);
export const Firestore= getFirestore(app)
export const Storage= getStorage(app)
