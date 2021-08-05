import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCe_Bstg8O2KEqMqinAOS_tFpvwDOozbhA",
    authDomain: "firechat-d632b.firebaseapp.com",
    projectId: "firechat-d632b",
    storageBucket: "firechat-d632b.appspot.com",
    messagingSenderId: "791195159",
    appId: "1:791195159:web:cfdec2455a1d3519c2b652",
    measurementId: "G-SPPCRLTG1V"
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}