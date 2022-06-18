// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";

import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APPID,
    DATABASE_URL,
} from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: String(API_KEY),
    authDomain: String(AUTH_DOMAIN),
    databaseURL: String(DATABASE_URL),
    projectId: String(PROJECT_ID),
    storageBucket: String(STORAGE_BUCKET),
    messagingSenderId: String(MESSAGING_SENDER_ID),
    appId: String(APPID),
};


// Initialize Firebase
let app;
app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = getFirestore(app);
const storage = firebase.storage();
const database = getDatabase();

export {auth, db, storage, database};
