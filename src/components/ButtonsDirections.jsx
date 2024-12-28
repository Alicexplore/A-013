import { motion } from "framer-motion";
import { useState } from "react";

const ButtonsDirections = () => {
  const [extraPressed, setExtraPressed] = useState(false);

  const handleClick = () => {
    setExtraPressed(true);
    setTimeout(() => setExtraPressed(false), 200);
  };

  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-[#000] border-[0.5px] md:border-[1px] border-[#000]">
        <div className="absolute inset-[1px] bg-[#000] rounded-sm">
          <div className="grid grid-rows-3 h-full w-full gap-[1.5px] md:gap-[2px] bg-[#000]">
            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#d4d4cf] z-2 flex items-center justify-center 
              text-lg md:text-2xl text-[#4a4840] cursor-pointer"
              onClick={handleClick}
              animate={{
                boxShadow: extraPressed
                  ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                  : "inset 2px 2px 1px #fff, inset -2px -2px 1px #979797, 5px 5px 8px #222",
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <ion-icon name="caret-up-outline"></ion-icon>
            </motion.div>

            <div className="col-span-1 bg-[#d4d4cf]">
                <div className="flex justify-between h-full w-full">
                  {Array(7).fill(null).map((_, index) => (
                    <div
                      key={index}
                      className={`h-full ${
                        index === 0
                          ? "w-[6px] md:w-[10px] shadow-[inset_-2px_0px_1px_#eeeee8]"
                          : index === 6
                          ? "w-[6px] md:w-[10px] shadow-[inset_2px_0px_1px_#bcbcb7]"
                          : "w-[8px] md:w-[12px] shadow-[inset_2px_0px_1px_#bcbcb7,inset_-2px_0px_1px_#eeeee8]"
                     } bg-[#d4d4cf]`}
                    ></div>
                  ))}
                </div>
            </div>

            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#d4d4cf] z-2 flex items-center justify-center 
              text-lg md:text-2xl text-[#4a4840] cursor-pointer"
              onClick={handleClick}
              animate={{
                boxShadow: extraPressed
                  ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                  : "inset 2px 2px 1px #fff, inset -2px -2px 1px #979797, 5px 5px 8px #222",
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
