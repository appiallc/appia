"use client";

import React from "react";

const technologies = [
  "Dynamics 365 CRM",
  "Mobile",
  "Web",
  "DevOps",
  "Odoo ERP",
  "AI and Analytics",
];

export default function TechSection() {
  return (
    <section className="w-full px-6 py-4 flex justify-center ">
      <div className="bg-white rounded-3xl max-w-6xl w-full px-6 md:px-12 py-2 text-center shadow-lg">
        {/* Heading */}
        <h2 className="text-sm md:text-base font-semibold text-black mb-10 tracking-wide uppercase">
          Key Technologies and Platforms
        </h2>

        {/* Grid of items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-8 text-black mb-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center lg:justify-center md:justify-start"
            >
              <span className="border-l-2 border-red-500 pl-3 text-sm md:text-base font-medium">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
