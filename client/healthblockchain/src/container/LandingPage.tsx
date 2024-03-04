import React, { ReactNode } from "react";
import Narvbar from "@/components/Narvbar";



const LandingPage = ({ children }: {
    children: React.ReactNode;
  }) => {
    return (
        <main className="flex min-h-screen ">
      
        <Narvbar/>
        <div>{children}
       
      </div>
    </main>
    );
}

export default LandingPage;
