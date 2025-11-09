// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIp51ujUAQqvD3wx0aGK2-xVJSTwcGWE4",
  authDomain: "kindplate-fe65e.firebaseapp.com",
  projectId: "kindplate-fe65e",
  storageBucket: "kindplate-fe65e.firebasestorage.app",
  messagingSenderId: "357314127567",
  appId: "1:357314127567:web:018d7357f2f328e0ccb9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);