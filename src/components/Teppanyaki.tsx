"use client";
import * as React from "react";
import { Navigation } from "./Navigation";
import { TeppanyakiHero } from "./TeppanyakiHero";
import { TeppanyakiFeatures } from "./TeppanyakiFeatures";
import { TeppanyakiMenuCTA } from "./TeppanyakiMenuCTA";
import { Footer } from "./Footer";

const Teppanyaki: React.FC = () => {
  return (
    <main className="flex flex-col pt-2 bg-stone-200 max-md:pt-1">
      <div className="flex flex-col items-center w-full max-md:px-4 max-md:max-w-full space-y-6">
        <Navigation />
        <TeppanyakiHero />
        <TeppanyakiFeatures />
              <TeppanyakiMenuCTA />
      <Footer />
      </div>
      
    </main>
  );
};

export default Teppanyaki;
