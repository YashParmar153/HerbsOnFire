"use client";
import React from "react";

export const BackButton: React.FC = () => {
  return (
    <button
      className="absolute right-[158px] top-[78px] z-10 cursor-pointer"
      style={{ width: "70px", height: "70px" }}
      aria-label="Go back"
    >
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="back-arrow"
      >
        <path
          d="M22.8228 37.9167L39.1561 54.2501L34.9998 58.3334L11.6665 35.0001L34.9998 11.6667L39.1561 15.7501L22.8228 32.0834H58.3332V37.9167H22.8228Z"
          fill="#F2EFE4"
        />
      </svg>
    </button>
  );
};
