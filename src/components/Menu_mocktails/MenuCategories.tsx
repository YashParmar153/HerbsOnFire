"use client";
import * as React from "react";

interface MenuCategoriesProps {
  onCategoryClick?: (category: string) => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  onCategoryClick,
}) => {
  const categories = [
    { name: "Shake/smoothies/shots", pdf: "/pdfs/3s.pdf" },
    { name: "Mocktails & Cocktails", pdf: "/pdfs/Cocktails.pdf" },
    { name: "Tea & Coffee", pdf: "/pdfs/Coffee.pdf" },
    
  ];

  return (
    <nav className="w-full max-w-md text-left space-y-[80px]">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.pdf}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onCategoryClick?.(category.name)}
          className="block text-white text-2xl md:text-3xl font-cinzel font-semibold underline underline-offset-4 hover:text-[#E9D9B0] transition duration-300"
        >
          • {category.name}
        </a>
      ))}
    </nav>
  );
};

