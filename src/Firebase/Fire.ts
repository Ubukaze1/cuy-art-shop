import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",
  authDomain: "cuyart-shop.firebaseapp.com",
  projectId: "cuyart-shop",
  storageBucket: "cuyart-shop.appspot.com",
  messagingSenderId: "906331708937",
  appId: "1:906331708937:web:bbf3a749bd30b61b5d22d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db, app}