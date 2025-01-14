import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { UseRetroSounds } from "../Hooks/UseRetroSounds";

const ButtonsDirections = ({isPowerOn}) => {
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const { playKeyPressSound } = UseRetroSounds();

  const handleUpClick = () => {
    setUpPressed(true);
    if (isPowerOn) {
      playKeyPressSound();
    }
    setTimeout(() => setUpPressed(false), 200); 
  };

  const handleDownClick = () => {
    setDownPressed(true);
    if (isPowerOn) {
      playKeyPressSound();
    }
    setTimeout(() => setDownPressed(false), 200);
  };

  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-[#000] border-[0.5px] md:border-[1px] border-[#000]">
        <div className="absolute inset-[1px] bg-[#000] rounded-sm">
          <div className="grid grid-rows-3 h-full w-full gap-[1.5px] md:gap-[2px] bg-[#000]">
           
            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#d9d9d9] z-2 flex items-center justify-center cursor-pointer"
              onClick={handleUpClick}
              animate={{
                boxShadow: upPressed
                  ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                  : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #000",
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <span className={`text-lg md:text-2xl flex items-center justify-center cursor-pointer transition duration-700
            ${ isPowerOn ? "text-[#222] opacity-100" : "text-transparent opacity-0 pointer-events-none"}`}>
                <ion-icon name="caret-up-outline"></ion-icon>
              </span>
            </motion.div>
           
            <div className="col-span-1 bg-[#d9d9d9]">
              <div className="flex justify-between h-full w-full">
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`h-full ${
                        index === 0
                          ? "w-[6px] md:w-[10px] shadow-[inset_-2px_0px_1px_#fff]"
                          : index === 6
                          ? "w-[6px] md:w-[10px] shadow-[inset_2px_0px_1px_#939393]"
                          : "w-[8px] md:w-[12px] shadow-[inset_2px_0px_1px_#939393,inset_-2px_0px_1px_#fff]"
                      } bg-[#d9d9d9]`}
                    ></div>
                  ))}
              </div>
            </div>
           
            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#d9d9d9] z-2 flex items-center justify-center cursor-pointer"
              onClick={handleDownClick}
              animate={{
                boxShadow: downPressed
                  ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                  : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #000",
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}>
                <span className={`text-lg md:text-2xl flex items-center justify-center cursor-pointer transition duration-700
              ${ isPowerOn ? "text-[#222] opacity-100" : "text-transparent opacity-0 pointer-events-none"}`}>
                <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

ButtonsDirections.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
};

export default ButtonsDirections;

