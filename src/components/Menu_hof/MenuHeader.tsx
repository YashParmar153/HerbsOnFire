"use client";
import * as React from "react";
import { BackArrow } from "./BackArrow";

interface MenuHeaderProps {
  logoSrc?: string;
  onBackClick?: () => void;
}

export const MenuHeader: React.FC<MenuHeaderProps> = ({
  logoSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/a152e7f28d9119f26a71a3823a91a9a41a33ba06?width=308",
  onBackClick,
}) => {
  return (
    <header className="relative">
      <img
        src={logoSrc}
        alt="Restaurant Logo"
        className="absolute h-[154px] left-[39px] rounded-[36px] top-[76px] w-[154px] max-md:left-5 max-md:top-10 max-md:h-[120px] max-md:w-[120px] max-sm:top-5 max-sm:w-20 max-sm:h-20 max-sm:left-[15px]"
      />

      <BackArrow onClick={onBackClick} />

      <div className="absolute h-[57px] left-[431px] top-[124px] w-[842px] max-md:static max-md:mt-36 max-md:mb-5 max-md:w-full max-md:text-center max-sm:mt-24 max-sm:mb-4">
        <h1 className="text-5xl font-bold text-stone-400 tracking-[3.5px] max-md:text-4xl max-md:tracking-[2px] max-sm:text-2xl max-sm:tracking-wider">
          The Heart of Our Kitchen
        </h1>
      </div>

      <div className="absolute h-8 left-[623px] top-[207px] w-[513px] max-md:static max-md:mb-16 max-md:w-full max-md:text-center">
        <p className="text-2xl font-bold text-stone-300 max-md:text-lg max-sm:text-sm">
          Where Heritage Meets Haute Cuisine
        </p>
      </div>
    </header>
  );
};
