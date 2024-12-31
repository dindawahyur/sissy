import { useEffect, useState } from "react";
import { hello_image, hello_video } from "@/assets";

const Hello = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    // Video berjalan selama 17 detik, lalu diganti dengan background foto
    const timer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, 18000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  return (
    <section className="w-screen h-screen relative">
      {isVideoPlaying ? (
        <video
          src={hello_video}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${hello_image})`,
          }}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center ">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
          The Wedding Of
        </h1>
      </div>
    </section>
  );
};

export default Hello;
