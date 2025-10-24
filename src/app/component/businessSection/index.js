"use client";

import Image from "next/image";

export default function BusinessSection() {
  return (
    <section className="relative bg-white text-black">
      {/* Background pattern overlay */}
      <div className="absolute inset-0">
        {/* Example diagonal overlay effect */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-10" />
      </div>

      <div className="relative  mx-auto px-6 lg:px-12 py-20">
        {/* Top Small Text */}
        <p className="text-lg uppercase tracking-widest text mb-4">
          Innovate for business
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold  max-w-5xl">
          We provide engineering services with a persistent drive toward
          achieving business objectives and delivering value.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base md:text-lg text max-w-3xl">
          Our comprehensive services support any delivery model spanning the
          enterprise technology spectrum, from the latest AI implementations to
          legacy platform migrations and everything in between.
        </p>
      </div>

      {/* Bottom image */}
      {/* <div className="relative mx-20 mb-20">
  <video
    src="/employee.mp4" // ✅ place your video inside public/
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-[300px] object-cover rounded-2xl"
  />
</div> */}

    </section>
  );
}
