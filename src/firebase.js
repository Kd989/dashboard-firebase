import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbdyh9d9gSA_Gr80Tcj5ALTpZbHBFfyOk",
  authDomain: "dash-c9ce5.firebaseapp.com",
  projectId: "dash-c9ce5",
  storageBucket: "dash-c9ce5.appspot.com",
  messagingSenderId: "855685916171",
  appId: "1:855685916171:web:b02f045d3f6a23fb3ec90e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);