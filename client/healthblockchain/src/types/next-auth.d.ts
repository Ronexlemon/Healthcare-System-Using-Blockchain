import NextAuth from "next-auth";
import { JwtPayload } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
      user:{

      
        user: {
            _id: string,
            email: string,
            password: string,
            firstName: string,
            lastName: string,
            createdAt: string,
            updatedAt: string,
            __v: number
        },
      
        iat: number,
        exp: number,
        jti: string
    }}

    // Define the interface for the token obtained from getToken
    export interface TokenPayload extends JwtPayload {

        user: {
            _id: string,
            email: string,
            password: string,
            firstName: string,
            lastName: string,
            createdAt: string,
            updatedAt: string,
            __v: number
        },
       
        iat: number,
        exp: number,
        jti: string
    }
}
