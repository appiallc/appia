import BusinessSection from "../component/businessSection";
import CaseStudies from "../component/caseStudies";
import ContactSection from "../component/contactUs";
import Footer from "../component/footer";
import Header from "../component/header";
import HeroSection from "../component/heroSection";


export default function Contact() {
  return (
    <div className="font-inter min-h-screen  overflow-x-hidden ">
      <Header />
      <main className="mb-4">
        <ContactSection />
         <Footer />
      </main>
    </div>
  );
}
