import Image from "next/image";
import Narvbar from "@/components/Narvbar";
import LandingPage from "@/container/LandingPage";
import LandingHero from "@/components/landingHero";
import About from "@/components/about";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <LandingPage>
      <LandingHero/>
      <About/>
      <Faq/>
      
    </LandingPage>
    
  );
}
