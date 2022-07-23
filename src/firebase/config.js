import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrMpjHtxIDDjx21PSVtNwF8ojW8Abn5yk",
  authDomain: "firegram-de69f.firebaseapp.com",
  projectId: "firegram-de69f",
  storageBucket: "firegram-de69f.appspot.com",
  messagingSenderId: "178199724922",
  appId: "1:178199724922:web:f47f0b1307cbca2d984cc3",
};

// Initialize Firebase
const app = firebase.default.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
