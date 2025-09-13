"use client";

import { FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-white relative overflow-hidden">
      {/* Contact Box */}
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="bg-white rounded-2xl shadow-md text-black
        p-6 md:p-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="text-green-500 text-3xl">🌀</div>
            <h2 className="text-xl md:text-2xl font-bold">Contact us</h2>
          </div>
          {/* Right */}
          <div className="text-center md:text-right text-sm md:text-base space-y-1">
            <p>sales@algoworks.com</p>
            <p>+1-212-464-6000</p>
          </div>
        </div>
      </div>

      {/* Middle Links + Socials */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-800">
        {/* Nav Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6  text-sm md:text-base">
          <a href="#" className="text-black hover:text-red-500">Industries</a>
          <a href="#" className="text-black hover:text-red-500">Insights</a>
          <a href="#" className="text-black hover:text-red-500">Newsroom</a>
          <a href="#" className="text-black hover:text-red-500">Careers</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-black text-xl">
          <a href="#" className="hover:text-red-500">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-xs md:text-sm">
        {/* Certifications */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-white">ISO27001</span> CERTIFIED
          <span className="bg-green-600 text-white px-2 py-1 text-xs rounded">
            DMCA PROTECTED
          </span>
        </div>

        {/* Copyright + Policies */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© Copyright 2025. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie policy</a>
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
