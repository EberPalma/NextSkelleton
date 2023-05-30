//* Next auth imports
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
//import { signIn } from "next-auth/react";
//import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    // * Configure the providers for the project
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async session({session}){
            session.user.rol = "admin";
            return session;
        }
    }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
