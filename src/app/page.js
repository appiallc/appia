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
import CaseStudies from "./component/caseStudies";


export default function Home() {
  return (
    <div className="font-inter min-h-screen">
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
         <CaseStudies />
         <Footer />
      </main>
    </div>
  );
}
