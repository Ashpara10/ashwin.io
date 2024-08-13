import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process?.env?.GOOGLE_ID as string,
      clientSecret: process?.env?.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process?.env?.GITHUB_CLIENT_ID as string,
      clientSecret: process?.env?.GITHUB_SECRET as string,
    }),
  ],
};
