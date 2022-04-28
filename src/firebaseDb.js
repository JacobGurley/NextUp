import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFTX6Mgr6gXPbgKzzlBb2S5LXOgzoi3Ns",
  authDomain: "nextup-e7ea6.firebaseapp.com",
  projectId: "nextup-e7ea6",
  storageBucket: "nextup-e7ea6.appspot.com",
  messagingSenderId: "271219655581",
  appId: "1:271219655581:web:facf706538f4354a19a574",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
