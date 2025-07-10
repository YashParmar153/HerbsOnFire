"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MenuCategoryProps {
  src: string;
  title: string;
  aspect?: string;
  pdf?: string;
  route?: string;
}

export function MenuSection() {
  const menuItems: MenuCategoryProps[] = [
    {
      title: "Drinks",
      src: "/main_menu.png",
      aspect: "aspect-[1.24]",
      route: "/mocktails",
    },
    {
      title: "Soups",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e336587a34042d8f511d0418c4e253ef486452a?placeholderIfAbsent=true",
      aspect: "aspect-[1.24]",
      pdf: "pdfs/Soup-menu.pdf",
    },
    {
      title: "Appetizers",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fb8bd0bd6f9dffb088e70e1af4ffd722066ed85?placeholderIfAbsent=true",
      aspect: "aspect-[1.24]",
      pdf: "pdfs/Appetizers-menu.pdf",
    },
    {
      title: "Sizzlers",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/49f9a846d5a32a6fde4c60cd139c20673aa1b3fe?placeholderIfAbsent=true",
      aspect: "aspect-[1.24]",
      pdf: "pdfs/Sizzlers-menu.pdf",
    },
    {
      title: "Main Course",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0eb13a632614bf6c0f0a4c02150f9f7d098d662e?placeholderIfAbsent=true",
      aspect: "aspect-[1.24]",
      route: "/menu/main-course",
    },
    {
      title: "Desserts",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6761fdc77533436c04bdabeb25ab3a5706b30160?placeholderIfAbsent=true",
      aspect: "aspect-[1.24]",
      pdf: "pdfs/Dessert-menu.pdf",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-20">
      <h2 className="text-center text-4xl md:text-5xl font-cinzel font-extrabold text-black underline underline-offset-4 mb-16">
        Browse Our Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 max-w-5xl mx-auto font-cinzel px-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center"
          >
            {item.pdf ? (
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 w-full ${item.aspect}`}
                />
              </a>
            ) : (
              <Link to={item.route || "#"} className="w-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 w-full ${item.aspect}`}
                />
              </Link>
            )}
            <p className="mt-4 text-xl md:text-2xl font-cinzel font-bold text-black">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
