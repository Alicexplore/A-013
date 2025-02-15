import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Cursor = ({ isCursorDown, setIsCursorDown, isPowerOn }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCursor = () => {
    setIsCursorDown((prev) => !prev);

    const cursorSound = new Audio('/sounds/Cursor.mp3'); 
    cursorSound.volume = 1;
    cursorSound.play();
  };

  useEffect(() => {
    if (!isPowerOn) {
      setIsCursorDown(false);
    }
  },);
  
  useEffect(() => {
    const powerState = localStorage.getItem("isPowerOn");
    if (powerState === "false") {
      setIsCursorDown(false);
    }
  },);

  let cursorYValue = 0;
  if (isCursorDown) {
    if (windowWidth < 640) {
      cursorYValue = 90; 
    } else if (windowWidth < 768) { 
      cursorYValue = 100;
    } else if (windowWidth >= 768) { 
      cursorYValue = 130;
    }
  }

  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-[#000] border-[0.5px] md:border-[1px] border-[#000]">
        <div className="absolute inset-[1px] rounded-[4px] md:rounded-md bg-[#d9d9d9] flex items-center justify-center">
          <div className="absolute bg-[#222] h-[80%] w-[2.5px] md:w-[3px] rounded-full" />

          <motion.div
            onClick={isPowerOn ? toggleCursor : null}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            initial={{ y: 0 }}
            animate={{ y: isCursorDown ? cursorYValue : 0 }}
            className="absolute top-[6px] md:top-[10px] w-[80%] h-[23px] md:h-[30px] bg-[#D9D9D9] rounded-[4px] md:rounded-md flex items-center justify-center cursor-pointer"
            style={{
              boxShadow:
                "inset 2px 2px 3px #fff, inset -1.5px -1.5px 3px #939393, 3px 3px 7px #222",
            }}
          >
            <div className="absolute border border-white blur-s w-[95%] h-[90%] rounded-[4px] md:rounded-md" />

            <div className="absolute w-[80%] h-[80%] grid grid-cols-7 grid-rows-3 gap-[1px] p-[1.7px] md:p-[3px] 
              place-items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {Array.from({ length: 21 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[3px] h-[3px] md:h-[4px] md:w-[4px] bg-[#D9D9D9] rounded-full"
                  style={{
                    boxShadow:
                      "inset 1px 1px 1px #fff, inset -1px -1px 1px #939393, 0px 1px 2px #777777",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Cursor.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  isCursorDown: PropTypes.bool.isRequired,
  setIsCursorDown: PropTypes.func.isRequired,
};

export default Cursor;
