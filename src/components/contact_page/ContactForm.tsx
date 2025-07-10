"use client";
import React, { useState } from "react";

export const ContactForm = () => {
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
    // Replace this with API call or email integration
    console.log("Submitted Contact Form:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-[#1e4d5d]">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={handleChange}
        value={formData.name}
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        onChange={handleChange}
        value={formData.email}
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone (optional)"
        onChange={handleChange}
        value={formData.phone}
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        onChange={handleChange}
        value={formData.message}
        rows={5}
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d5d]"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-[#1e4d5d] text-white py-3 rounded-xl font-semibold hover:bg-[#163c48]"
      >
        Send Message
      </button>
    </form>
  );
};
