import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXcTPFth9I4DypLkH60UrH8H2_ina8WHM",
  authDomain: "eshop-b0351.firebaseapp.com",
  projectId: "eshop-b0351",
  storageBucket: "eshop-b0351.appspot.com",
  messagingSenderId: "345520183148",
  appId: "1:345520183148:web:179c56dc4f7d237523c549",
  measurementId: "G-7YFC5XWB0P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
