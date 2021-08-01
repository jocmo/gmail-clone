import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6AaN44Nb_icI2Fk5uDWuIoTluWjBq5xo",
    authDomain: "clone-6c4f0.firebaseapp.com",
    projectId: "clone-6c4f0",
    storageBucket: "clone-6c4f0.appspot.com",
    messagingSenderId: "398611783087",
    appId: "1:398611783087:web:ad42b7396c02f3e7f6a35a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };