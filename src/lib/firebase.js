
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "chatter-f525d.firebaseapp.com",
  projectId: "chatter-f525d",
  storageBucket: "chatter-f525d.appspot.com",
  messagingSenderId: "548989037001",
  appId: "1:548989037001:web:3cf9a5a367902ac5632018"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

