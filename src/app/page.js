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
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-inter min-h-screen">
      <Header />
      <main className="pt-8">
        <HeroSection />
        
           <BusinessSection />
            <section id="technologies" >
         <DefineBuildRun />
         </section>
            
         <TechSection />
        
         <BuildForPeople />
          <section id="ai-solutions" >
         <EverydayAISection/>
         </section>
         <section id="services" >
         <Ecosystem />
         </section>
         <CallToAction />
          <section id="industries" >
         <CaseStudies />
         </section>
         <Footer />
      </main>
      <a
        href="https://wa.me/916352217192" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
