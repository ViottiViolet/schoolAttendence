
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF4zbCtNL-cdyZEbmwUbI9qIfWqi4-uiM",
  authDomain: "buzzer-app-a79f1.firebaseapp.com",
  databaseURL: "https://buzzer-app-a79f1-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-a79f1",
  storageBucket: "buzzer-app-a79f1.appspot.com",
  messagingSenderId: "899037663329",
  appId: "1:899037663329:web:367cbd047556597cd65a20",
  measurementId: "G-V07WYLJHV2"
};

firebase.initializeApp(firebaseConfig)
export default firebase.database()

  