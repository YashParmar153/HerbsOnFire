import React from "react";

export const MenuHeader: React.FC = () => {
  return (
    <header className="relative w-full py-24 max-md:py-16 max-sm:py-12">
      {/* Logo - top-left */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23f9321c15aa930bee4d7517b1b44573aee4eda3?width=300"
        alt="Restaurant logo"
        className="absolute top-10 left-10 w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px] max-sm:w-16 max-sm:h-16"
      />

      {/* Chef background image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6011652e4e6465f0ef909b01fdb16ff17ba1b35?width=912"
        alt="Menu decoration"
        className="absolute top-40 left-[10%] w-[400px] h-auto opacity-30 z-0 max-md:w-[280px] max-sm:w-[200px]"
      />

      {/* Centered headings */}
      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-2">
        <h1 className="text-sm tracking-widest uppercase text-stone-300">
          From the Kitchen
        </h1>
        <h2 className="text-4xl font-bold tracking-wider text-stone-400 max-md:text-3xl max-sm:text-2xl">
          Taste the Journey
        </h2>
      </div>
    </header>
  );
};
