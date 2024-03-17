
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/lib/mongodb";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import Email from "next-auth/providers/email";

 const authOptions: any = {
 

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
          
            try {
              const dataa = {
                
                email: credentials?.email,
                password: credentials?.password
              };
              const res = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataa
                 
                ),
              })
              if(res.ok){
                
                const user = await res.json(); // Parse the response JSON
                console.log("User:", user);
                return user;
              }else{
                return null
              }
                      } catch (err: any) {
                        throw new Error(err);}
                      
          },
        }),
      ],
      callbacks: {

        async jwt({ token, user }: any) {
          //console.log("jwt new callback",{token,user})
          return { ...token, ...user };
        },
        async session({ session, token, user }: any) {
          session.user = token as any;
          console.log("session new  callback", { token });
    
          return session;
        },
        //for other providers
      },
      session: { strategy: "jwt" },
      secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
