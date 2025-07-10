"use client";
import * as React from "react";
import { Link } from "react-router-dom";


export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-stone-200 bg-opacity-95 backdrop-blur-sm shadow-md w-full">
      <nav className="flex items-center justify-between max-w-[1543px] mx-auto px-6 py-4 text-base text-black font-cinzel">
        {/* Logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb8e2d3233234c982bcc56753f8f2de3080f270?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="Restaurant Logo"
          className="w-[80px] h-[80px] rounded-full object-contain"
        />

        {/* Navigation */}
        <div className="flex items-center gap-10">
          <div className="flex gap-8">
                        <Link to="/" className="hover:text-stone-600 transition-colors font-bold">
                Home
            </Link>
            <Link to="/about" className="hover:text-stone-600 transition-colors font-bold">
                About
            </Link>
            <Link to="/reservation" className="hover:text-stone-600 transition-colors font-bold">
                Reservation
            </Link>
        
            <Link to="/contact" className="hover:text-stone-600 transition-colors font-bold">
                Contact
            </Link>
          </div>

          {/* Profile */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/247572c8f2903ffbffda1fc0d38eb83ba506a4ab?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
            alt="Profile"
            className="w-[65px] rounded-full object-contain"
          />
        </div>
      </nav>
     
    </header>
  );
};
