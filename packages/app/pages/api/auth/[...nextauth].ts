import prisma from '@/services/InitPrisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { AuthOptions, ISODateString } from 'next-auth/core/types';
import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: ISODateString;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.OAUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.OAUTH_DISCORD_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.OAUTH_TWITTER_CLIENT_ID,
      clientSecret: process.env.OAUTH_TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signOut',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
