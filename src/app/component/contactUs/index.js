"use client";

import { Mail, MapPinCheckIcon } from "lucide-react";
import React, { useState } from "react";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Something went wrong. Try again.");
  }
};


  return (
    <section className="w-full bg-white text-white relative mx-4">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="bg-white p-8 md:p-12 flex flex-col justify-center text-black">
          <p className="uppercase text-sm tracking-wider mb-3">Contact Us</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-8">
            Challenge us to make your business thrive at the intersection of
            technology and people.
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* USA Center */}
  <div>
    <div className="flex items-center gap-2 text-green-400">
      <span className="text-lg"><MapPinCheckIcon /></span>
      <h3 className="font-semibold">USA Center</h3>
    </div>
    <p className="ml-7 underline">+91 94274 98359</p>
  </div>

  {/* Email */}
  <div>
    <div className="flex items-center gap-2 text-green-400">
      <span className="text-lg"><Mail /></span>
      <h3 className="font-semibold">Email Us</h3>
    </div>
    <a className="ml-7 underline text-black underline-none text-lg" 
     target="_blank"
     href="mailto:sales@appia.in">sales@appia.in</a>
  </div>

  {/* India Center */}
  <div>
    <div className="flex items-center gap-2 text-green-400">
      <span className="text-lg"><MapPinCheckIcon /></span>
      <h3 className="font-semibold">India Center</h3>
    </div>
    <p className="ml-7 underline">+91-120-413-8727</p>
  </div>
</div>

        </div>

        {/* Right Side (Form) */}
        <div className="bg-red-500 p-8 md:p-12 rounded-t-3xl lg:rounded-lg my-8 overflow-x-hidden mr-8">
          <h3 className="text-xl font-semibold mb-6">How can we help?</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what you need"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-red-500  font-semibold py-3 rounded-md hover:bg-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    
      
    </section>
  );
}
