import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: 'plated-monolith-299304',
  storageBucket: 'plated-monolith-299304.appspot.com',
  messagingSenderId: '146312706284',
  appId: '1:146312706284:web:91a399adec39cb2f56cdc9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
