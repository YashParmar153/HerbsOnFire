import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AmbienceSection() {
  return (
    <section className="w-full bg-[#C49A62] relative overflow-hidden py-24 px-6 sm:px-10 lg:px-16">

      {/* Tree Image - Positioned Bottom Left */}
      <motion.img
        initial={{ opacity: 0, x: -50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/949d42eef2422d3ae5a232bf323bee9cdd8ac36e?placeholderIfAbsent=true"
        alt="Tree"
        className="absolute bottom-0 left-0 w-64 sm:w-72 md:w-80 opacity-80"
      />

      {/* Main Flex Row */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 relative z-10">

        {/* Left Content - Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="max-w-md text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-rampart font-semibold text-black leading-tight">
              Explore the Great <br />
              Ambience of Teppanyaki
            </h2>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
       <Link
  to="/teppenyaki"
  className="group flex flex-col items-center text-center w-fit mx-auto"
>
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde6ed551d64dbafb55b41c9e73efa6e84b41818?placeholderIfAbsent=true"
    alt="Chef Teppanyaki"
    className="w-64 sm:w-80 md:w-[350px] lg:w-[400px] h-auto rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
  />
  <span className="mt-4 text-base md:text-lg text-[#000000] font-bold font-cormorant group-hover:underline">
    Tap The Image to View Our Teppenyaki Platform
  </span>
</Link>


        </motion.div>

      </div>
    </section>
  );
}
