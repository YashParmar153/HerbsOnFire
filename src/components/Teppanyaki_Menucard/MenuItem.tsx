import React from "react";

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {/* Line with dots between name and price */}
      <div className="flex items-center text-base text-white font-cinzel font-garamond">
        <span>{name}</span>
        <div className="flex-grow mx-2 border-b border-dotted border-white opacity-50 font-cinzel font-bold" />
        <span>{price}</span>
      </div>

      {/* Description below */}
      <p className="mt-1 text-sm text-white/70 font-cinzel">{description}</p>
    </div>
  );
};
