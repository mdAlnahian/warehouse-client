// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoG6Yn8agMgSxasQ_pXxrmaBNdD7orX8M",
  authDomain: "pr-retailer-new.firebaseapp.com",
  projectId: "pr-retailer-new",
  storageBucket: "pr-retailer-new.appspot.com",
  messagingSenderId: "658481914077",
  appId: "1:658481914077:web:16d83fa8a071e9e72c7b34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;

