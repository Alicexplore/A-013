import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { UseRetroSounds } from "../Hooks/UseRetroSounds";

const SelectButton = ({isPowerOn}) => {
    const [Pressed, setPressed] = useState(false);
    const { playEnterSound } = UseRetroSounds();
    
    const handleClick = () => {
    setPressed(true);
    playEnterSound();
    setTimeout(() => setPressed(false), 200); 
    };

  return (
    <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000]">
        <motion.div
        onClick={handleClick}
        className="absolute inset-[1px] rounded-[4px] md:rounded-md bg-[#222] flex items-center justify-center
        shadow-[inset_2px_2px_1px_#3a3a3a,inset_-2px_-2px_1px_#000,5px_5px_8px_#000] cursor-pointer"
        animate={{
            boxShadow: Pressed
              ? "inset 2px 2px 5px #111, inset -2px -2px 5px #111"
              : "inset 2px 2px 1px #3a3a3a, inset -2px -2px 1px #131313, 5px 5px 8px #000",
          }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          {isPowerOn? (
            <h1 className="text-[#d9d9d9] font-Roboto tracking-widest text-[8px] md:text-[11px] font-medium 
            pointer-events-none uppercase">
                enter
            </h1>
          ):(
            <h1 className="text-[#777] font-Roboto tracking-widest text-[8px] md:text-[11px] font-medium 
            pointer-events-none uppercase">
                enter
            </h1>
          )}
            
        </motion.div>
    </div>
  )
}

SelectButton.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
};

export default SelectButton