// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3BKz18k5Tzfba6savyEARPgPxydNMYyU",
  authDomain: "main-e-commerse-project.firebaseapp.com",
  projectId: "main-e-commerse-project",
  storageBucket: "main-e-commerse-project.appspot.com",
  messagingSenderId: "288644798279",
  appId: "1:288644798279:web:cce2ba56ac75f98e3f1e62",
  measurementId: "G-JC1GDX88J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore(app);