let clickAudio: HTMLAudioElement | null = null;

export const playClickSound = () => {
  if (!clickAudio) {
    clickAudio = new Audio("/src/assets/sounds/minecraft_click.mp3");
    clickAudio.volume = 0.6;
  }

  clickAudio.currentTime = 0;
  clickAudio.play();
};
