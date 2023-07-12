import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpYsUEvQMFhWpTyVF998SyWAGI-sRqIrg",
  authDomain: "freelance-450d2.firebaseapp.com",
  projectId: "freelance-450d2",
  storageBucket: "freelance-450d2.appspot.com",
  messagingSenderId: "666022868589",
  appId: "1:666022868589:web:fd1dfdfe716f0a1c96f164"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)