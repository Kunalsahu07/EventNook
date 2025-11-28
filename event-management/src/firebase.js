// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXsRXeGOE7xzbz4wr2VLuPqvcCfJRsD6w",
  authDomain: "event-management-8cf64.firebaseapp.com",
  projectId: "event-management-8cf64",
  storageBucket: "event-management-8cf64.firebasestorage.app",
  messagingSenderId: "726752309410",
  appId: "1:726752309410:web:dacb39fd97fbbbf90a27fb",
  measurementId: "G-50230Z445L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);  // <-- IMPORTANT
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);