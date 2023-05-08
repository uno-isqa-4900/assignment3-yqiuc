import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyA0s2Vr2qP_yWf1F1P6-c4PpYR-5kSLPU0',
    authDomain: 'my-subscriptions-dc8bb.firebaseapp.com',
    projectId: 'my-subscriptions-dc8bb',
    storageBucket: 'my-subscriptions-dc8bb.appspot.com',
    messagingSenderId: '859101869438',
    appId: '1:859101869438:web:f1de2855880f7a93482f2f'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
