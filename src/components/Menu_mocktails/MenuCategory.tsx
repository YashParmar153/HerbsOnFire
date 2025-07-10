"use client";
import * as React from "react";

interface MenuCategoryProps {
  title: string;
  onClick?: () => void;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({
  title,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="block text-5xl font-bold tracking-widest text-gray-200 underline transition-all cursor-pointer duration-[0.3s] ease-[ease] text-left w-full max-md:text-4xl max-md:tracking-wider max-md:p-5 max-md:mb-10 max-sm:text-2xl max-sm:tracking-wide max-sm:p-4 max-sm:mb-8"
    >
      {title}
    </button>
  );
};
