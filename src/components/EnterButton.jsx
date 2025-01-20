import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const EnterButton = ({ isPowerOn, isInitialized }) => {
  const [Pressed, setPressed] = useState(false);

  const [enterAudio, setEnterAudio] = useState(null);

  useEffect(() => {
    setEnterAudio(new Audio('/sounds/EnterButton.mp3'));
  }, []);

  const playSound = (sound) => {
    sound.currentTime = 0; 
    sound.play();
    enterAudio.volume = 0.3;
  };

  const handleClick = () => {
    if (!isInitialized) return;

    playSound(enterAudio); 

    setPressed(true);
    setTimeout(() => setPressed(false), 150);
  };

  return (
    <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000]">
      <motion.div
        onClick={handleClick}
        className="absolute inset-[1px] rounded-[4px] md:rounded-md bg-[#d9d9d9] flex items-center justify-center cursor-pointer"
        style={{
          boxShadow: Pressed
            ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
            : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #222",
          transition: "box-shadow 0.1s ease-in-out", 
        }}
      >
        <h1
          className={`font-Roboto font-medium tracking-widest text-[8px] md:text-[11px]
          pointer-events-none uppercase transition duration-700
          ${
            isPowerOn
              ? "text-[#222] opacity-100"
              : "text-[#222] opacity-100 pointer-events-none"
          }`}
        >
          enter
        </h1>
      </motion.div>
    </div>
  );
};

EnterButton.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  isInitialized: PropTypes.bool.isRequired,
};

export default EnterButton;
