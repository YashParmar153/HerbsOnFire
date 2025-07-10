import React from "react";

interface VoyageCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  containerStyle?: string;
  imageClasses?: string;
  overlayClasses?: string;
  titleClasses?: string;
  subtitleClasses?: string;
}

export default function VoyageCard({
  imageSrc,
  title,
  subtitle,
  containerStyle = "",
  imageClasses = "rounded-3xl w-full h-full object-cover",
  overlayClasses = "absolute bottom-0 left-0 w-full h-[90px] bg-[#1E4355] bg-opacity-90 rounded-b-3xl px-4 py-2",
  titleClasses = "text-white text-sg font-bold underline font-cinzel",
  subtitleClasses = "text-white text-sm font-lobster font-semibold mt-1",
}: VoyageCardProps) {
  return (
    <article className={`absolute ${containerStyle}`}>
      <div className="relative w-full h-full">
        <img src={imageSrc} alt={title} className={imageClasses} />
        <div className={overlayClasses}>
          <h3 className={titleClasses}>{title}</h3>
          <p className={subtitleClasses}>{subtitle}</p>
        </div>
      </div>
    </article>
  );
}
