import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/src/assets/sounds/background.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    audioRef.current = audio;

    const startMusic = () => {
      audio.play();
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      audio.pause();
      document.removeEventListener("click", startMusic);
    };
  }, []);

  return null;
};

export default BackgroundMusic;
