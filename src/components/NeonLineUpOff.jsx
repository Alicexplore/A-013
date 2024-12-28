import React from "react";

const NeonLineUpOff = () => {
  const renderLine = () => (
    <div className="grid grid-cols-6 gap-[6px] sm:gap-[8px] w-full h-full justify-center place-items-center">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="rounded-full w-[4px] sm:w-[6px] aspect-square bg-[#000]" 
        />
      ))}
    </div>
  );

  return (
    <div className="grid grid-rows-212 absolute w-full h-full justify-center place-items-center">
      {Array.from({ length: 12 }).map((_, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {renderLine()}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NeonLineUpOff;
