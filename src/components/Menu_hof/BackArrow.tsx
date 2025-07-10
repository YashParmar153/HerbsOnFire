"use client";
import * as React from "react";

interface BackArrowProps {
  onClick?: () => void;
}

export const BackArrow: React.FC<BackArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[185px] top-[94px] w-20 h-20 max-md:right-5 max-md:top-10 max-sm:right-4 max-sm:top-5 max-sm:w-16 max-sm:h-16"
      aria-label="Go back"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M26.0833 43.3335L44.7499 62.0002L39.9999 66.6668L13.3333 40.0002L39.9999 13.3335L44.7499 18.0002L26.0833 36.6668H66.6666V43.3335H26.0833Z"
          fill="#F2EFE4"
        />
      </svg>
    </button>
  );
};
