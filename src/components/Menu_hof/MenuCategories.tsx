"use client";
import * as React from "react";

interface MenuCategoriesProps {
  onCategoryClick?: (category: string) => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  onCategoryClick,
}) => {
  const categories = [
    { name: "Burgers & Sandwiches", pdf: "/pdfs/MAin-course-Sandwich.pdf" },
    { name: "Neapolitan Pizzas", pdf: "/pdfs/MAin-course-pizza.pdf" },
    { name: "Ramen & Turkish", pdf: "/pdfs/MAin-course-Ramen.pdf" },
    { name: "European Cuisine", pdf: "/pdfs/MAin-course-europian-cuisine.pdf" },
    { name: "Oriental Cuisine", pdf: "/pdfs/MAin-course-oriental-cuisine.pdf" },
    { name: "Indian Cuisine", pdf: "/pdfs/MAin-course-indian-cuisine.pdf" },
    { name: "Indian Bread", pdf: "/pdfs/MAin-course-indian-bread.pdf" },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 px-6">
      {/* Category List */}
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

      {/* Image Section */}
      <div className="relative w-[700px] hidden md:block">
        <img
          src="/main-course.png"
          alt="Main Course"
          className="w-full h-auto rounded-xl opacity-20 transform rotate-3 translate-x-16"
        />
      </div>
    </div>
  );
};
