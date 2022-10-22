import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyC4cdfGyFQ7SZzOEcbCdiWI4tCThmFoeno',
    authDomain: 'my-subscriptions-c874d.firebaseapp.com',
    projectId: 'my-subscriptions-c874d',
    storageBucket: 'my-subscriptions-c874d.appspot.com',
    messagingSenderId: '1005672645336',
    appId: '1:1005672645336:web:df24df6235da632f68cdad'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
