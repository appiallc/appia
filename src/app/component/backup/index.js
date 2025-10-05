"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuildForPeople() {
  const items = [
    { id: "item-1", title: "Increased conversion", highlight: "200%", description: "Improvement in sales conversion rates for a home services company by replacing outdated paper price books with a user-friendly custom online sales tool." },
    { id: "item-2", title: "Initial adoption", description: "Faster adoption of new tools with streamlined onboarding and user-focused design." },
    { id: "item-3", title: "Recovered lost revenue", description: "Clients were able to recover revenue previously lost due to inefficiencies and outdated systems." },
    { id: "item-4", title: "Boosted customer loyalty", description: "Enhancing user experiences led to higher retention and repeat customers." },
    { id: "item-5", title: "Increased engagement", description: "Better interfaces and workflows drove higher user participation and satisfaction." },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // refs for stable event listeners
  const activeIndexRef = useRef(activeIndex);
  const stepModeRef = useRef(false); // whether we're in locked stepper mode
  const throttleRef = useRef(false); // prevent rapid steps
  const directionRef = useRef(1); // animation direction: 1 = forward (down), -1 = backward (up)
  const touchStartYRef = useRef(null);
  const prevScrollYRef = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const lastScrollDirRef = useRef(1); // 1 = downward scroll, -1 = upward

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Keep track of page scroll direction (so we know how the user entered this section)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 1000;
      lastScrollDirRef.current = y > prevScrollYRef.current ? 1 : -1;
      prevScrollYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver: enter step mode and pick starting slide based on entry direction
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const THRESH = 0.5;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= THRESH) {
            // user entered this section — decide start index by last scroll direction
            stepModeRef.current = true;
            document.body.style.overflow = "hidden";

            if (lastScrollDirRef.current > 0) {
              // entered by scrolling down from above -> show first item
              directionRef.current = 1;
              setActiveIndex(0);
            } else {
              // entered by scrolling up from below -> show last item
              directionRef.current = -1;
              setActiveIndex(items.length - 1);
            }
          } else {
            // left the section -> unlock normal scrolling
            stepModeRef.current = false;
            document.body.style.overflow = "";
          }
        });
      },
      { threshold: [THRESH] }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      document.body.style.overflow = "";
    };
  }, [items.length]);

  // Helper to change index and set direction for animation
  const goToIndex = (next) => {
    const cur = activeIndexRef.current;
    if (next === cur) return;
    directionRef.current = next > cur ? 1 : -1;
    setActiveIndex(next);
  };

  // wheel + touch handlers (throttled, one-step-per-gesture)
  useEffect(() => {
    const THROTTLE_MS = 600;
    const SLIDE_NUDGE = 100;

    const onWheel = (e) => {
      if (!stepModeRef.current) return;
      e.preventDefault();

      if (throttleRef.current) return;
      throttleRef.current = true;
      window.setTimeout(() => (throttleRef.current = false), THROTTLE_MS);

      const cur = activeIndexRef.current;
      if (e.deltaY > 0) {
        // scroll down -> next
        if (cur >= items.length - 1) {
          // unlock and nudge to continue native scrolling
          stepModeRef.current = false;
          document.body.style.overflow = "";
          window.scrollBy({ top: SLIDE_NUDGE, behavior: "smooth" });
          return;
        }
        goToIndex(cur + 1);
      } else {
        // scroll up -> prev
        if (cur <= 0) {
          stepModeRef.current = false;
          document.body.style.overflow = "";
          window.scrollBy({ top: -SLIDE_NUDGE, behavior: "smooth" });
          return;
        }
        goToIndex(cur - 1);
      }
    };

    const onTouchStart = (e) => {
      touchStartYRef.current = e.touches?.[0]?.clientY ?? null;
    };

    const onTouchMove = (e) => {
      if (!stepModeRef.current) return;
      if (!touchStartYRef.current) return;

      const y = e.touches?.[0]?.clientY ?? 0;
      const delta = touchStartYRef.current - y;
      if (Math.abs(delta) < 40) return; // ignore tiny moves
      e.preventDefault();

      if (throttleRef.current) return;
      throttleRef.current = true;
      window.setTimeout(() => (throttleRef.current = false), THROTTLE_MS);

      const cur = activeIndexRef.current;
      if (delta > 0) {
        // swipe up -> next
        if (cur >= items.length - 1) {
          stepModeRef.current = false;
          document.body.style.overflow = "";
          window.scrollBy({ top: SLIDE_NUDGE, behavior: "smooth" });
          return;
        }
        goToIndex(cur + 1);
      } else {
        // swipe down -> prev
        if (cur <= 0) {
          stepModeRef.current = false;
          document.body.style.overflow = "";
          window.scrollBy({ top: -SLIDE_NUDGE, behavior: "smooth" });
          return;
        }
        goToIndex(cur - 1);
      }
      touchStartYRef.current = y;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      document.body.style.overflow = "";
    };
  }, [items.length]);

  // slide variants — use custom (direction) so enter/exit reverse correctly
  const SLIDE_PX = 300;
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? SLIDE_PX : -SLIDE_PX, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -SLIDE_PX : SLIDE_PX, opacity: 0 }),
  };

  // left column — unchanged
  const LeftColumn = () => (
    <div className="space-y-12">
      <p className="text-lg uppercase tracking-wide text-black"> Design for people</p>
      <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
        We elevate digital success and increase ROI <br /> with a relentless focus on the human experience.
      </h2>
      <p className="text-black text-base md:text-lg">
        Our world class experience transformation playbook has enhanced performance at Fortune 500 companies around the globe.
      </p>
      <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition">
        Get in touch
      </button>
    </div>
  );

  return (
    <section ref={containerRef} className="w-full px-6 py-16 md:py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <LeftColumn />

        <div className="relative lg:min-h-[60vh] min-h-[21vh] overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={directionRef.current}>
            <motion.div
              key={activeIndex}
              custom={directionRef.current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center px-2 md:px-0"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-red-600">
                {items[activeIndex].title}
              </h3>

              {items[activeIndex].highlight && (
                <p className="text-4xl font-extrabold text-green-600 mb-2">{items[activeIndex].highlight}</p>
              )}

              <p className="text-gray-700 max-w-2xl">{items[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
