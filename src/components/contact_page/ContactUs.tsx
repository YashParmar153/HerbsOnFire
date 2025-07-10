"use client";
import * as React from "react";
import { Navigation } from "../Navigation";
import { HeroSection } from "./HeroSection";
import { ContactContent } from "./ContactContent";

function ContactUs() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#1e4d5d] to-[#67918f]">
          <Navigation />
      <HeroSection />
      
      <ContactContent />
    </div>
  );
}

export default ContactUs;
