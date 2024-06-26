import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: "Aisdj9wh9eruAHIUJIO0",
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process?.env?.GOOGLE_ID as string,
      clientSecret: process?.env?.GOOGLE_SECRET as string,
    }),
  ],
};
