import { useState } from "react";
import { Howl } from "howler";

export const UseRetroSounds = () => {
  const [powerSound] = useState(new Howl({
    src: ['./sounds/Open.mp3'],
    volume: 0.8,
  }));

  const [shutDownSound] = useState(new Howl({
    src: ['./sounds/Off.mp3'],
    volume: 0.2,
  }));
  
  const [keyPressSound] = useState(new Howl({
    src: ['/sounds/Key.mp3'],
    volume: 0.2,
  }));
  
  const [menuSound] = useState(new Howl({
    src: ['/sounds/highclick.mp3'],
    volume: 0.2,
  }));

  const [enterSound] = useState(new Howl({
    src: ['/sounds/Enter.mp3'],
    volume: 0.4,
  }));

  const playPowerSound = () => powerSound.play();
  const playShutDownSound = () => shutDownSound.play();
  const playKeyPressSound = () => keyPressSound.play();
  const playMenuSound = () => menuSound.play();
  const playEnterSound = () => enterSound.play();

  return { playPowerSound, playShutDownSound, playKeyPressSound, playMenuSound, playEnterSound };
};
