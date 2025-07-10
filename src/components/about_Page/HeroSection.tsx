import React from "react";
import { Navigation } from "../Navigation";

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-screen max-md:min-h-[400px]">
      {/* Background Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/427285df299a973a0e7e6fd393a1bfe2a63fa437?width=3456"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Text positioned at bottom-right */}
      <div className="absolute bottom-12 right-12 text-white z-10 max-md:bottom-6 max-md:right-6 max-sm:bottom-4 max-sm:right-4">
        <h1 className="text-6xl italic font-bold font-cormorant text-right max-md:text-4xl max-sm:text-2xl">
          Where Taste Becomes Theater ...
        </h1>
      </div>
    </header>
  );
}
