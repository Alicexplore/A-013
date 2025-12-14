const Lights = () => {
  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center rounded-br-lg bg-black md:border-[1px] border-black">
        <div className="absolute inset-[1px] bg-black rounded-sm">
          <div className="relative h-full w-full bg-black flex flex-col">
            <div className="h-[4px] w-full bg-black"></div>

            <div className="grid grid-rows-9 flex-1 gap-[1.5px] md:gap-[2px]">
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="relative bg-[#222] rounded-none md:rounded-full w-full h-full border-l-[4px] border-r-[4px] border-black"
                  ></div>
                ))}
            </div>

            <div className="h-[4px] w-full bg-black"></div>
          </div>
          <div className="absolute h-full w-full bg-[#222]/30 inset-0 rounded-[4px] md:rounded-md">
            <div className="absolute w-full h-full rounded-[4px] md:rounded-md shadow-[inset_2px_2px_1px_#777,inset_-2px_-2px_1px_#6b6b6b,_5px_5px_8px_#000] z-10"></div>
            <div className="absolute w-full h-full backdrop-blur-[2px] bg-[#D9d9d9]/30 overflow-hidden rounded-[4px] md:rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lights;
