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
      mapSrc: "https://maps.app.goo.gl/TwJGgQsdJ5rKvufG9",
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
      mapSrc: "https://maps.app.goo.gl/vSm6qZ6uEpxTBmSU8",
    },
  ];

  return (
    <section
      id="event-details"
      className="py-12 px-4 max-w-7xl mx-auto  "
      style={{ backgroundImage: "url(../../../src/assets/img/bgweding.jpeg')" }}
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

                <div className="mt-4">
                  <LocationMap mapSrc={event.mapSrc} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
