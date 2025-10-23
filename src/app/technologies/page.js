
import CallToAction from "../component/callToAction";
import EverydayAISection from "../component/everydayAISection";
import Footer from "../component/footer";
import Header from "../component/header";
import TechnologyROISection from "../component/technologyROISection";


export default function Technologies() {
  return (
    <div className="font-inter min-h-screen  overflow-x-hidden ">
      <Header />
      <main className="mb-4">
       <TechnologyROISection />
      <EverydayAISection/>
        <CallToAction
        title={"Technology is hard work, make it work harder."}
        description={"Challenge us to increase ROI on every technology in your stack."}
        />
         <Footer />
      </main>
    </div>
  );
}
