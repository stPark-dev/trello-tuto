import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import { NEXTAUTH_PAGES } from "@/types/constants";


export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
        name: "GitHub",
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    KakaoProvider({
      name: "Kakao",
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    NaverProvider({
      name: "Naver",
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
  ],
  pages: NEXTAUTH_PAGES,
  callbacks: {
    async jwt({token, account}) {
      if(account) token.provider = account.provider;
      return token;
    },
    async session({ session, token }) {
      console.info(token)
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};
