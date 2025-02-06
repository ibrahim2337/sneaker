import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvsbZwJtTZhwpBlp4orXd0l9MGqsCfMyw",
  authDomain: "sneaker-428fe.firebaseapp.com",
  projectId: "sneaker-428fe",
  storageBucket: "sneaker-428fe.firebasestorage.app",
  messagingSenderId: "265603158512",
  appId: "1:265603158512:web:74f1454b4d9726b5004d35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
