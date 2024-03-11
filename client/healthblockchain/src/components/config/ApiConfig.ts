import { signIn } from "next-auth/react";

type dataSignInUser = {
    email: string;
  
    password: string;
  };
  
export const SignInUser = async (userDetails: dataSignInUser) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: userDetails.email,
        password: userDetails.password,
      });
      return res;
    } catch (error) {
      console.log("failed to signinUser", error);
    }
  };