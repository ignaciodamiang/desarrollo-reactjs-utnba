import firebase from '../config/firebase';

const firestore = firebase.firestore();

export async function getByUserId(userId) {
  const userRef = firestore.collection('users').doc(userId);
  const userSnapshot = await userRef.get();
  if (userSnapshot.exists) {
    return userSnapshot.data();
  } else {
    return null;
  }
}

export async function createUserDocument(user) {
  const userRef = firestore.collection('users').doc(user.uid);
  const userData = {
    userId: user.uid,
    name: user.displayName,
    email: user.email,
    // ... any other user data you want to store
  };
  await userRef.set(userData);
}
