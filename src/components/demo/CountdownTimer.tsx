import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { satu, dua, a_satu, bg_abu } from "@/assets";

const images = [satu, dua, a_satu];

interface CountdownTimerProps {
  readonly targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);
  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <Card key={interval} className="bg-primary text-primary-foreground">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-2"
        >
          {value}
        </motion.span>
        <span className="text-sm uppercase">{interval}</span>
      </CardContent>
    </Card>
  ));

  return (
    <section
      className="py-10 px-6"
      style={{
        backgroundImage: `url(${bg_abu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
      <h2 className="text-4xl font-bold text-center my-5 font-rouge text-primary">
        Menuju Hari Bahagia
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {timerComponents}
      </div>

      <div className="grid mx-6 pt-12">
        <p className="text-center">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan
          merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.”
          <br />
          <br />
          (QR Ar-Rum : 21)
        </p>
      </div>
    </section>
  );
}
