"use client";
import * as React from "react";
import { MenuHeader } from "./MenuHeader";
import { MenuCategories } from "./MenuCategories";

interface Mocktail_menuProps {
  logoSrc?: string;
  onBackClick?: () => void;
  onCategoryClick?: (category: string) => void;
}

export const Mocktail_menu: React.FC<Mocktail_menuProps> = ({
  logoSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/a152e7f28d9119f26a71a3823a91a9a41a33ba06?width=308",
  onBackClick,
  onCategoryClick,
}) => {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      window.history.back();
    }
  };

  const handleCategoryClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    } else {
      console.log(`Selected category: ${category}`);
    }
  };

  return (
    <main className="relative w-full min-h-screen overflow-y-auto bg-[#355C6D] text-white font-cinzel">
      <div className="flex items-center justify-between px-10 py-6 max-md:px-4">
        <img src={logoSrc} alt="Herbs on Fire Logo" className="h-32 w-auto max-md:h-24" />
        <button onClick={handleBackClick} aria-label="Go back">
          <img
            src="https://cdn-icons-png.flaticon.com/512/545/545680.png"
            alt="Back"
            className="w-12 h-12 invert"
          />
        </button>
      </div>

      <div className="px-10 max-md:px-4">
        <h1 className="text-[#AAAF8D] text-4xl md:text-6xl font-bold text-center">
          A Toast to Sophistication
        </h1>
        <p className="text-[#DDD4C9] text-center uppercase tracking-wide text-sm md:text-base mt-2 mb-[100px]">
          Chilled Sophistication, Poured to Perfection
        </p>
      </div>

      <section className="flex flex-col items-start gap-[80px] px-16 pb-20 max-md:px-6 text-center">
        <MenuCategories onCategoryClick={handleCategoryClick} />
      </section>
    </main>
  );
};

export default Mocktail_menu;
