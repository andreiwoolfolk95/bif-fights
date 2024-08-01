"use client";
import firebase_app from "@/firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export const UserContext = createContext<{
  user: any;
  loading: boolean;
}>({
  user: {} as any,
  loading: false,
});
export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        return setLoading(false);
      }
      const uid = user.uid;
      const userRef = doc(db, "users", uid);
      onSnapshot(userRef, async (response) => {
        if (response.exists()) {
          const userData: any = {
            id: uid,
            ...response.data(),
          };

          if (userData.payment) {
            router.push("/");
          }
          if (!userData.payment) {
            router.push("/checkout");
          }

          setUser(userData);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    });
  }, []);

  const values = {
    user: user as any,
    loading,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
