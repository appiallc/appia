"use client";
import Image from "next/image";
import React, { useState } from "react";

const tabs = [
  { id: "transportation", label: "Transportation" },
  { id: "finance", label: "Financial services" },
  { id: "media", label: "Technology · Media · Telecom" },
  { id: "health", label: "Healthcare" },
  { id: "manufacturing", label: "Manufacturing" },
  
];

const content = {
  transportation: {
    subtitle: "AVIS",
    title: "Reducing wait time and empowering renters.",
    description:
      "Innovating the future of Avis car rental by leveraging biometrics to authenticate drivers and deliver a touchless, fully digital experience – booking to pick-up to drop-off – experience.",
    highlight: "20+",
    highlightText: "Minutes off wait time",
    image: "/workImage/adpSlide.svg",
  },
  finance: {
    subtitle: "BankOne",
    title: "Seamless digital banking experience.",
    description:
      "Delivering modern financial solutions with AI-powered recommendations, real-time security, and next-gen mobile experiences.",
    highlight: "50%",
    highlightText: "Faster loan approvals",
   image: "/workImage/clearmatchSlide.svg",
  },
  media: {
    subtitle: "MediaPro",
    title: "Transforming customer engagement.",
    description:
      "Helping brands boost engagement by building scalable, immersive media platforms.",
    highlight: "2x",
    highlightText: "Customer engagement",
     image: "/workImage/nbcSlide.svg",
  },
  health: {
    subtitle: "MediTech",
    title: "Smarter, faster patient care.",
    description:
      "Leveraging AI and IoT to improve diagnosis speed, patient monitoring, and operational efficiency.",
    highlight: "30%",
    highlightText: "Improved efficiency",
    image: "/workImage/adpSlide.svg",
  },
  manufacturing: {
    subtitle: "SmartFactory",
    title: "Digitizing supply chains.",
    description:
      "Driving efficiency and reducing downtime with AI-powered automation and predictive analytics.",
    highlight: "40%",
    highlightText: "Reduced downtime",
     image: "/workImage/clearmatchSlide.svg",
  },
};

export default function CaseStudies() {
  const [active, setActive] = useState("transportation");
  const current = content[active];

  return (
     <section className="w-full px-6 py-12 flex justify-center ">
      <div className="bg-white rounded-3xl max-w-6xl w-full px-6 md:px-12 py-10 text-center shadow-lg">
      {/* Tabs */}
      <div className="flex flex-row gap-1  justify-center items-center">
        <div>
            <h3 className="text-xl font-bold uppercase">{"Our Work"}</h3>
        </div>
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 ml-4 no-scrollbar">
  {tabs.map((tab) => (
    <div
      key={tab.id}
      onClick={() => setActive(tab.id)}
      className={`cursor-pointer lg:px-5 px-3 lg:py-2 py-1 rounded-full border text-sm font-medium flex-shrink-0 transition-colors duration-300
        ${
          active === tab.id
            ? "bg-red-500 border-red-500 text-white"
            : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        }`}
    >
      {tab.label}
    </div>
  ))}
</div>

       

      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 mt-10">
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-bold uppercase">{current.subtitle}</h3>
          <h2 className="text-3xl font-bold mt-2">{current.title}</h2>
          <p className="text-gray-300 mt-4">{current.description}</p>
          <div className="mt-6">
            <span className="text-green-500 text-4xl font-bold">
              {current.highlight}
            </span>
            <p className="text-gray-400">{current.highlightText}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
  {/* Red blob background */}
{/* <div className="absolute top-0 right-0 w-[400px] h-[600px] bg-red-500 rounded-t-full [clip-path:polygon(100%_0,100%_100%,40%_100%,0_20%,0_0)]"></div> */}



  {/* Foreground image */}
  <Image
    src={current.image}
    alt={current.title}
    height={150}
    width={200}
    className="rounded-xl shadow-lg w-full object-cover h-80"
  />
</div>

      </div>
      </div>
    </section>
  );
}
