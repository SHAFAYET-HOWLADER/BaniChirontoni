
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSq4-hUXWBblvkFMJgtyBk9T7MsyBmMPM",
  authDomain: "imghosting-9ced0.firebaseapp.com",
  projectId: "imghosting-9ced0",
  storageBucket: "imghosting-9ced0.appspot.com",
  messagingSenderId: "926284949447",
  appId: "1:926284949447:web:319520a12e08e21201dbe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;