"use client";

import { useRouter } from "next/navigation";
import { FaXTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    // Default offset for header height
    let yOffset = -60;

    // Adjust offset for specific sections
    switch (id) {
      case "technologies":
        yOffset = 80;
        break;
      case "ai-solutions":
        yOffset = 140;
        break;
      case "services":
        yOffset = 60;
        break;
      case "industries":
        yOffset = -60;
        break;
      default:
        yOffset = -60;
    }

    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
const router = useRouter();

return (
    <footer className="bg-red-500 text-white relative overflow-hidden">
      {/* Contact Box */}
      <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 pt-12">
        <div
          className="bg-white rounded-2xl shadow-md text-black
        p-6 md:p-10 flex flex-col md:flex-row items-center md:justify-between gap-6"
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-bold">Contact us</h2>
          </div>
          {/* Right */}
          <div className="text-center md:text-right text-sm md:text-base space-y-1">
            <a href="mailto:sales@appia.in"  target="_blank"
            className="text-black underline-none text-lg"
            >sales@appia.in</a>
            <p>+91 94274 98359</p>
          </div>
        </div>
      </div>

      {/* Middle Links + Socials */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white">
        {/* Nav Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6  text-sm md:text-base">
          <a
            href=""
            className="text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault(); // prevent page jump
               router.push ('/industry');
            }}
          >
            Industries
          </a>
          <a href="" className="text-white " 
           onClick={(e) => {
              e.preventDefault(); // prevent page jump
              scrollToSection("services");
            }}>
            Services
          </a>

          <a href="/contact" className="text-white ">
            Careers
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-white text-xl">
          <a href="https://x.com/appiallc?s=11" className="" target="_blank">
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/appia-consultancy-services-llc/" 
            target="_blank"
            className=""
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/appia_cs?igsh=MXRpOGp2Y2JicWs2eg%3D%3D&utm_source=qr"
            className=""
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-xs md:text-sm">
        {/* Certifications */}
        <div className="flex items-center gap-4">
           CERTIFIED
          <span className="bg-green-600 text-white px-2 py-1 text-xs rounded">
            AWS
          </span>
        </div>

        {/* Copyright + Policies */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© Copyright 2025. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/termsandcondition">Terms of service</a>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      {/* <button className="fixed bottom-6 right-6 bg-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
        💬
      </button> */}
    </footer>
  );
}
