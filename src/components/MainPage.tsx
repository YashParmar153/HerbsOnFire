import React from "react";
import {HeroSection} from "./Mainpage_HeroSection";

import { AboutSection } from "./AboutSection";
import { AmbienceSection } from "./AmbienceSection";
import { MenuSection } from "./MenuSection";
import { Footer } from "./Footer";

export default function MainPage() {
  return (
    <main className="flex overflow-hidden flex-col pb-36 bg-gray-200 max-md:pb-24">
      <HeroSection />
      <AboutSection />
      <AmbienceSection />
      <MenuSection />
      <Footer />
    </main>
  );
}
