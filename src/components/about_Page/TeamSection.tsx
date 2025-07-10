import React from "react";

export default function TeamSection() {
  return (
    <section className="relative bg-[#1e4d5d] px-4 py-20 flex flex-col items-center">
      {/* Container for image and text overlay */}
      <div className="relative w-full max-w-6xl">
        {/* Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dedf1c9e0960a1df7aac8cdccf7ee829248c005a?width=3046"
          alt="team"
          className="w-[1700px] h-[400px] object-cover rounded-lg max-md:h-[350px]"
        />

        {/* Heading over image (top-left) */}
        <h2 className="absolute top-6 left-6 text-4xl font-semibold font-cormorant text-white max-w-[500px] max-md:text-xl">
          The Faces Behind the Flame &amp; Flavor
        </h2>

        {/* Text box overlay (bottom-right corner of image) */}
        <div className="absolute bottom-[-60px] -right-20 bg-green-200 rounded-[30px] p-6 md:p-8 w-[80%] md:w-[60%] w-[1317px] shadow-md">
          <p className="text-base md:text-xl font-medium font-cormorant text-black leading-relaxed">
            At Herbs on Fire, <br/>our team is more than staff — they're artisans of experience.
            From our visionary chefs to gracious hosts, each member contributes to an immersive dining journey
            that celebrates fire, finesse, and flavor. Meet the passionate individuals who bring elegance and
            energy to every plate and moment.
          </p>
        </div>
      </div>
    </section>
  );
}
