"use client";
import * as React from "react";
import { UserIcon } from "./UserIcon";

export function Navigation() {
  return (
    <nav className="flex absolute shrink-0 gap-7 items-center h-[59px] left-[766px] top-[74px] w-[869px] max-md:left-2/4 max-md:flex-wrap max-md:gap-5 max-md:justify-center max-md:w-auto max-md:-translate-x-2/4 max-md:top-[50px] max-sm:hidden">
      <div className="text-2xl font-bold text-black cursor-pointer max-md:text-xl">
        Home
      </div>
      <div className="text-2xl font-bold text-black cursor-pointer max-md:text-xl">
        About
      </div>
      <div className="text-2xl font-bold text-black cursor-pointer max-md:text-xl">
        Reservation
      </div>
      <div className="text-2xl font-bold text-black cursor-pointer max-md:text-xl">
        Blog
      </div>
      <div className="text-2xl font-bold text-black cursor-pointer max-md:text-xl">
        Contact
      </div>
      <UserIcon />
    </nav>
  );
}
