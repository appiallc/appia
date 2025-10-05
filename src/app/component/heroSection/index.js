// components/HeroSection.js
"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function HeroSection() {
  const logos = [
    "/Slider/slider1.png",
     "/Slider/slider2.png",
    "/Slider/slider3.png",
     "/Slider/slider4.png",
   "/Slider/slider5.png",
     "/Slider/slider6.png",
    "/Slider/slider7.png",
   "/Slider/slider8.png",
    "/Slider/slider9.png",
  
  ];

  return (
    <section className="bg-white text-red text-center py-4 md:py-24 relative overflow-hidden">
      {/* Headline */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[50px] sm:text-[60px] md:text-[72px] font-extrabold leading-tight">
          Innovate for business <br />
          <span className="text-red-500"> Design for people</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto">
         We connect technology and people to grow businesses.
        </p>
      </div>

      {/* Logo Slider */}
      <div className="mt-12 md:mt-16">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-8 sm:mx-12 flex items-center">
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={100}
                height={50}
                className="object-contain max-h-10 sm:max-h-12 md:max-h-16"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
