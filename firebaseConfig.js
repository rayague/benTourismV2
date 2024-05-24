// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, setPersistence} from 'firebase/auth'; // Import setPersistence instead of getReactNativePersistence
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfX3rJaGvcH8VU-4p5LhNY6nFE1Ve2nso',
  authDomain: 'tourism-348cf.firebaseapp.com',
  projectId: 'tourism-348cf',
  storageBucket: 'tourism-348cf.appspot.com',
  messagingSenderId: '88427767204',
  appId: '1:88427767204:web:9a3e18becee552a62ecd31',
};

const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

// Check if Firebase Auth is already initialized
let initializedAuth = auth;
//

export {initializedAuth, db};
