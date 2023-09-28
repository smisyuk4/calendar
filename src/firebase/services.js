import { nanoid } from 'nanoid';
import { db, auth, myStorage } from '../firebase/firebase.config';
import {
  collection,
  collectionGroup,
  getCountFromServer,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  onSnapshot,
  setDoc,
  Timestamp,
} from 'firebase/firestore';

export const addMeet = async data => {
  const id = nanoid(5);
  const docRef = doc(db, 'meet', id);

  try {
    const result = await setDoc(docRef, {
      id,
      time: '12:00',
      manager: 'Irina Ivanovna',
    })
      .then(() => {
        return 'Запис в базі оновлено';
      })
      .catch(error => {
        return error.code;
      });

    return result;
  } catch (error) {
    return error;
  }
};
