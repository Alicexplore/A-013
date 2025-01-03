import { easeInOut, motion } from "framer-motion";
import React from "react";

const NeonLineUp = () => {

  const renderLine = (rowIndex) => (
    <div className="grid grid-cols-6 gap-[6px] md:gap-[8px] w-full h-full justify-center place-items-center">
      {Array.from({ length: 6 }, (_, index) => (
        <motion.div
          key={index}
          className="rounded-full w-[4px] md:w-[6px] aspect-square bg-[#aba900]"
          animate={{
            backgroundColor: ["#000", "#fff", "#fff", "#000"],
          }}
          transition={{
            delay: 4 + rowIndex * -0.1,
            duration: 2,
            ease: easeInOut, 
            repeat: Infinity,
            repeatDelay: 5
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="grid grid-rows-12 absolute w-full h-full justify-center place-items-center">
      {Array.from({ length: 12 }, (_, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {renderLine(rowIndex)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NeonLineUp;