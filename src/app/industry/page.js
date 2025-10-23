
import CallToAction from "../component/callToAction";
import Footer from "../component/footer";
import Header from "../component/header";
import IndustrySection from "../component/industrySection";


export default function Industry() {
  return (
    <div className="font-inter min-h-screen  overflow-x-hidden ">
      <Header />
      <main className="mb-4">
       <IndustrySection />
     
        <CallToAction
        title={"We specialize in your industry."}
        description={"Challenge us to deliver targeted solutions that address your business needs."}
        />
         <Footer />
      </main>
    </div>
  );
}
