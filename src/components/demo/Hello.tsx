import { useEffect, useState } from "react";
import { hello_image, hello_video } from "@/assets";
import { Loading } from "@/components/demo/Loading";

const Hello = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, 18000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <section className="w-screen h-screen relative">
      {isVideoPlaying ? (
        <>
          {!isVideoLoaded && <Loading />}
          <video
            src={hello_video}
            autoPlay
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${hello_image})`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col ">
            <h3 className="text-white">Pernikahan</h3>
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center font-rouge">
              Lintang & Rifqi
            </h1>
            <h3 className="text-white">12 Februari 2025</h3>
          </div>
        </>
      )}
    </section>
  );
};

export default Hello;
