import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    // Your credentials
    apiKey: "AIzaSyA9QC0EMc0lZj4MfSbOWAHUi8jo27K-qj8",
    authDomain: "react-minor-demo.firebaseapp.com",
    databaseURL: "https://react-minor-demo-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-minor-demo",
    storageBucket: "react-minor-demo.appspot.com",
    messagingSenderId: "56042135778",
    appId: "1:56042135778:web:5564362569ca2786573ebb"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
