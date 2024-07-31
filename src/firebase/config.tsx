// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyCGUV3IZY-VX1sChebQbg33Zjb17fQChPc",
  authDomain: "bif-fight.firebaseapp.com",
  projectId: "bif-fight",
  storageBucket: "bif-fight.appspot.com",
  messagingSenderId: "980732728798",
  appId: "1:980732728798:web:0e978223aaa31a7908b94f",
  measurementId: "G-LMQJ5CEVWD",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;
export const functions = getFunctions(firebase_app);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
