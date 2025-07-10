import React from "react";

export function AboutSection() {
  return (
    <section
      className="px-16 py-3.5 mt-0 w-full bg-gray-100 max-md:px-5 max-md:mt-10 max-md:max-w-full space-y-25"
      
    >
      <div className="flex gap-5 max-md:flex-col max-md:">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3121e3292d1c42025cdd9fa10f379ea22c50853?placeholderIfAbsent=true"
            alt="Restaurant interior"
            className="object-contain mt-6 w-full aspect-[1.12] min-h-[621px] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow text-black leading-[52px] max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl tracking-tighter font-rampart max-md:max-w-full">
              We provide healthy food for your family
            </h2>
            <div className="mt-4 text-xl font-cormorant tracking-tight leading-8 max-md:max-w-full">
              <p>
                Herbs on Fire is a pure vegetarian fine dining destination that
                brings together the serene charm of Santorini and the bold,
                interactive experience of Japanese teppanyaki. Inspired by the
                whitewashed beauty of the Greek Isles, our space offers a
                calming, coastal ambiance perfect for refined, memorable dining.
              </p>
              <br />
              <p>
                <span style={{ fontWeight: 700 }}>
                  🏆 Pioneers of Culinary Innovation<br/>
                </span>
                We proudly introduced Ahmedabad's first food court, and now
                continue that legacy with a unique teppanyaki experience —
                entirely vegetarian.
              </p>
              <br />
              <p>
                At Herbs on Fire, guests are seated around live cooking stations
                where expert chefs prepare fresh vegetables, tofu, and
                plant-based delicacies with fire, flair, and finesse. It's a
                culinary performance as entertaining as it is flavorful.
              </p>
              <br />
              <p>
                We believe vegetarian cuisine deserves creativity,
                sophistication, and celebration. Whether you're enjoying a
                special occasion or a casual evening, Herbs on Fire offers a
                one-of-a-kind journey where Japanese precision meets Greek
                island tranquility.
              </p>
              <br />
              <p>
                <span style={{ fontWeight: 700 }}>
                  Feel the flame. Embrace the elegance. Purely vegetarian
                </span>
                .
              </p>
            </div>
           <div className="relative w-full px-10 mt-8 flex items-center justify-between gap-x-32 max-md:flex-col max-md:items-center max-md:gap-10">


              {/* Button */}
              <button className="relative px-8 py-4 bg-white text-black border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="z-10 relative">More About Us</span>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl">↗</span>
              </button>

              {/* Pizza Image aligned beside button */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd9e64fd6a00fadab427bc5721f20489309ec051?placeholderIfAbsent=true"
                alt="Pizza"
                className="w-[400px] h-auto mb-2 max-md:mb-0"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
              
