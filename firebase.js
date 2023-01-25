import {initializeApp } from "firebase/app";
import {getFirestore }from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6SoijZNShmV0rdTj-MdgfbEOWIxYuONI",
  authDomain: "todo-crud-96792.firebaseapp.com",
  projectId: "todo-crud-96792",
  storageBucket: "todo-crud-96792.appspot.com",
  messagingSenderId: "588383549451",
  appId: "1:588383549451:web:78432edd682613277f2f0e",
  measurementId: "G-Z2D8SN4G5D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db };