"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const TeppanyakiMenuCTA: React.FC = () => {
  return (
    <>
      {/* Reserved Video Section */}
      <div className="flex w-full min-h-[500px] bg-zinc-300 items-center justify-center font-cormorant text-4xl text-black">
        <p className="opacity-40">Reserved for video section</p>
      </div>

      {/* Menu CTA Section */}
      <section className="relative flex flex-col justify-center items-center w-full min-h-[730px] px-6 py-24 bg-zinc-300 overflow-hidden font-cormorant">
        {/* Background Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7c5202e22d3e3df19c082147084ccb0479b849a?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="Menu Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="relative z-10 text-black text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-semibold font-cormorant mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Discover the Art of Dining
          </motion.h2>

        <a href="/pdfs/teppenyaki_menu.pdf" target="_blank" rel="noopener noreferrer">
  <motion.button
    className="px-12 py-6 rounded-xl border-4 border-stone-600 font-cormorant text-3xl text-black bg-white/30 hover:bg-white/50 transition-all duration-500"
    whileHover={{ scale: 1.05, rotate: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    Unveil the Menu
  </motion.button>
</a>
        </div>
      </section>
    </>
  );
};
