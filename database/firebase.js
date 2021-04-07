import firebase from 'firebase'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwrLpTU4bgfqMaNJfkimp9KmAgnTeI9R0",
    authDomain: "react-native-firebase-19a25.firebaseapp.com",
    projectId: "react-native-firebase-19a25",
    storageBucket: "react-native-firebase-19a25.appspot.com",
    messagingSenderId: "863582865378",
    appId: "1:863582865378:web:825a7d1964e59f2898dbbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()


  export default{
    firebase,
    db
  }