import { initializeApp } from "firebase/app";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvyenyUcJXLRCBVpTikmbdSOmYgPstSEs",
  authDomain: "newsvita-59b66.firebaseapp.com",
  projectId: "newsvita-59b66",
  storageBucket: "newsvita-59b66.firebasestorage.app",
  messagingSenderId: "19143139939",
  appId: "1:19143139939:web:c0cb42a6bc867a47308e56",
  measurementId: "G-XFR1PS5F7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
