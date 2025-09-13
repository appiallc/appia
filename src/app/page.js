import Image from "next/image";
import Header from "./component/header";
import HeroSection from "./component/heroSection";
import BusinessSection from "./component/businessSection";
import DefineBuildRun from "./component/defineBuildRunSection";
import TechSection from "./component/techSection";
import BuildForPeople from "./component/buildForPeople";
import EverydayAISection from "./component/everydayAISection";
import Ecosystem from "./component/Ecosystem";
import CallToAction from "./component/callToAction";
import Footer from "./component/footer";

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
         <Ecosystem />
         <CallToAction />
         <Footer />
      </main>
    </div>
  );
}
