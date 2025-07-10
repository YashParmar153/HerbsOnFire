"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const TeppanyakiFeatures: React.FC = () => {
  return (
    <section className="mt-24 space-y-24 px-6 font-cormorant max-md:mt-10">
      {/* First Feature Block */}
      <div className="flex items-center gap-10 max-md:flex-col">
        {/* Text Left */}
        <motion.div
          className="w-1/2 max-md:w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl font-bold mb-8">
            Sizzle the Samurai Way – Pure Japanese Teppanyaki Fire!
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
          </p>
        </motion.div>

        {/* Image Right */}
                <motion.img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f1e4b32f9d84375b4e61d1e23786329a3d1a8b0?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="Korean Style Grilling"
          className="w-1/2 max-w-[480px] rounded-2xl object-cover max-md:w-full shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
         whileHover={{ rotateY: 180 }}
        />
        
      </div>

      {/* Second Feature Block */}
      <div className="flex items-center gap-10 max-md:flex-col-reverse">
        {/* Image Left */}
                <motion.img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff7668a9a3260c68a91911859dd4b24eb415168?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="Teppanyaki Cooking"
          className="w-1/2 max-w-[480px] rounded-2xl object-cover max-md:w-full shadow-xl"
                   initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
                    whileHover={{ rotateY: 180 }}/>
        

        {/* Text Right with Icons */}
        <motion.div
          className="w-1/2 max-md:w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
         
       >
          <h2 className="text-5xl font-bold mb-8">
            Grill It Korean Style – Bold Flavors, Teppan Flames!
          </h2>

          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            {/* Authentic Korean */}
            <motion.div
              className="flex flex-col items-start h-full"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/669033a46414469db206aaa9ccf756fba7b19221?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
                alt="Authentic Korean Icon"
                className="w-[50px] mb-2"
              />
              <h4 className="text-2xl font-bold mb-1">Authentic Korean</h4>
              <p className="text-lg">
                Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel cursus.
              </p>
            </motion.div>

            {/* Creative Menu */}
            <motion.div
              className="flex flex-col items-start h-full"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb8606eaeb615a3985d81a41a1ff07678a22002?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
                alt="Creative Menu Icon"
                className="w-[50px] mb-2"
              />
              <h4 className="text-2xl font-bold mb-1">Creative Menu</h4>
              <p className="text-lg">
                Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
              </p>
            </motion.div>

            {/* Always Fresh */}
            <motion.div
              className="flex flex-col items-start h-full"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24305cc2b6414ba7da25182aea39133c022c10bd?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
                alt="Always Fresh Icon"
                className="w-[50px] mb-2"
              />
              <h4 className="text-2xl font-bold mb-1">Always Fresh</h4>
              <p className="text-lg">
                Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
              </p>
            </motion.div>

            {/* No Additives */}
            <motion.div
              className="flex flex-col items-start h-full"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7debbff34209056769f05d74990ff474faea16a?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
                alt="No Additives Icon"
                className="w-[50px] mb-2"
              />
              <h4 className="text-2xl font-bold mb-1">No Additives</h4>
              <p className="text-lg">
                Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

