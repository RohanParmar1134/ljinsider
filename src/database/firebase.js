import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_03r_FlDVJNEtefh7qdGsrOokrhLnD94",
    authDomain: "ljinsiders-5c10d.firebaseapp.com",
    projectId: "ljinsiders-5c10d",
    storageBucket: "ljinsiders-5c10d.appspot.com",
    messagingSenderId: "200359282114",
    appId: "1:200359282114:web:fa05c8a847e016ce65825b",
    measurementId: "G-ZDP5L568RW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

export default firestore;