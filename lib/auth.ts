import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: "Aisdj9wh9eruAHIUJIO0",
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId:
        "978783310500-bg27l8neqsfb10tedo2246fq1jb0mmf2.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
