import React from "react";
import HeroSection from "./HeroSection";
import { Navigation } from "../Navigation";
import FlameFlavorSection from "./FlameFlavorSection";
import TeamSection from "./TeamSection";
import CulinaryVoyageSection from "./CulinaryVoyageSection";
import { Footer } from "../Footer";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden w-full bg-teal-900">

      {/* Each section below should manage its own padding/margin */}
      <section className="w-full">
        <HeroSection />
      </section>

      <section className="w-full">
        <FlameFlavorSection />
      </section>

      <section className="w-full">
        <TeamSection />
      </section>

      <section className="w-full">
        <CulinaryVoyageSection />
      </section>

      <Footer />
    </main>
  );
}
