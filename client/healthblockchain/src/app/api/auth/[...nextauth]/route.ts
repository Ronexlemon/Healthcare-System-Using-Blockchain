
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/lib/mongodb";
import User from "@/model/User";
import bcrypt from "bcryptjs";

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
            await connect()
            try {
                        const user = await User.findOne({ phoneNumber: credentials.phoneNumber });
                        if (user) {
                          const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                          );
                          if (isPasswordCorrect) {
                            return user;
                          }
                        }
                      } catch (err: any) {
                        throw new Error(err);}
                      
          },
        }),
      ],
      session: { strategy: "jwt" },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
