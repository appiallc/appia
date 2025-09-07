import Image from "next/image";
import Header from "./component/header";
import HeroSection from "./component/heroSection";
import BusinessSection from "./component/businessSection";
import DefineBuildRun from "./component/defineBuildRunSection";
import TechSection from "./component/techSection";
import BuildForPeople from "./component/buildForPeople";
import EverydayAISection from "./component/everydayAISection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main className="pt-8">
        <HeroSection />
        
           <BusinessSection />
         <DefineBuildRun />
         <TechSection />
         <BuildForPeople />
         <EverydayAISection/>
      </main>
    </div>
  );
}
