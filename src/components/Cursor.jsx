import { useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Cursor = ({ isCursorDown, setIsCursorDown, isPowerOn }) => {
  const toggleCursor = () => {
    setIsCursorDown((prev) => !prev);
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

  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-[#000] border border-[#000]">
        <div className="absolute inset-[1px] rounded-md bg-[#d9d9d9] flex items-center justify-center">
          <div className="absolute bg-[#222] h-[80%] w-[3px]" />

          <motion.div
            onClick={isPowerOn ? toggleCursor : null}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            initial={{ y: 0 }}
            animate={{ y: isCursorDown ? 130 : 0 }}
            className="absolute top-[10px] w-[80%] h-[30px] bg-[#D9D9D9] rounded-md flex items-center justify-center cursor-pointer"
            style={{
              boxShadow:
                "inset 2px 2px 3px #fff, inset -1.5px -1.5px 3px #939393, 3px 3px 7px #222",
            }}
          >
            <div className="absolute border border-white blur-s w-[95%] h-[90%] rounded-md" />

            <div className="absolute w-[80%] h-[80%] grid grid-cols-7 grid-rows-3 gap-[1px] p-[3px] 
              place-items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {Array.from({ length: 21 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[2px] h-[2px] md:h-[4px] md:w-[4px] bg-[#D9D9D9] rounded-full"
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

