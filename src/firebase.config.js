import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFh0JImitZ17tGqMmogXRD_b65zja5pkk",
  authDomain: "earn-code-io.firebaseapp.com",
  projectId: "earn-code-io",
  storageBucket: "earn-code-io.firebasestorage.app",
  messagingSenderId: "398143817993",
  appId: "1:398143817993:web:abc8bbde69498b423aabd8",
  measurementId: "G-W8XW2ZPGNY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
