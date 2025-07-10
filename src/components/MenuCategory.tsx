import { Link } from "react-router-dom";

export const MenuCategory = ({
  src,
  title,
  aspect,
  pdf,
  route,
}: {
  src: string;
  title: string;
  aspect: string;
  pdf?: string;     // ✅ make it optional
  route?: string;   // ✅ make it optional
}) => {
  const content = (
    <div className={`relative w-full ${aspect} rounded-lg overflow-hidden shadow-lg`}>
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );

  if (route) {
    return (
      <Link to={route} className="block hover:scale-105 transition-transform">
        {content}
      </Link>
    );
  }

  if (pdf) {
    return (
      <a href={pdf} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform">
        {content}
      </a>
    );
  }

  // Optional fallback if neither route nor pdf is provided
  return (
    <div className="block cursor-not-allowed opacity-50">
      {content}
    </div>
  );
};
