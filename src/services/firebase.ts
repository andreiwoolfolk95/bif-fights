import firebase_app from "@/firebase/config";
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
export const db = getFirestore(firebase_app);

export async function onMerge(body: DocumentData) {
  const { data, collection_name, id } = body;
  try {
    await setDoc(
      doc(db, collection_name, id),
      {
        ...data,
      },
      { merge: true }
    );
  } catch (error) {
    throw error;
  }
}
