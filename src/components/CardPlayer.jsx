// import PlayCard from "./PlayCard";

const CardPlayer = () => {
  return (
    <div className="relative col-span-2 row-span-2 rounded-lg md:rounded-xl bg-[#D9D9D9]">
      <div
        className="w-full h-full rounded-lg md:rounded-xl relative flex items-center justify-center bg-[#D9D9D9]"
        style={{
          boxShadow: "inset 6px 6px 6px #808080, inset -8px -8px 8px #ffffff90",
        }}
      >
        {/* PlayCard placed below the blur layer; apply direct CSS blur to ensure it's blurred */}
        {/* <div className="relative z-10" style={{ filter: "blur(7px)" }}>
          <PlayCard />
        </div> */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] rounded-lg md:rounded-xl bg-[#D9d9d9]/10 pointer-events-none opacity-70 z-[9999]"
          // style={{
          //   backdropFilter: "blur(15px)",
          //   WebkitBackdropFilter: "blur(15px)",
          // }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] rounded-lg md:rounded-xl z-60 pointer-events-none"
          style={{
            boxShadow: "inset 2px 2px 2px #ffffff, inset -2px -2px 2px #888",
          }}
        />
      </div>

      <div className="absolute left-0 top-0 w-full h-full z-[10001] pointer-events-none flex items-center justify-evenly px-[5px]">
        <div
          className="h-[75%] w-[6px] md:h-[75%] md:w-[8px] bg-[#D9d9d9]/10 rounded-full"
          style={{
            boxShadow: "inset 1px 1px 2px #ffffff, inset -1px -1px 2px #999",
          }}
        />
        <div
          className="h-[75%] w-[6px] md:h-[75%] md:w-[8px] bg-[#D9d9d9]/10 rounded-full"
          style={{
            boxShadow: "inset 1px 1px 2px #ffffff, inset -1px -1px 2px #999",
          }}
        />
        <div
          className="h-[75%] w-[6px] md:h-[75%] md:w-[8px] bg-[#D9d9d9]/10 rounded-full"
          style={{
            boxShadow: "inset 1px 1px 2px #ffffff, inset -1px -1px 2px #999",
          }}
        />
        <div
          className="h-[75%] w-[6px] md:h-[75%] md:w-[8px] bg-[#D9d9d9]/10 rounded-full"
          style={{
            boxShadow: "inset 1px 1px 2px #ffffff, inset -1px -1px 2px #999",
          }}
        />
        <div
          className="h-[75%] w-[6px] md:h-[75%] md:w-[8px] bg-[#D9d9d9]/10 rounded-full"
          style={{
            boxShadow: "inset 1px 1px 2px #ffffff, inset -1px -1px 2px #999",
          }}
        />
        <div
          className="h-[75%] w-[6px] md:h-[75%] md:w-[8px] bg-[#D9d9d9]/10 rounded-full"
          style={{
            boxShadow: "inset 1px 1px 2px #ffffff, inset -1px -1px 2px #999",
          }}
        />
      </div>
    </div>
  );
};

export default CardPlayer;
//  bg-[#D9d9d9]/30
