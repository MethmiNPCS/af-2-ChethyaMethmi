import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiqq7sooz4qI8GoKNDcV2d56Yjr3iTMQg",
  authDomain: "hellocountries-132c1.firebaseapp.com",
  projectId: "hellocountries-132c1",
  storageBucket: "hellocountries-132c1.firebasestorage.app",
  messagingSenderId: "1000096146409",
  appId: "1:1000096146409:web:77d26c04fde999d3f02178",
  measurementId: "G-Y1SCH8N9H0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
