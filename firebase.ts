import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsx_mslf5rjw4wKhHwRROIi78sw5k-PCc",
  authDomain: "chatgptclone-963cb.firebaseapp.com",
  projectId: "chatgptclone-963cb",
  storageBucket: "chatgptclone-963cb.appspot.com",
  messagingSenderId: "588651196869",
  appId: "1:588651196869:web:636e7bb2573a8a7bfadbac",
  measurementId: "G-N8G5RYKS53"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}