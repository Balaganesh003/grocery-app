// Saving new Item to Firebase
import {
  setDoc,
  doc,
  getDocs,
  orderBy,
  collection,
  query,
} from 'firebase/firestore';
import { firestore } from '../firebase.config';

export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'groceryItems', `${Date.now()}`), data, {
    merge: true,
  });
};

// getall grocery items

// export const getAllGroceryItems = async () => {
//   const items = await getDocs(
//     query(collection(firestore, 'groceryItems'), orderBy('id', 'desc'))
//   );

//   const groceryItems = [];
//   items.forEach((item) => {
//     groceryItems.push(item.data());
//   });

//   return groceryItems;
// };
