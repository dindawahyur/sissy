import { useState, useEffect } from "react";
import { first } from "@/assets";
import { motion } from "framer-motion";

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

interface UndanganProps {
  setOpenUndangan: () => void;
}

const Undangan = ({ setOpenUndangan }: UndanganProps) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to") || "Tamu";
    setName(decodeURIComponent(guestName));
  }, []);

  return (
    <section className="w-screen h-screen relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${first})`,
        }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-bold text-center font-rouge text-white"
          variants={childVariants}
        >
          The Wedding of
        </motion.h1>
        <motion.h1
          className="text-5xl font-bold text-center font-rouge text-white mb-10 pb-5 mt-3"
          variants={childVariants}
        >
          Lintang & Rifqi
        </motion.h1>
        <motion.h3 className="text-white text-center" variants={childVariants}>
          Undangan spesial untuk
          <br />
          Bapak/Ibu/Saudara/i:
        </motion.h3>
        <motion.h3 className="text-white py-5" variants={childVariants}>
          {name}
        </motion.h3>

        <motion.button
          className="bg-primary text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary-dark"
          variants={childVariants}
          onClick={setOpenUndangan}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Undangan;
