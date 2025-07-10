"use client";
import * as React from "react";
import { useState } from "react";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <main className="bg-gradient-to-b from-[#1e4d5d] to-[#67918f] py-20 px-6 text-white min-h-screen">
      {/* SECTION 1: Image and Text */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e259c14e75392dedf86fadaee1246661167569?width=1280"
            alt="vector-maps"
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 ">
          <h2 className="text-3xl md:text-4xl font-bold underline font-cinzel mb-4 text-center md:text-left">
            A Property for Every Mood. A Stay for Every Story.
          </h2>
          <p className="text-lg leading-relaxed font-cormorant text-justify ">
  Discover a world of experiences across our signature destinations. At{" "}
  <a
  href="https://maps.app.goo.gl/nLvmcou6pR72h8dK9?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold underline text-stone-200"
>
  Agana
</a>, indulge in
  authentic flavors and grand celebrations with our fine-dining restaurant and
  elegant banquet hall, perfect for unforgettable moments.{" "}
  <a
  href="https://maps.app.goo.gl/an4nLk4wxG9imBTL7?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold underline text-stone-200"
>
  Moon Mount Cafe
</a> invites
  you to unwind at a rooftop paradise, complete with poolside views, cozy ambience,
  and star-lit dining. For those seeking refined sophistication,{" "}
  <a
  href="https://maps.app.goo.gl/5QMrKykiuFX3JvsA6?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold underline text-stone-200"
>
  Hotel Bawa Udaipur
</a> offers
  a luxurious hotel stay with a rooftop pool, premium service, and global cuisine.
  Nestled in the hills,{" "}
  <a
  href="https://www.google.com/maps?q=Agana+location"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold underline text-stone-200"
>
  Nirvana BelleView
</a> is your
  serene mountain retreat with breathtaking views and tranquil luxury. At{" "}
  <a
  href="https://maps.app.goo.gl/Psxs6PKA3JFNansJA?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold underline text-stone-200"
>
  Herbs On Fire
</a>, enjoy a
  unique dining journey across three distinct ambience zones, offering a blend of
  global cuisines in a stylish, immersive setting. And for the nature lovers,{" "}
  <a
  href="https://maps.app.goo.gl/Sdjd59TLzEvtmy4n7?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold underline text-stone-200"
>
  Vanraji Resort
</a>, tucked in
  the heart of the Aravalli Range, delivers an unforgettable escape into the wild —
  combining raw nature with a luxurious stay experience. Each property is crafted to
  offer its own story — but all share a common promise: exceptional hospitality,
  unforgettable moments, and spaces that feel like your own.
</p>

        </div>
      </section>

      {/* SECTION 2: Contact Form */}
      <section className="max-w-3xl mx-auto bg-white text-black p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold font-lobster text-center mb-6 text-[#1e4d5d]">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#1e4d5d] text-white py-3 rounded-xl font-semibold hover:bg-[#163c48]"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
