import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updatePlayingState = () => {
      setIsPlaying(!audio.paused);
    };

    // Attempt to autoplay
    audio.play().catch(() => {
      // Autoplay was prevented by browser, user can click play button
    });

    audio.addEventListener("play", updatePlayingState);
    audio.addEventListener("pause", updatePlayingState);

    return () => {
      audio.removeEventListener("play", updatePlayingState);
      audio.removeEventListener("pause", updatePlayingState);
    };
  }, [audioRef]);

  const handleToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <button
      onClick={handleToggle}
      className='fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-blush-600 hover:bg-blush-700 text-white shadow-lg transition duration-300 hover:scale-110'
      aria-label={isPlaying ? "Pause music" : "Play music"}
      title={isPlaying ? "Pause music" : "Play music"}>
      {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
    </button>
  );
}
