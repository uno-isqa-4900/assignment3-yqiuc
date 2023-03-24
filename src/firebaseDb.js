import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyAkkgp61a3BLK3ul-kVRtEuAcP1e6HHGGM',
    authDomain: 'my-subscriptions-31d41.firebaseapp.com',
    projectId: 'my-subscriptions-31d41',
    storageBucket: 'my-subscriptions-31d41.appspot.com',
    messagingSenderId: '717142103930',
    appId: '1:717142103930:web:ac84149506b00a9ece68c3'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
