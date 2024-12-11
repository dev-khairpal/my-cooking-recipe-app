import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzuN12Yeo93U4NCfQmqFgZA4q6WDEbpEE",
  authDomain: "cooking-recipe-keeper.firebaseapp.com",
  projectId: "cooking-recipe-keeper",
  storageBucket: "cooking-recipe-keeper.firebasestorage.app",
  messagingSenderId: "968017801571",
  appId: "1:968017801571:web:8725ec3469dee6fdd3e356",
  measurementId: "G-XBZHRPX604",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export  { projectFirestore };
