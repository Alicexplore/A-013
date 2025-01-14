import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { UseRetroSounds } from "../Hooks/UseRetroSounds";

const MenuButton = ({isPowerOn}) => {
    const [Pressed, setPressed] = useState(false);
    const { playMenuSound } = UseRetroSounds();
    
    const handleClick = () => {
    setPressed(true);
    if (isPowerOn) {
      playMenuSound();
    }
    setTimeout(() => setPressed(false), 150); 
    };
    
  return (
    <div className="relative col-span-2 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000] cursor-pointer button">
        <motion.div 
        onClick={handleClick}
        className="absolute inset-[1px] rounded-[4px] md:rounded-md bg-[#d9d9d9] flex items-center justify-center"
        animate={{
            boxShadow: Pressed
              ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
              : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #222",
          }}
        transition={{ duration: 0.1, ease: "easeInOut" }}>     
            <h1 className={`"font-Roboto tracking-[0.15em] text-[8px] md:text-[11px] uppercase font-medium transition duration-700
            ${ isPowerOn ? "text-[#222] opacity-100" : "text-transparent opacity-0 pointer-events-none"}`}>
              menu
            </h1>
        </motion.div>
    </div>
  )
}

MenuButton.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
};

export default MenuButton;