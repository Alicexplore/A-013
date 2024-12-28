import React from "react";

const EmptySpacesPreloader = () => {
  const getLinesCount = () => {
    const lineHeight = 4;
    const gap = 5;
    const totalHeight = lineHeight + gap;

    return Math.ceil(window.innerHeight / totalHeight);
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
    <div className="absolute inset-0 h-full w-full gap-[9px] flex flex-col z-20 overflow-hidden">
      {Array.from({ length: linesCount }).map((_, index) => (
        <div
          key={index}
          className="w-full h-[1px] bg-white/5"
        ></div>
      ))}
    </div>
  );
};

export default EmptySpacesPreloader;
