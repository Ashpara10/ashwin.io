// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbLf-0wYx724DRe2vxWj8pdqUAp0DX9Go",
  authDomain: "my-site-398916.firebaseapp.com",
  projectId: "my-site-398916",
  storageBucket: "my-site-398916.appspot.com",
  messagingSenderId: "978783310500",
  appId: "1:978783310500:web:b3d6481777da090a964c31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
