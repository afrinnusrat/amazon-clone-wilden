import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyACZQZaGeA65lpRxN868XcXdg3H_HWTVRs",
  authDomain: "amazoen-clone-wilden.firebaseapp.com",
  databaseURL: "https://amazoen-clone-wilden.firebaseio.com",
  projectId: "amazoen-clone-wilden",
  storageBucket: "amazoen-clone-wilden.appspot.com",
  messagingSenderId: "674087619961",
  appId: "1:674087619961:web:5594acc023823fc3fef3a8",
  measurementId: "G-0JEGWW2EEF"
});

const auth = firebase.auth();

export { auth };