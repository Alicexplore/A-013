import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PowerButton = ({ handlePowerPress, isPowerOn, isInitialized }) => {
  const [Pressed, setPressed] = useState(false);
  const [powerAudio, setPowerAudio] = useState(null);

  useEffect(() => {
    setPowerAudio(new Audio('/sounds/Power.mp3'));
  }, []);

  const playSound = (sound) => {
    sound.currentTime = 0; 
    sound.play();
  };

  const handleClick = () => {
    if (!isInitialized) return;

    playSound(powerAudio); 

    setPressed(true);
    setTimeout(() => setPressed(false), 150);
    handlePowerPress();
  };

  return (
    <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000]">
      <div
        className="absolute inset-[1px] rounded-sm border-[#000]"
        style={{
          background:
            "conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)",
        }}
      >
        <div className="absolute inset-[7px] md:inset-[10px] rounded-sm md:border-[0.5px] border-[#000] bg-[#000]">
          <div
            className="absolute inset-[1px] rounded-[4px] md:rounded-[5px] flex items-center justify-center cursor-pointer"
            onClick={handleClick}
            style={{
              background:
                "conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)",
              boxShadow: Pressed
                ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                : isPowerOn
                ? "none"
                : "inset 2px 2px 2px #fff, inset -1px -1px 2px #808080, 5px 5px 9px #111",
              transition: "box-shadow 0.1s ease-in-out", 
            }}
          />
        </div>
      </div>
    </div>
  );
};

PowerButton.propTypes = {
  handlePowerPress: PropTypes.func.isRequired,
  isPowerOn: PropTypes.bool.isRequired,
  isInitialized: PropTypes.bool.isRequired, 
};

export default PowerButton;
