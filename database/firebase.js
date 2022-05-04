import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7kKEkWtWyl5Zj6BSFv-9hr6IqYjUPKM0",
    authDomain: "react-native-firebase-24e3c.firebaseapp.com",
    projectId: "react-native-firebase-24e3c",
    storageBucket: "react-native-firebase-24e3c.appspot.com",
    messagingSenderId: "273106777681",
    appId: "1:273106777681:web:91e919d101ab40a75b6a70"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db,
  }