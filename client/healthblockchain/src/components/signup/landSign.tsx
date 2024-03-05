import React, { ReactNode } from "react";
import Narvbar from "@/components/Narvbar";
import LoginNarvbar from "../loginNarvbar";



const LandingSignup = ({ children }: {
    children: React.ReactNode;
  }) => {
    return (
        <main className="flex flex-col min-h-screen ">
      
        <LoginNarvbar/>
        <div className="bg-back" >{children}
       
      </div>
    </main>
    );
}

export default LandingSignup;
