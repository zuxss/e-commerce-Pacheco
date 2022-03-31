import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLP6B6jql2anJA4nmXzCx3L-xuSVAwCsY",
  authDomain: "carrito-pokemon.firebaseapp.com",
  projectId: "carrito-pokemon",
  storageBucket: "carrito-pokemon.appspot.com",
  messagingSenderId: "904624715117",
  appId: "1:904624715117:web:4dcf042d47e015a2339664",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
