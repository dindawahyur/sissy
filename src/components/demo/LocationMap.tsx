import { useEffect, useState } from "react";

type LocationMapProps = {
    mapSrc: string;
};

export function LocationMap({ mapSrc }: LocationMapProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative group">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg animate-pulse">
                    <span className="text-gray-500 text-lg">Loading map...</span>
                </div>
            )}
            <div
                className={`aspect-w-16 aspect-h-9 transition-transform duration-700 transform group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            >
                <iframe
                    src={mapSrc}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
                ></iframe>
            </div>
        </div>
    );
}
