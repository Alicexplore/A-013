import React from "react";

const EmptySpaces = () => {
    const getLinesCount = () => {
      if (window.innerWidth >= 768) return 64;  
      return 50;                               
    };
  
    const [linesCount, setLinesCount] = React.useState(getLinesCount);
  
    React.useEffect(() => {
      const handleResize = () => {
        setLinesCount(getLinesCount());
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div className="absolute inset-0 gap-[5px] flex flex-col">
        {Array.from({ length: linesCount }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[1px] bg-[#c9c550]/5"
          ></div>
        ))}
      </div>
    );
  };
  
  export default EmptySpaces;
  