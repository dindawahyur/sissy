import { dua, bg_abu } from "@/assets";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHeart } from "react-icons/fa";

export function About() {
  return (
    <section
      id="about"
      className="py-12 font-primary"
      style={{
        backgroundImage: `url(${bg_abu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0 -24px",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-2 font-rouge text-primary">
        Kisah Kami
      </h2>
      <div className="flex justify-center mb-8">
        {/* You can add your decorative element here if needed */}
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={dua}
                alt="Lintang dan Rifqi"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div className="text-center font-tertiary">
          <VerticalTimeline lineColor="#3a4664">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3a4664", color: "#fff" }}
              icon={<FaHeart />}
              contentStyle={{
                padding: "0 5px",
                background: "#3a4664",
                color: "white",
              }}
              contentArrowStyle={{ borderRight: "7px solid #3a4664" }}
            >
              <h3 className="vertical-timeline-element-title font-rouge text-3xl text-white pt-2">
                2016
              </h3>
              <p style={{ fontWeight: "300" }}>
                Pertemuan tak terduga di kantin sekolah menjadi awal kisah cinta
                kita.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3a4664", color: "#fff" }}
              icon={<FaHeart />}
              contentStyle={{
                padding: "0 5px",
                background: "#3a4664",
                color: "white",
              }}
              contentArrowStyle={{ borderRight: "7px solid #3a4664" }}
            >
              <h3 className="vertical-timeline-element-title font-rouge text-3xl text-white pt-2">
                2020
              </h3>
              <p style={{ fontWeight: "300" }}>
                Menjadi bab terpisah dalam kisah cinta kami, namun akhirnya kita
                bertemu kembali.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3a4664", color: "#fff" }}
              icon={<FaHeart />}
              contentStyle={{
                padding: "0 5px",
                background: "#3a4664",
                color: "white",
              }}
              contentArrowStyle={{ borderRight: "7px solid #3a4664" }}
            >
              <h3 className="vertical-timeline-element-title font-rouge text-3xl text-white pt-2">
                2022
              </h3>
              <p style={{ fontWeight: "300" }}>
                Takdir mempertemukan kembali, dan kami memutuskan untuk
                bertunangan.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3a4664", color: "#fff" }}
              icon={<FaHeart />}
              contentStyle={{
                padding: "0 5px",
                background: "#3a4664",
                color: "white",
              }}
              contentArrowStyle={{ borderRight: "7px solid #3a4664" }}
            >
              <h3 className="vertical-timeline-element-title font-rouge text-3xl text-white pt-2">
                12 Februari 2025
              </h3>
              <p style={{ fontWeight: "300" }}>
                Kami akan memulai babak baru kehidupan bersama.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
