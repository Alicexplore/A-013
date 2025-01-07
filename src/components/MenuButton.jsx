import { motion } from "framer-motion";
import { useState } from "react";

const MenuButton = () => {
    const [Pressed, setPressed] = useState(false);
    
    const handleClick = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 200); 
    };
    
  return (
    <div className="relative col-span-2 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000] cursor-pointer">
        <motion.div 
        onClick={handleClick}
        className="absolute inset-[1px] rounded-[4px] md:rounded-md bg-[#222] flex items-center justify-center"
        animate={{
            boxShadow: Pressed
              ? "inset 2px 2px 5px #111, inset -2px -2px 5px #111"
              : "inset 2px 2px 1px #3a3a3a, inset -2px -2px 1px #131313, 5px 5px 8px #000",
          }}
        transition={{ duration: 0.1, ease: "easeInOut" }}>
            <h1 className="text-[#d4d4ce] font-Roboto tracking-[0.15em] text-[8px] md:text-[11px] uppercase font-medium">
                menu
            </h1>
        </motion.div>
    </div>
  )
}

export default MenuButton