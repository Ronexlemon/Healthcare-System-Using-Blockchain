
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: any = {
    providers: [
        CredentialsProvider({
          id: "credentials",
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials: any, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com",password:"12345" };

            console.log("use is user",credentials)
    
            // Validate credentials here
            if (user.email === credentials.email && user.password === credentials.password) {
              // Return the user object if credentials are valid
              return user;
            } else {
              // Return null if credentials are invalid
              return null;
            }
          },
        }),
      ],
      session: { strategy: "jwt" },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
