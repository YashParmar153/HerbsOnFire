"use client";
import * as React from "react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#1e4d5d] to-[#67918f] w-full h-[521px] max-md:h-[300px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47f3837282f56e9f775d80edb529ad63a9e26c41?width=3456"
        alt="Pizza Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full max-w-7xl mx-auto px-6 py-8">
        {/* Logo top-left */}
        

        {/* Heading center */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold font-rampart text-center">
            Contact us
          </h1>
        </div>
      </div>
    </section>
  );
}
