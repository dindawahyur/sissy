import { useEffect, useState } from "react";

type LocationMapProps = {
  readonly mapSrc: string;
};

export function LocationMap({ mapSrc }: LocationMapProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const secureMapSrc = mapSrc.startsWith("https://")
    ? mapSrc
    : `https://www.google.com/maps/embed?${mapSrc}`;

  return (
    <div className="relative group">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg animate-pulse">
          <span className="text-gray-500 text-lg">Loading map...</span>
        </div>
      )}
      <div
        className={`aspect-w-16 aspect-h-9 transition-transform duration-700 transform group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.0532197694204!2d109.477274!3d-7.730955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDMnNTEuNCJTIDEwOcKwMjgnMzguMiJF!5e0!3m2!1sen!2sid!4v1700000000000"
          }
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
          className="w-full h-full rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
        ></iframe>
      </div>
    </div>
  );
}
