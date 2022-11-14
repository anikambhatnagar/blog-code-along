import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2-j1-Gtl38H5YheiPqSGVOw2Rnyw_Cok",
  authDomain: "homework-3-bf3b3.firebaseapp.com",
  projectId: "homework-3-bf3b3",
  storageBucket: "homework-3-bf3b3.appspot.com",
  messagingSenderId: "914472409272",
  appId: "1:914472409272:web:a7d3b7f31b923a45927c4d",
  measurementId: "G-VP0PSRVLJP"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)