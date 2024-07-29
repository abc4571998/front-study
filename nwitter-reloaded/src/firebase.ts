import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyANnlLr35PQtsHo5a68Oeqng0Wb1pPsqu8",
  authDomain: "nwitter-reloaded-d745f.firebaseapp.com",
  projectId: "nwitter-reloaded-d745f",
  storageBucket: "nwitter-reloaded-d745f.appspot.com",
  messagingSenderId: "914680644530",
  appId: "1:914680644530:web:2018a142a9a6e7afd1daab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
