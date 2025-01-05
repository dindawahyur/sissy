import { bismillah, lintang, rifqi, blue_vintage, bg_bunga } from "@/assets";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export function Tittle() {
  return (
    <section id="title" className="my-12 font-primary min-h-screen">
      <div
        className="flex justify-center mb-8 flex-col"
        style={{
          backgroundImage: `url(${blue_vintage})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          margin: "0 -24px",
        }}
      >
        <section className="container mx-auto py-5 px-5 mx-5" id="skills">
          <div className="flex flex-col text-center items-center">
            <motion.img
              src={bismillah}
              alt="Bismillah"
              className="w-2/5"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.p
              className="mt-5 text-md"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Assalamu'alaikum
              <br />
              Warahmatullaahi Wabarakaatuh
            </motion.p>
            <motion.p
              className="mt-3 mb-5 text-xs"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Maha Suci Allah yang telah menciptakan makhluk-Nya
              berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
              pernikahan kami.
            </motion.p>

            <div className="relative w-64 h-64">
              <div className="w-full h-full rounded-full overflow-hidden">
                <motion.img
                  src={lintang}
                  alt="Lintang"
                  className="w-full h-full object-cover"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </div>
            </div>
            <motion.h3
              className="font-serif text-navy font-bold text-3xl font-rouge text-primary mt-3"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lintang
            </motion.h3>
            <motion.h5
              className="text-lg mt-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lintang Pandu Kusuma, S.Pd
            </motion.h5>
            <motion.p
              className="text-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Putri bapak Wawan Rajiko & Ibu Endang Purwaningsih
            </motion.p>

            <motion.h1
              className="font-serif text-4xl my-5 text-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              &
            </motion.h1>

            <div className="relative w-64 h-64">
              <div className="w-full h-full rounded-full overflow-hidden">
                <motion.img
                  src={rifqi}
                  alt="Rifqi"
                  className="w-full h-full object-cover"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </div>
            </div>
            <motion.h3
              className="font-serif text-navy font-bold text-3xl font-rouge text-primary mt-3"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Rifqi
            </motion.h3>
            <motion.h5
              className="text-lg mt-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Rifqi Ardianzah
            </motion.h5>
            <motion.p
              className="text-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Putra Bapak Kasirin Wahyu S & Ibu Catur Feryani
            </motion.p>
          </div>
        </section>
        <div
          style={{
            margin: "0 -24px",
            paddingBottom: "35%",
            backgroundImage: `url(${bg_bunga})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            width: `calc(100vw + 30px)`,
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}
