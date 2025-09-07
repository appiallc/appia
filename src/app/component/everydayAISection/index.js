"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function EverydayAISection() {
     const testimonials = [
    "This is the way it should have always been – simple, efficient, and effective.",
    "Our experience has been transformative. Productivity has gone up significantly.",
    "We were able to recover lost revenue and build stronger customer loyalty.",
  ];
  
  const [index, setIndex] = useState(0);
  // Auto change every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="bg-red-500 rounded-3xl p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left h-full">
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-red-500 mb-6">
            <span className="text-2xl font-bold">A</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Everyday AI
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-black mb-6">
            Our Everyday AI approach starts by targeting a foundational AI use
            case, then scales efficiently by tackling new, adjacent use cases
            for larger AI gains in the future.
          </p>

          {/* Button */}
          <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-white transition">
            Learn more
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center flex-col">
          <img
            src="/girlwithphone.jpg" // replace with your actual image path
            alt="Everyday AI"
            className="rounded-3xl w-full h-80 object-cover"
          />
          <div className="bg-red-500 rounded-3xl p-8 md:p-12 flex mt-4 flex-col items-center md:items-start text-center md:text-left text-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
        WHAT OUR CLIENTS ARE SAYING
      </h2>

      {/* Slider Content */}
      <div className="relative h-24 md:h-20 overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl font-medium"
          >
            “{testimonials[index]}”
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-6 text-centers">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          ></button>
        ))}
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}
