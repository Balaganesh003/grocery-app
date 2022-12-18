import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDymRJ0div9TVvl4mxy5MZ_kAqug4tXTD4',
  authDomain: 'grocery-app-28105.firebaseapp.com',
  databaseURL:
    'https://grocery-app-28105-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'grocery-app-28105',
  storageBucket: 'grocery-app-28105.appspot.com',
  messagingSenderId: '576568786877',
  appId: '1:576568786877:web:3ce0abb1e8ce0201b01cd4',
  measurementId: 'G-1HKPJ9G3JC',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
