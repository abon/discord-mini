import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDr6mO82XeMXC_7kdiVO-U1OcTyZm9qFTg",
  authDomain: "discord-clone-71575.firebaseapp.com",
  projectId: "discord-clone-71575",
  storageBucket: "discord-clone-71575.appspot.com",
  messagingSenderId: "1022947902829",
  appId: "1:1022947902829:web:6eecad3a3bcde0b726c664",
  measurementId: "G-LX9BK0HNY0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
