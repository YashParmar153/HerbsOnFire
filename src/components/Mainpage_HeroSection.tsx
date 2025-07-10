import React from "react";
import { Navigation } from "./main_navigation";

export function HeroSection() {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      {/* Logo + Nav */}
      <div className="w-full relative z-20 px-6 py-4 flex items-center justify-between max-w-[1543px] mx-auto max-md:flex-col max-md:gap-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb8e2d3233234c982bcc56753f8f2de3080f270?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="Restaurant Logo"
          className="w-[145px] h-[145px] rounded-full object-contain"
        />
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="flex flex-wrap-reverse justify-center items-center max-w-[1400px] mx-auto px-4 py-10 gap-10">
        {/* Left Side: Text */}
        <div className="flex flex-col space-y-4 w-[600px] max-w-full text-left max-md:text-center relative z-10 md:ml-[-40px] md:mt-10">
          <h1 className="text-8xl font-rampart text-gray-800 max-md:text-5xl">
            Delicious
          </h1>
          <h2 className="text-4xl text-gray-600 font-philosopher max-md:text-2xl">
            Quench the Hunger
          </h2>
          <p className="text-xl font-philosopher text-gray-500 leading-relaxed">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Decorative Add-ons */}
          <div className="relative mt-16 mx-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/685/685352.png"
              alt="Rotating Herb"
              className="w-[100px] h-[100px] animate-spinSlow"
            />
          </div>
        </div>


        {/* Right Side: Image + Ellipse */}
<div className="relative w-[600px] max-w-full flex justify-center items-start">
  {/* Ellipse stays where it is */}
  <div className="absolute bg-[#6C9285] rounded-[50%] z-0 max-md:w-[1000px] max-md:h-[500px]"
  style={{
    width: "1400px",      // More elliptical
    height: "1000px",      // Shorter
    top: "-600px",        // Adjust for upward shift
    right: "-650px",      // Push leftward toward cartoon
  }}
/>

  {/* Cartoon Image shifted up via its own wrapper */}
  <div className="relative z-10 ml-10 -mt-32 max-md:mt-4">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d2d9894fdfb496c86f90d6b9b1277c485e34ad?placeholderIfAbsent=true"
      alt="Featured Dish"
      className="w-[860px] h-[500px] object-contain max-md:w-full max-md:h-auto"
    />
  </div>
</div>

      </div>
    </section>
  );
}
