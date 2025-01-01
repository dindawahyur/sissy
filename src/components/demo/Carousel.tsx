import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { satu, dua, a_satu } from "@/assets";

const images = [satu, dua, a_satu];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ scale: 1.2, opacity: index === 0 ? 1 : 0 }}
          animate={{
            scale: index === currentIndex ? 1 : 1.2,
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
