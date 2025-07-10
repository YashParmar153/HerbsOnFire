"use client";
import React from "react";
import { BackgroundImages } from "./BackgroundImages";
import { BackButton } from "./BackButton";
import { MenuHeader } from "./MenuHeader";
import { MenuSection } from "./MenuSection";

export const MenuCard: React.FC = () => {
  const japaneseSaladItems = [
    {
      name: "SOM TUM SALAD (250 Grams)",
      price: "250/-",
      description: "raw PAPAYA, SPICY & TANGY TAMARIND JUICE",
      dots: ".................................................",
    },
    {
      name: "DAICON SALAD (250 Grams)",
      price: "250/-",
      description: "RADISH WITH PEANUT BUTTER",
      dots: "...............................................",
    },
  ];

  const mongolianCounterItems = [
    {
      name: "MANGOLIAN RICE (550 Grams)",
      price: "690/-",
      description:
        "Wok-tossed rice with vibrant veggies in a smoky, spicy Mongolian sauce —bold and satisfying!",
      dots: "...............................................",
    },
    {
      name: "MANGOLIAN NOODLES (550 grams)",
      price: "680/-",
      description: "Fiery, saucy noodles tossed with veggies",
      dots: "..............................",
    },
  ];

  const japaneseCounterItems = [
    {
      name: "VEG YAKITORI (450 Grams)",
      price: "450/-",
      description:
        "Grilled skewers of MIDORI NO YASAI, bell peppers, and zucchini glazed in a sweet soy-garlic sauce — a smoky, savory veg delight!",
      dots: "...................................................",
    },
    {
      name: "TOFU YAKITORI (400 Grams)",
      price: "530/-",
      description:
        "Tofu glazed in sweet soy-garlic sauce, grilled with bell peppers - smoky, savory!",
      dots: "................................................",
    },
    {
      name: "COTTAGE CHEESE YAKITORI (400 Grams)",
      price: "500/-",
      description:
        "Char-grilled cottage cheese skewers kissed with a sweet soy-garlic drizzle and fire-roasted bell peppers — a bold veg twist on a Japanese classic!",
      dots: "...............",
      className:
        "flex relative flex-wrap gap-4 items-start mb-5 max-md:mb-4 max-sm:block max-sm:mb-2.5",
    },
    {
      name: "BROCCOLI & MUSHROOM TERIYAKI (350 Grams).",
      price: "480/-",
      description:
        "Wok-tossed BROCCOLI & MUSHROOM in a glossy, umami-rich teriyaki glaze— pure plant power!",
      dots: "",
    },
    {
      name: "EXOTIC VEGETABLES TERIYAKI (450 Grams)",
      price: "510/-",
      description:
        "A vibrant medley of veggies in a bold, savory-sweet teriyaki sauce— colorful, crunchy, crave-worthy!",
      dots: "............",
    },
    {
      name: "OKONOMIYAKI (600 Grams)",
      price: "650/-",
      description:
        "Japanese-style veggie pancake, crispy outside, fluffy inside-drizzled with CHEESY & CREAMY sauces and pure delight!",
      dots: ".................................................",
    },
    {
      name: "TEPPENIYAKI (350 Grams)",
      price: "550/-",
      description:
        "Sizzling veggies, expertly grilled on the flat-top, with a burst of savory flavors in every bite!",
      dots: "........................................................",
    },
  ];

  const onigiriItems = [
    {
      name: "Avo Hug (300 grams)",
      price: "580/-",
      description:
        "Creamy avocado snuggled in a warm rice embrace-simple, soft, satisfying.",
      dots: ".......................................................................",
    },
    {
      name: "Tempura Pop (300 grams)",
      price: "510/-",
      description:
        "Golden tempura packed in a crispy-rice surprise-every bite goes crunch!",
      dots: ".........................................................",
    },
    {
      name: "Leafy Pocket (300 grams)",
      price: "520/-",
      description:
        "Fresh green veggies wrapped in a rice bundle-light, clean, totally zen.",
      dots: "......................................................",
    },
  ];

  const uramakiItems = [
    {
      name: "Avocado Glow (300 Grams)",
      price: "550/-",
      description:
        "Inside-out roll bursting with buttery avocado and smooth, sunny vibes.",
      dots: "......................................................",
    },
    {
      name: "Crunch Rush (300 Grams)",
      price: "490/-",
      description:
        "Tempura-packed with a golden crunch-crispy outside, flavor explosion inside.",
      dots: ".......................................................",
    },
    {
      name: "Emerald Garden (300 Grams)",
      price: "520/-",
      description:
        "Bright green veggies wrapped in rice and rolled with fresh finesse.",
      dots: "..........................................",
    },
  ];

  const makiItems = [
    {
      name: "Avocado Dream Roll (300 Grams)",
      price: "550/-",
      description:
        "Smooth avocado meets perfectly rolled rice-creamy, clean, unforgettable.",
      dots: "........................................",
    },
    {
      name: "Tempura Tango (300 Grams)",
      price: "490/-",
      description:
        "Crunchy tempura takes center stage in this crispy-craveable dance.",
      dots: "................................................",
    },
    {
      name: "Green Zen Maki (300 Grams)",
      price: "460/-",
      description:
        "A medley of fresh greens rolled into pure, peaceful perfection.",
      dots: "..............................................",
    },
  ];

  const sashimiItems = [
    {
      name: "Avo Slices (300 Grams)",
      price: "580/-",
      description:
        "Silky avocado, sliced to perfection-pure, buttery elegance on a plate.",
      dots: ".................................................................",
    },
    {
      name: "Tempura Flare (300 Grams)",
      price: "520/-",
      description:
        "Lightly crisp veggie tempura strips served sashimi-style—delicate with a crunch.",
      dots: "....................................................",
    },
    {
      name: "Green Silks (300 Grams)",
      price: "540/-",
      description:
        "Thin-cut garden greens drizzled with citrus-soy-fresh, bold, and beautiful.",
      dots: "........................................................",
    },
  ];

  return (
    <main className="relative bg-[#65684C] min-h-screen w-full overflow-hidden">
  <BackgroundImages />

  <div className="relative z-10">
    <MenuHeader />
    <BackButton />

    <div className="max-w-[1728px] mx-auto grid grid-cols-2 gap-x-20 gap-y-16 px-10 pb-20">
      <MenuSection title="Japanese Salad" items={japaneseSaladItems} />
      <MenuSection title="Mongolian Counter" items={mongolianCounterItems} />
      <MenuSection title="Onigiri" items={onigiriItems} />
      <MenuSection title="Maki" items={makiItems} />
      <MenuSection title="Japanese Counter" items={japaneseCounterItems} />
      <MenuSection title="Uramaki" items={uramakiItems} />
      <MenuSection title="Sashimi" items={sashimiItems} />
    </div>
  </div>
</main>
  );
};

export default MenuCard;
