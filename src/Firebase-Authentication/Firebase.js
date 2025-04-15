import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC9kV3cOis48sAKLEwdgK8Mx7hXtgT6tmw",
  authDomain: "react-authentications-8e1c5.firebaseapp.com",
  projectId: "react-authentications-8e1c5",
  storageBucket: "react-authentications-8e1c5.firebasestorage.app",
  messagingSenderId: "415357544175",
  appId: "1:415357544175:web:2655183dbbac5a94605d1a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)