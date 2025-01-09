import { motion } from "framer-motion";
import { useState } from "react";
import { UseRetroSounds } from "../Hooks/UseRetroSounds";

const ButtonsDirections = () => {
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const { playKeyPressSound } = UseRetroSounds();

  const handleUpClick = () => {
    setUpPressed(true);
    playKeyPressSound();
    setTimeout(() => setUpPressed(false), 200); 
  };

  const handleDownClick = () => {
    setDownPressed(true);
    playKeyPressSound();
    setTimeout(() => setDownPressed(false), 200);
  };

  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-[#000] border-[0.5px] md:border-[1px] border-[#000]">
        <div className="absolute inset-[1px] bg-[#000] rounded-sm">
          <div className="grid grid-rows-3 h-full w-full gap-[1.5px] md:gap-[2px] bg-[#000]">
           
            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#222] z-2 flex items-center justify-center 
              text-lg md:text-2xl text-[#d4d4ce] cursor-pointer"
              onClick={handleUpClick}
              animate={{
                boxShadow: upPressed
                  ? "inset 2px 2px 5px #111, inset -2px -2px 5px #111"
                  : "inset 2px 2px 1px #3a3a3a, inset -2px -2px 1px #131313, 5px 5px 8px #000",
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <ion-icon name="caret-up-outline"></ion-icon>
            </motion.div>
           
            <div className="col-span-1 bg-[#222]">
              <div className="flex justify-between h-full w-full">
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`h-full ${
                        index === 0
                          ? "w-[6px] md:w-[10px] shadow-[inset_-2px_0px_1px_#3a3a3a]"
                          : index === 6
                          ? "w-[6px] md:w-[10px] shadow-[inset_2px_0px_1px_#131313]"
                          : "w-[8px] md:w-[12px] shadow-[inset_2px_0px_1px_#131313,inset_-2px_0px_1px_#3a3a3a]"
                      } bg-[#222]`}
                    ></div>
                  ))}
              </div>
            </div>
           
            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#222] z-2 flex items-center justify-center 
              text-lg md:text-2xl text-[#d4d4ce] cursor-pointer"
              onClick={handleDownClick}
              animate={{
                boxShadow: downPressed
                  ? "inset 2px 2px 5px #111, inset -2px -2px 5px #111"
                  : "inset 2px 2px 1px #3a3a3a, inset -2px -2px 1px #131313, 5px 5px 8px #000",
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <ion-icon name="caret-down-outline"></ion-icon>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsDirections;

