import firebase_app from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";
import { onMerge } from "../firebase";
const auth: any = getAuth(firebase_app);

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    error = e.code;
  }

  return { result, error };
}

export default async function signUp(body: any) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    const data: any = { ...body };
    const id = result.user.uid;
    delete data.password;
    const response = await createConektaUser(body);
    data.conekta_id = response.id;

    const obj = {
      data,
      id,
      collection_name: "users",
    };
    await onMerge(obj);
  } catch (e: any) {
    error = e.code;
  }

  return { result, error };
}

async function createConektaUser(body: any) {
  try {
    const response = await axios.post(`/api/auth/register`, body);
    return response.data;
  } catch (error) {
    return error;
  }
}
