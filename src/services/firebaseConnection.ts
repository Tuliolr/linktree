
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHe5BOLdVOzEuywZWw7gg9bcl-K56JvvE",
  authDomain: "reactlinks-b8d6d.firebaseapp.com",
  projectId: "reactlinks-b8d6d",
  storageBucket: "reactlinks-b8d6d.appspot.com",
  messagingSenderId: "321881318265",
  appId: "1:321881318265:web:615020012e85d8428c05a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};