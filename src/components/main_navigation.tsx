import React from 'react';
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex-1 flex items-center justify-end gap-10 text-base text-black font-cinzel max-md:flex-col max-md:items-center">
      <div className="flex gap-8 max-md:flex-wrap max-md:justify-center">
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
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/520656936be67d1872fc7ddf079d470c595fe311?placeholderIfAbsent=true"
        alt="User profile"
        className="rounded-full w-[50px] h-[50px] object-cover"
      />
    </nav>
  );
}
