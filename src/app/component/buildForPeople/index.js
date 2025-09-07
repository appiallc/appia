"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BuildForPeople() {
  const items = [
    {
      title: "Increased conversion",
      highlight: "200%",
      description:
        "Improvement in sales conversion rates for a home services company by replacing outdated paper price books with a user-friendly custom online sales tool.",
    },
    {
      title: "Initial adoption",
      description:
        "Faster adoption of new tools with streamlined onboarding and user-focused design.",
    },
    {
      title: "Recovered lost revenue",
      description:
        "Clients were able to recover revenue previously lost due to inefficiencies and outdated systems.",
    },
    {
      title: "Boosted customer loyalty",
      description:
        "Enhancing user experiences led to higher retention and repeat customers.",
    },
    {
      title: "Increased engagement",
      description:
        "Better interfaces and workflows drove higher user participation and satisfaction.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const titleRefs = useRef([]);

  // watch scroll position manually
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    titleRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      titleRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          <p className="text-sm uppercase tracking-wide text-black mb-4">
            Build for people
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            We elevate digital success and increase ROI <br />
            with a relentless focus on the human experience.
          </h2>
          <p className="text-black mb-8 text-base md:text-lg">
            Our world class experience transformation playbook has enhanced
            performance at Fortune 500 companies around the globe.
          </p>
          <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-500 transition">
            Get in touch
          </button>
        </div>

        {/* Right column */}
        <div className="space-y-12 relative">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (titleRefs.current[i] = el)}
              data-index={i}
              className="min-h-[10vh] flex flex-col justify-center"
            >
              <motion.h3
                className="text-2xl font-semibold"
                animate={{ color: activeIndex === i ? "#dc2626" : "#000" }}
                transition={{ duration: 0.5 }}
              >
                {item.title}
              </motion.h3>

              <motion.div
                initial={false}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  y: activeIndex === i ? 0 : 40,
                  height: activeIndex === i ? "auto" : 0,
                  marginTop: activeIndex === i ? 16 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                {item.highlight && (
                  <p className="text-4xl font-extrabold text-green-600 mb-2">
                    {item.highlight}
                  </p>
                )}
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
