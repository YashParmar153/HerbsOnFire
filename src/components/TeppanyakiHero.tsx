"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const TeppanyakiHero: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] px-6 py-16 bg-gradient-to-br from-stone-100 to-stone-300 rounded-xl overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="z-10 md:w-1/2 w-full text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="font-rampart text-4xl md:text-6xl leading-snug tracking-wide text-black drop-shadow-md">
          A True Taste of Japanese Cuisines
        </h1>
        <p className="text-lg md:text-xl text-stone-700 font-cormorant max-w-lg">
          Experience the art of teppanyaki and flavors that blend tradition with innovation, curated to delight every guest.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-3 bg-stone-400 border-[5px] border-stone-600 text-black px-6 py-4 rounded-xl font-lobster shadow-lg hover:bg-stone-500 hover:shadow-xl transition-all duration-300"
        >
          🔥 Book a Table
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative md:w-1/2 w-full mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9061356d5db911d82b30fd8074a685fb00908375?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="Japanese Cuisine"
          className="w-full h-auto max-w-xl mx-auto rounded-3xl shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  );
};
