import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials?.email === "admin@example.com" && credentials?.password === "password123") {
          return { id: "1", name: "Usuario Admin", email: "admin@example.com" }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
  },
})

