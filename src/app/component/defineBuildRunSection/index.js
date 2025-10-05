"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VscFileCode } from "react-icons/vsc";
import { RiListIndefinite } from "react-icons/ri";
import { SiCodeproject } from "react-icons/si";

const cards = [
  { title: "Define", icon: <RiListIndefinite /> },
  { title: "Build", icon: <VscFileCode /> },
  { title: "Run", icon: <SiCodeproject /> },
];

// Custom hook for a single card
function useCardMotion(scrollYProgress, startOffset, finalOffset) {
  const x = useTransform(scrollYProgress, [0, 0, 1], [startOffset, 0, finalOffset]);
  const scale = useTransform(scrollYProgress, [0.3, 0.6, 1], [0.9, 1.05, 1]);
  const transform = useTransform([x, scale], ([xVal, s]) => {
    return `translateX(${xVal}px) translateY(-50%) scale(${s})`;
  });
  return { x, scale, transform };
}

export default function VideoScrollCards() {
  const sectionRef = useRef(null);

  // Track scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Start offsets
  const startOffsets = [500, 600, 700];
  // Final offsets
  const finalOffsets = [-450, 0, 450];

  // ✅ Call hooks at top level, one per card
  const motion0 = useCardMotion(scrollYProgress, startOffsets[0], finalOffsets[0]);
  const motion1 = useCardMotion(scrollYProgress, startOffsets[1], finalOffsets[1]);
  const motion2 = useCardMotion(scrollYProgress, startOffsets[2], finalOffsets[2]);

  const cardMotions = [motion0, motion1, motion2];

  // Track which card is closest to center
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribers = cardMotions.map((motion) =>
      motion.x.on("change", () => {
        const distances = cardMotions.map((m) => Math.abs(m.x.get()));
        const min = Math.min(...distances);
        const minIndex = distances.indexOf(min);
        setActiveIndex(minIndex);
      })
    );
    return () => unsubscribers.forEach((unsub) => unsub());
  }, [cardMotions]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background video */}
      <div className="relative mx-6 lg:mx-20 mb-12">
        <video
          src="/employee.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[300px] md:h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* ✅ Desktop Animation */}
      <div className="hidden md:flex sticky top-0 items-center justify-center">
        <div className="relative w-full h-[280px] flex items-center justify-center -mt-36">
          {cards.map((card, i) => {
            const zIndex = i === activeIndex ? 40 : 10 + i;
            return (
              <motion.div
                key={card.title}
                style={{ transform: cardMotions[i].transform, zIndex }}
                className="absolute top-1/2 w-72 md:w-80 h-48 md:h-56 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-500 w-full h-full rounded-2xl flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-5xl mb-2">{card.icon}</div>
                  <h3 className="text-2xl md:text-3xl mt-4 font-extrabold">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ✅ Mobile (stacked view, no animation) */}
      <div className="flex flex-col items-center gap-6 px-6 md:hidden">
        {cards.map((card) => (
          <div
            key={card.title}
            className="w-full max-w-sm h-48 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white bg-gradient-to-br from-red-500 to-red-500"
          >
            <div className="text-4xl mb-2">{card.icon}</div>
            <h3 className="text-2xl mt-4 font-extrabold">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
