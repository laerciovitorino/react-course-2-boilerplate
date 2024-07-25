import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYgjcgq3mfkZytfqNnhoboH7v4Jz3uMKc",
  authDomain: "expensify-206b7.firebaseapp.com",
  databaseURL: "https://expensify-206b7-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-Y67MCMQD8G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
