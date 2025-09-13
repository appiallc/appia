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

  // watch scroll position manually for right side
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

    const elements = [...titleRefs.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  // framer-motion variants for left side staggered reveal
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
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
    <section className="w-full px-6 py-16 md:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left column with staggered reveal */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-wide text-black"
          >
            Build for people
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-extrabold leading-snug"
          >
            We elevate digital success and increase ROI <br />
            with a relentless focus on the human experience.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-black text-base md:text-lg"
          >
            Our world class experience transformation playbook has enhanced
            performance at Fortune 500 companies around the globe.
          </motion.p>

          <motion.button
            variants={item}
            className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition"
          >
            Get in touch
          </motion.button>
        </motion.div>

        {/* Right column with scroll-based highlights */}
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
