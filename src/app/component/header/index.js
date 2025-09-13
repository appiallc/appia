// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    className="h-8 w-auto"
  />
</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium ">
          <Link href="/" className="text-black hover:text-red-500">Technologies</Link>
          <Link href="/" className="text-black hover:text-red-500">Services</Link>
          <Link href="/" className="text-black hover:text-red-500">Industries</Link>
          <Link href="/" className="text-black hover:text-red-500">Everyday AI</Link>
          <Link href="/" className="text-black hover:text-red-500">About</Link>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full  transition"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-green-400">Everyday AI</Link>
          <Link href="/" className="block hover:text-green-400">Technologies</Link>
          <Link href="/" className="block hover:text-green-400">Services</Link>
          <Link href="/" className="block hover:text-green-400">Industries</Link>
          <Link href="/" className="block hover:text-green-400">About</Link>
          <Link
            href="/contact"
            className="block bg-red-500 text-white font-semibold px-5 py-2 rounded-full transition text-center"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
