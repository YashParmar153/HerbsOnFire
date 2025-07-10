import React from "react";
import { MenuItem } from "./MenuItem";

interface MenuItemData {
  name: string;
  price: string;
  description: string;
  
  className?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItemData[];
  className?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <section className={`mb-12 text-white ${className}`}>
      <h3 className="mb-5 text-lg font-bold tracking-wider uppercase border-b border-white pb-1">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
    
            className={item.className}
          />
        ))}
      </div>
    </section>
  );
};
