import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHDjBm6En9NLhQvKugKuF_4rV6-PWyZoM",
    authDomain: "coinmatrixinvestment.firebaseapp.com",
    databaseURL: "https://coinmatrixinvestment-default-rtdb.firebaseio.com",
    projectId: "coinmatrixinvestment",
    storageBucket: "coinmatrixinvestment.appspot.com",
    messagingSenderId: "346951029193",
    appId: "1:346951029193:web:8933eb499990328894d818"
};



// init firebase
initializeApp(firebaseConfig)



//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}

