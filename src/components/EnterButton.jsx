import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { UseRetroSounds } from "../Hooks/UseRetroSounds";

const EnterButton = ({isPowerOn}) => {
    const [Pressed, setPressed] = useState(false);
    const { playEnterSound } = UseRetroSounds();
    
    const handleClick = () => {
    setPressed(true);
    if (isPowerOn) {
      playEnterSound();
    }
    setTimeout(() => setPressed(false), 200); 
    };

  return (
    <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000]">
        <motion.div
        onClick={handleClick}
        className="absolute inset-[1px] rounded-[4px] md:rounded-md bg-[#d9d9d9] flex items-center justify-center cursor-pointer"
        animate={{
            boxShadow: Pressed
              ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
              : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #222",
          }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        >
            <h1 className={`font-Roboto tracking-widest text-[8px] md:text-[11px]
            pointer-events-none uppercase transition duration-700
            ${ isPowerOn ? "text-[#222] opacity-100" : "text-transparent opacity-0 pointer-events-none"}`}>
                enter
            </h1>           
        </motion.div>
    </div>
  )
}

EnterButton.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
};

export default EnterButton