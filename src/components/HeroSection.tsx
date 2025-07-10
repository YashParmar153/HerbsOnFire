"use client";
import * as React from "react";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative w-full aspect-[16/9] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b63e3d6d79ea0f83922c1ff38d7bc5685ac9d47?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
        alt="Restaurant Interior"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <p className="text-2xl font-cinzel px-4 py-2 mb-4">
          MOMENTS turn into memories over meals
        </p>
        <h1 className="text-5xl md:text-6xl font-bold font-rampart">
          BOOK YOUR TABLE TODAY
        </h1>
      </div>
    </section>
  );
};
