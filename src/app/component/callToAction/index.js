"use client";

import { useRouter } from "next/navigation";

export default function CallToAction({title ,description}) {
   const router = useRouter();
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background diagonal stripes */}
      

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center py-16 px-4">
        <div className="bg-red-500 rounded-2xl px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center md:justify-between gap-6 w-full max-w-7xl">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
             { title || ""}
            </h2>
            <p className="text-white/90 text-sm md:text-base">
             { description || ""}
            </p>
          </div>

          {/* Button */}
          <button className="bg-white text-red-500 font-semibold text-sm md:text-base px-6 py-3 rounded-full hover:bg-white transition"
          onClick={() => router.push("/contact")}
          >
            Let’s talk
          </button>
        </div>
      </div>
    </section>
  );
}
