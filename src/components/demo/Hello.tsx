import { useEffect, useState } from "react";
import { hello_image, hello_video } from "@/assets";
import { Loading } from "@/components/demo/Loading";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
          <motion.div
            className="absolute inset-0 flex items-center justify-center flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 className="text-white" variants={childVariants}>
              Pernikahan
            </motion.h3>
            <motion.h1
              className="text-6xl font-bold text-center font-rouge text-white my-10"
              variants={childVariants}
            >
              Lintang <br />&<br /> Rifqi
            </motion.h1>
            <motion.h3 className="text-white" variants={childVariants}>
              12 Februari 2025
            </motion.h3>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hello;
