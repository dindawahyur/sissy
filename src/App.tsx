//import { useState, useEffect } from "react";
// import { Navbar } from "@/components/demo/Navbar";
import { EventDetails } from "@/components/demo/EventDetails";
import { CommentSection } from "@/components/demo/CommentSection";

import { BankAccounts } from "@/components/demo/BankAccounts";
import { MusicPlayer } from "@/components/demo/MusicPlayer";
import { CountdownTimer } from "@/components/demo/CountdownTimer";
import { About } from "@/components/demo/About";
import { Footer } from "@/components/demo/Footer";
import { PhotoGallery } from "./components/demo/PhotoGallery";
import "./App.css";
import { Tittle } from "./components/demo/Tittle";
import Hello from "./components/demo/Hello";
import Undangan from "./components/demo/Undangan";
import { useState } from "react";

export default function App() {
  const [isOpenUndangan, setIsOpenUndangan] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenUndangan = () => {
    setIsOpenUndangan(true);
    setIsPlaying(true); // This should make the Pause icon appear initially
  };

  return (
    <div className=" min-h-screen text-foreground">
      {isOpenUndangan ? (
        <>
          <Hello />
          <CountdownTimer targetDate={new Date("2025-02-12T00:00:00")} />
          <Tittle />
          <EventDetails />
          <About />
          <PhotoGallery />
          <CommentSection />
          <BankAccounts />

          <Footer />
          <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </>
      ) : (
        <Undangan setOpenUndangan={handleOpenUndangan} />
      )}
    </div>
  );
}
