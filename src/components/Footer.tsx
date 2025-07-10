"use client";
import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-200 py-16 font-cormorant text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Divider */}
        <hr className="border-slate-700 mb-12" />

        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo and Address */}
          <div className="flex flex-col max-w-md">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad84b707f3b51a89229f959f5b0f2693fe1ae5c3?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
              alt="Restaurant Logo"
              className="w-28 h-28 rounded-2xl mb-4"
            />
            <address className="not-italic leading-6">
              <p>
                Herbs on Fire, Zarna Party Plot Bopal, Survey No. 363, FP- 47,
                TP-51, B/H, Ambli Rd, nr. Iskcon Cross Road, Ahmedabad
              </p>
              <p className="mt-2">📞 +91 9998822720</p>
              <h4 className="mt-6 font-medium opacity-60">Follow Us</h4>
              <div className="flex gap-4 mt-2">
                <a href="#" aria-label="Instagram">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Facebook">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" aria-label="YouTube">
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </address>
          </div>

          {/* Google Map Embed with Redirect and Visible Pin */}
          <div className="w-full max-w-xl">
            <a
              href="https://maps.app.goo.gl/pbnmSrZU2ME2L9ix9?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-3 text-sm text-blue-600 hover:underline"
            >
              View on Google Maps ↗
            </a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9834956434674!2d72.50389899999999!3d23.024378199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b1c7e84ce3b%3A0xb89be715a5559a8!2sHerbs%20On%20Fire!5e0!3m2!1sen!2sin!4v1750347941052!5m2!1sen!2sin" 
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Divider and Links */}
        <hr className="border-slate-700 mt-16 mb-6" />
        <nav className="flex flex-wrap gap-6 text-lg">
          <a href="#" className="hover:text-stone-600 transition-colors">About Us</a>
          <a href="#" className="hover:text-stone-600 transition-colors">Contact Us</a>
          <a href="#" className="hover:text-stone-600 transition-colors">Help</a>
          <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-600 transition-colors">Explore</a>
        </nav>

        {/* Copyright */}
        <p className="mt-6 text-center text-sm text-slate-700">
          © {new Date().getFullYear()} PRP Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
