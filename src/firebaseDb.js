import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyCpxQdtai27c8r_eIPSMrNOKXZbvJEmOUs',
    authDomain: 'my-subscriptions-c8f67.firebaseapp.com',
    projectId: 'my-subscriptions-c8f67',
    storageBucket: 'my-subscriptions-c8f67.appspot.com',
    messagingSenderId: '867713070048',
    appId: '1:867713070048:web:b3424a1ed99fc02fab7185'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
