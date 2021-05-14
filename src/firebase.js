import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCZzP6IY8hSjVxKjJpB5Z5ooZxkfEse8vU",
    authDomain: "react-authen-cd669.firebaseapp.com",
    databaseURL: "https://react-authen-cd669-default-rtdb.firebaseio.com",
    projectId: "react-authen-cd669",
    storageBucket: "react-authen-cd669.appspot.com",
    messagingSenderId: "264893479060",
    appId: "1:264893479060:web:299f7f71512531b28a5c81"
})

export default firebaseConfig