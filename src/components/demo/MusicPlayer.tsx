import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import audio from "../../assets/audio/audio1.mp3";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Default: tidak autoplay
  const [isMuted, setIsMuted] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false); // Flag untuk interaksi pengguna
  const audioRef = useRef<HTMLAudioElement>(null);

  // Show song info for 5 seconds
  useEffect(() => {
    const infoTimeout = setTimeout(() => setShowInfo(false), 10000);
    return () => clearTimeout(infoTimeout);
  }, []);

  // Handle play/pause effect
  useEffect(() => {
    if (audioRef.current && userInteracted) {
      // Hanya putar setelah interaksi pengguna
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Playback failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, userInteracted]);

  // Handle mute/unmute effect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleFirstInteraction = () => {
    setUserInteracted(true); // Tandai interaksi pertama pengguna
    setIsPlaying(true); // Mulai putar musik
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="fixed bottom-2 right-2 p-3 rounded-lg flex items-center space-x-4">
      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Informasi lagu */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 0, x: -50 }}
          transition={{ duration: 3.5, delay: 2 }}
          className="text-left bg-white border rounded-md px-4"
        >
          <p className="text-sm font-bold"> Lagu Pernikahan Kita </p>
          <p className="text-xs text-gray-600">Tiara Andini, Arsy Widianto</p>
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex space-x-2">
        {/* Play Button for first interaction */}
        {!userInteracted && (
          <Button
            onClick={handleFirstInteraction}
            variant="outline"
            size="icon"
          >
            <Play className="h-4 w-4" />
          </Button>
        )}

        {/* Play/Pause Button */}
        {userInteracted && (
          <Button onClick={togglePlay} variant="outline" size="icon">
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        )}

        {/* Mute/Unmute Button */}
        <Button onClick={toggleMute} variant="outline" size="icon">
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
