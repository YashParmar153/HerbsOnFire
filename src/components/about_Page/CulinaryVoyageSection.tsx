import React from "react";
import VoyageCard from "./VoyageCard";
import { motion } from "framer-motion";

const cardFadeUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

export default function CulinaryVoyageSection() {
  return (
    <section className="relative min-h-[1300px] bg-[#2b4f60] overflow-hidden">
      <motion.h2
        className="text-center text-white text-6xl font-cormorant font-semibold pt-12 pb-8"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Pick Your Vibe. We’ve Got the Place
      </motion.h2>

      {/* Card 1 */}
      <motion.a
        href="https://maps.app.goo.gl/5QMrKykiuFX3JvsA6?g_st=ipc"
        target="_blank"
        rel="noopener noreferrer"
        variants={cardFadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="block"
      >
        <VoyageCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0c5e2bb09d4c7f0fd85da66e7b6295ed8a8719?width=800"
          title="Hotel Bawa – Udaipur"
          subtitle="Luxury that touches the sky"
          containerStyle="top-[120px] left-[80px] w-[300px] h-[550px]"
        />
      </motion.a>

      {/* Card 2 */}
      <motion.a
        href="https://maps.app.goo.gl/Sdjd59TLzEvtmy4n7?g_st=ipc"
        target="_blank"
        rel="noopener noreferrer"
        variants={cardFadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="block"
      >
        <VoyageCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f72f1433fff81b8c12cd91ac20b5542a6022a01d?width=1500"
          title="Vanraji Resort – Ambaji"
          subtitle="Where nature meets luxury"
          containerStyle="top-[130px] left-[400px] w-[670px] h-[330px]"
        />
      </motion.a>

      {/* Card 3 */}
      <motion.a
        href="https://goo.gl/maps/hhyyegTDjbfYWemTA"
        target="_blank"
        rel="noopener noreferrer"
        variants={cardFadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="block"
      >
        <VoyageCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder-image-nirvana.png"
          title="Nirvana Belle View – Udaipur"
          subtitle="Find yourself where the mountains whisper"
          containerStyle="top-[200px] left-[1100px] w-[320px] h-[550px]"
        />
      </motion.a>

      {/* Card 4 */}
      <motion.a
        href="https://maps.app.goo.gl/nLvmcou6pR72h8dK9?g_st=ipc"
        target="_blank"
        rel="noopener noreferrer"
        variants={cardFadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="block"
      >
        <VoyageCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/78d483f873a933a06eaa4f54a4bd5344acd4f550?width=1500"
          title="Agana Restaurant & Banquet – Gandhinagar"
          subtitle="Where fire ignites flavours"
          containerStyle="top-[700px] left-[80px] w-[610px] h-[250px]"
        />
      </motion.a>

      {/* Card 5 */}
      <motion.a
        href="https://maps.app.goo.gl/an4nLk4wxG9imBTL7?g_st=ipc"
        target="_blank"
        rel="noopener noreferrer"
        variants={cardFadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="block"
      >
        <VoyageCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/554d84d38fb9e676a7c9ef02b2958dd669c0fb8e?width=800"
          title="Moon Mount Restaurant (Bawa International) – Udaipur"
          subtitle="From dusk till delicious – moon mount has you"
          containerStyle="top-[500px] left-[700px] w-[350px] h-[500px]"
        />
      </motion.a>
    </section>
  );
}
