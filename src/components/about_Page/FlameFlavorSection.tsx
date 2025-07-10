import React from "react";

export default function AmbienceSections() {
  return (
    <section className="w-full bg-[#1e4d5d] text-white px-8 py-24 flex flex-col gap-32">

      {/* 🔥 Section 1: Flame. Flavor. Philosophy. */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Block */}
        <div className="w-full lg:w-1/2 h-[400px] bg-zinc-300 flex items-center justify-center rounded-2xl shadow-lg">
          {/* Optional image or content can go here */}
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="mb-10 text-5xl font-bold text-center font-rampart max-md:text-4xl max-sm:text-3xl">
            Flame. Flavor. Philosophy.
          </h2>
          <p className="text-2xl max-md:text-xl font-cormorant max-sm:text-base leading-relaxed">
            An opulent journey of fire-kissed vegetarian cuisine, where flavor
            reigns and philosophy guides every thoughtfully plated indulgence.
          </p>
        </div>
      </div>

      {/* 🍃 Section 2: Greek Serenity & Japanese Drama */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-bold leading-snug font-rampart text-center max-md:text-4xl max-sm:text-2xl">
            Where Greek Serenity <br /> & Japanese Drama Dine Together
          </h2>
        </div>

        {/* Right Staggered Blocks */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 relative">
          <div className="w-full h-[300px] bg-zinc-300 rounded-2xl shadow-lg" />
          
        </div>
      </div>
    </section>
  );
}
