// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // current URL path

  const isActive = pathname === "/staffing-recruitment";
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

  return (
    <header className="bg-white   sticky top-0 z-50 text-white shadow-md  rounded-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/APPIA-RB.png"
            alt="APPIA"
            height={80}
            width={80}
            className="h-8 w-auto cursor-pointer"
            onClick={() => {
              router.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" })}}
          />
        </div>

        {/* Desktop Menu */}
        
         <nav className="hidden md:flex space-x-8 font-medium">
          <div onClick={() => scrollToSection("ai-solutions")} className="text-black hover:text-red-500 cursor-pointer">
            AI solutions
          </div>
          <div onClick={() => scrollToSection("technologies")} className="text-black hover:text-red-500 cursor-pointer">
            Technologies
          </div>
          <div onClick={() => scrollToSection("services")} className="text-black hover:text-red-500 cursor-pointer">
            Services
          </div>
          <div onClick={() => scrollToSection("industries")} className="text-black hover:text-red-500 cursor-pointer">
            Industries
          </div>
          <div onClick={() => router.push("/staffing-recruitment")}  className={`cursor-pointer ${
        isActive ? "text-red-500 font-bold" : "text-black hover:text-red-500"
      }`}>
            Staffing & Recruitment
          </div>
        </nav>

        {/* Contact Us div */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full  cursor-pointer transition"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu div */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4">
          <button onClick={() => scrollToSection("ai-solutions")} className="block hover:text-red-500">
            AI solutions
          </button>
          <button onClick={() => scrollToSection("technologies")} className="block hover:text-red-500">
            Technologies
          </button>
          <button onClick={() => scrollToSection("services")} className="block hover:text-red-500">
            Services
          </button>
          <button onClick={() => scrollToSection("industries")} className="block hover:text-red-500">
            Industries
          </button>
          <button onClick={() => scrollToSection("staffing")} className="block hover:text-red-500">
            Staffing & Recruitment
          </button>
          <a
            href="/contact"
            className="block bg-red-500 text-white font-semibold px-5 py-2 rounded-full transition text-center cursor-pointer"
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
}
