import firestore from '../config/firebase';

export async function getByUserId(userId) {
  return await firestore
    .collection('usuarios')
    .where('userId', '==', userId)
    .get();
}
