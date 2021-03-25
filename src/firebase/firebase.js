import firebase from "firebase/app";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "we-coop.firebaseapp.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
