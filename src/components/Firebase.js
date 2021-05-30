import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyD96m9j7C193eZq7fJVrK_ScPagCuvpNyA",
  authDomain: "unichat-bcc21.firebaseapp.com",
  projectId: "unichat-bcc21",
  storageBucket: "unichat-bcc21.appspot.com",
  messagingSenderId: "25616655771",
  appId: "1:25616655771:web:59514de7b4f7bf1de86d3e",
}).auth();