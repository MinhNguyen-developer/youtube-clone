/** @format */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOTCmdxTuooKqyA-T8UGKbrTUtwetjEo4",
  authDomain: "clone-3ca83.firebaseapp.com",
  projectId: "clone-3ca83",
  storageBucket: "clone-3ca83.appspot.com",
  messagingSenderId: "312157965349",
  appId: "1:312157965349:web:e10c4f119e2ca2991a43cc",
  measurementId: "G-GXYMV1XN6C",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
