import Image from "next/image";
import Narvbar from "@/components/Narvbar";
import LandingPage from "@/container/LandingPage";
import LandingHero from "@/components/landingHero";
import About from "@/components/about";
import Faq from "@/components/faq";
import LandingLogin from "@/components/Login/Landing";
import LoginForm from "@/components/Login/loginform";

export default function Home() {
  return (
    <LandingLogin>
     <LoginForm/> 
      
    </LandingLogin>
    
  );
}
