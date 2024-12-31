import { useState, useEffect } from "react";
// import { Navbar } from "@/components/demo/Navbar";
import { Carousel } from "@/components/demo/Carousel";
import { EventDetails } from "@/components/demo/EventDetails";
import { CommentSection } from "@/components/demo/CommentSection";
import { DonationSection } from "@/components/demo/DonationSection";
import { BankAccounts } from "@/components/demo/BankAccounts";
import { MusicPlayer } from "@/components/demo/MusicPlayer";
import { CountdownTimer } from "@/components/demo/CountdownTimer";
import { About } from "@/components/demo/About";
import { Footer } from "@/components/demo/Footer";
import { PhotoGallery } from "./components/demo/PhotoGallery";
import "./App.css";
// import { Loading } from "./components/demo/Loading";
import { Tittle } from "./components/demo/Tittle";
import Hello from "./components/demo/Hello";
export default function App() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setIsLoaded(true), 2000);
  // }, []);

  // if (!isLoaded) {
  //   return <Loading />;
  // }

  return (
    <div className=" min-h-screen text-foreground">
      {/* Content Layer */}
      {/* <header>
        <Navbar />
      </header> */}

      <Hello />
      <main className="z-50 container mx-auto px-4 space-y-12 mt-10">
        <Carousel />
        <CountdownTimer targetDate={new Date("2025-02-12T00:00:00")} />
        <Tittle />
        <About />
        <EventDetails />
        <CommentSection />
        <PhotoGallery />
        <DonationSection />
        <BankAccounts />
        {/* <VideoSection /> */}
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}
