import firebase from 'firebase';
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyB5Mcyk7RL-ToKIQdRoas0Gp3dnl3j5iD8",
    authDomain: "database-test-4fec5.firebaseapp.com",
    projectId: "database-test-4fec5",
    storageBucket: "database-test-4fec5.appspot.com",
    messagingSenderId: "1066079591241",
    appId: "1:1066079591241:web:7ad9e39d3790a624255898",
    measurementId: "G-7RE9DZG4RE"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;

  