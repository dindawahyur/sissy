import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPinIcon,
  ClockIcon,
  CalendarIcon,
  GlassesIcon,
  MusicIcon,
} from "lucide-react";
import { LocationMap } from "@/components/demo/LocationMap"; // Import komponen peta
import { bg_abu } from "@/assets";

export function EventDetails() {
  const events = [
    {
      id: "ceremony",
      title: "Akad Nikah",
      date: "Rabu, 12 Februari 2025",
      time: "08.00 WIB",
      venue: "Kediaman mempelai wanita",
      address: "Jawa Tengah, Indonesia🆔",
      details: "Rt 02/Rw 01, desa Adiwarno, Kecamatan Buayan, Kebumen",
      icon: <GlassesIcon className="w-6 h-6 text-primary" />,
    },
    {
      id: "reception",
      title: "Resepsi",
      date: "Rabu, 12 Februari 2025",
      time: "09.00 WIB - selesai",
      venue: "Kediaman mempelai wanita",
      address: "Jawa Tengah, Indonesia🆔",
      details: "Rt 02/Rw 01, desa Adiwarno, Kecamatan Buayan, Kebumen",
      icon: <MusicIcon className="w-6 h-6 text-primary" />,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.0532197694204!2d109.477274!3d-7.730955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDMnNTEuNCJTIDEwOcKwMjgnMzguMiJF!5e0!3m2!1sen!2sid!4v1700000000000",
    },
  ];

  return (
    <section
      id="event-details"
      className="py-12 px-10 max-w-7xl mx-auto  "
      style={{
        backgroundImage: `url(${bg_abu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-primary font-rouge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Event Details
      </motion.h2>

      <p className="text-sm text-muted-foreground mb-10 text-center">
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami
        mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="cursor-pointer"
          >
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="bg-primary">
                <CardTitle className="flex items-center gap-2 text-2xl text-white ">
                  {/* {event.icon} */}
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent
                className="pt-4"
                // style={{
                //   backgroundImage: `url(${bg_abu})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                // }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <p>{event.date}</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <ClockIcon className="w-5 h-5 text-muted-foreground" />
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                  <p>{event.venue}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {event.address}
                </p>
                <p className="mt-2 italic">{event.details}</p>
                {event.mapSrc && (
                  <div className="mt-4">
                    <LocationMap mapSrc={event.mapSrc} />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
