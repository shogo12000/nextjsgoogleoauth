import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async session({ session, token }) {
        session.user.id = token.sub; // Adiciona o ID do usuário à sessão
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET, // Defina essa variável no .env.local
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };


 