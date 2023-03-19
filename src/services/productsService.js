import firebase from '../config/firebase';

export async function getAll(buscar) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getById(id) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getDescription(id) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function create(data) {
  try {
    const docRef = await firebase.firestore().collection('Products').add(data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    return null;
  }
}

export async function update(id, data) {
  try {
    await firebase.firestore().doc(`Products/${id}`).set(data);
    return true;
  } catch (error) {
    console.error('Error updating document:', error);
    return false;
  }
}

export async function remove(id) {
  try {
    await firebase.firestore().doc(`Products/${id}`).delete();
    return true;
  } catch (error) {
    console.error('Error deleting document:', error);
    return false;
  }
}
