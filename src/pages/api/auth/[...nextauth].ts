import NextAuth, { AuthOptions } from "next-auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase_app from "@/firebase/config";
import CredentialsProvider from "next-auth/providers/credentials";

const auth: any = getAuth(firebase_app);

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        console.log(credentials);

        if (!credentials?.email || !credentials?.password) return null;

        const user = await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
        if (user) {
          console.log(user);

          return { id: user.user.uid, email: user.user.email };
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
