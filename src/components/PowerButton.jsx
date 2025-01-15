import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { UseRetroSounds } from "../Hooks/UseRetroSounds";

const PowerButton = ({ handlePowerPress, isPowerOn }) => {
  const [Pressed, setPressed] = useState(false);
  const { playPowerSound, playShutDownSound } = UseRetroSounds();

  const handleClick = () => {
    if (!isPowerOn) {
      playPowerSound(); 
    } else {
      playShutDownSound(); 
    }
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
          <motion.div
            className="absolute inset-[1px] rounded-[4px] md:rounded-[5px] flex items-center justify-center cursor-pointer"
            onClick={handleClick}
            style={{
              background:
                "conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)",
            }}
            animate={{
              boxShadow: Pressed
                ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                : isPowerOn
                ? "none" 
                : "inset 2px 2px 2px #fff, inset -1px -1px 2px #808080, 5px 5px 9px #111", 
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

PowerButton.propTypes = {
  handlePowerPress: PropTypes.func.isRequired,
  isPowerOn: PropTypes.bool.isRequired, 
};

export default PowerButton;
