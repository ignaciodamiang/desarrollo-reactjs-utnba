// Import the required functions and features from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrvB19Ym-KM9nXNM48Bu0EgkIWYlkv0jo',
  authDomain: 'plated-monolith-299304.firebaseapp.com',
  projectId: 'plated-monolith-299304',
  storageBucket: 'plated-monolith-299304.appspot.com',
  messagingSenderId: '146312706284',
  appId: '1:146312706284:web:91a399adec39cb2f56cdc9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export default firestore;
