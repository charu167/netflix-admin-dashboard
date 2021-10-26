import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2JcfbjZWSccBCqaSZWUKa_q7a3OkR0oE",
  authDomain: "netflix-65ebe.firebaseapp.com",
  projectId: "netflix-65ebe",
  storageBucket: "netflix-65ebe.appspot.com",
  messagingSenderId: "172489664688",
  appId: "1:172489664688:web:425167a540a3489d2e3375",
  measurementId: "G-VZ8RW1LFWC",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
