"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function BuildForPeople() {

  const router = useRouter();
  const items = [
    { id: "item-1", title: "Increase in Sales Conversion", highlight: "200%", description: "Achieved for a home services company by replacing outdated paper processes with a highly intuitive, custom sales tool." },
    { id: "item-2", title: "Accelerated Platform Adoption", description: "User-centric design and streamlined onboarding engineered for speed, ensuring rapid organizational uptake of new tools and dramatically shortening time-to-value for your investment." },
    { id: "item-3", title: "Direct Revenue Recovery	", description: "We eliminate operational leaks and data silos caused by outdated systems, implementing modern platforms that directly convert previously lost revenue into realized profit." },
    { id: "item-4", title: "Elevated Customer Loyalty & CLV", description: "By enhancing digital experiences and simplifying customer journeys, we drive higher retention rates, encourage repeat business, and significantly increase Customer Lifetime Value (CLV)." },
    { id: "item-5", title: "Maximized User Engagement", description: "Intuitive interfaces and optimized workflows drive higher user participation and satisfaction, transforming system adoption into a powerful, sustainable competitive advantage." },
  
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Calculate progress through section
        const progress =
          (scrollY - sectionTop) / (sectionHeight / items.length);
        const newIndex = Math.floor(progress);
        if (newIndex !== activeIndex && newIndex < items.length) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, items.length]);

  // Framer Motion animations for left side
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="build-for-people"
      className="w-full px-6 py-16 md:py-24 bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="text-lg uppercase tracking-wide text-black"
          >
             Design for people
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-extrabold leading-snug"
          >
           Digital Experience Transformation: Build for People, Maximize ROI
          </motion.h2>

          <motion.p
            variants={item}
            className="text-black text-base md:text-lg"
          >
         We elevate digital success by focusing on the human experience. Our world-class DX playbook is proven to increase user adoption, boost customer loyalty, and drive tangible returns.
          </motion.p>

          <motion.button
            variants={item}
            onClick={() => router.push('/contact')}
            className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition"
          >
            Get in touch
          </motion.button>
        </motion.div>

        {/* Right column: Scroll Reveal */}
        <div className="space-y-12 relative">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="min-h-[8vh] flex flex-col justify-center"
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: activeIndex >= i ? 1 : 0.1,
                y: activeIndex >= i ? 0 : 60,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h3
                className={`text-2xl font-semibold transition-colors duration-500 ${
                  activeIndex === i ? "text-red-600" : "text-black"
                }`}
              >
                {item.title}
              </h3>

              {activeIndex >= i && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-4"
                >
                  {item.highlight && (
                    <p className="text-4xl font-extrabold text-green-600 mb-2">
                      {item.highlight}
                    </p>
                  )}
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
