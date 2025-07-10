"use client";
import * as React from "react";

interface ReservationSectionProps {}

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 bg-slate-700 text-white w-full">
      <div className="flex flex-row items-center justify-center gap-12 w-full max-w-6xl flex-wrap lg:flex-nowrap">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fccc3f01e55d58f0a6a795a651e27580385f4ddf?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
            alt="Restaurant Dining Area"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Right Side: Text + Form */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Make a Reservation</h2>
          <p className="text-base">
            We accept online bookings for tables up to twenty people. Larger
            parties can be booked by phone or in person at the restaurant.
          </p>

          <form className="mt-4 space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Contact Number</label>
              <input
                type="tel"
                placeholder="e.g., +91-9876543210"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium">Number of People</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  placeholder="e.g., 2"
                  className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            {/* Optional: Time and Special Requests */}
            <div>
              <label className="block mb-1 text-sm font-medium">Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Special Requests</label>
              <textarea
                rows={3}
                placeholder="Any specific needs?"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
