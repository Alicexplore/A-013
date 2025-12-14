import { motion } from "framer-motion";

const LightsPower = () => {
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
                  <motion.div
                    key={index}
                    className="relative bg-[#938e00] rounded-none md:rounded-[1px] w-full h-full border-l-[4px] border-r-[4px] border-black"
                    animate={{
                      backgroundColor: ["#222", "#fff", "#fff", "#222"],
                    }}
                    transition={{
                      delay: 4 + index * -0.1,
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 6,
                    }}
                  />
                ))}
            </div>

            <div className="h-[4px] w-full bg-black"></div>
          </div>

          <div className="absolute h-full w-full bg-[#d9d9d9]/30 inset-0 rounded-[4px] md:rounded-md">
            <div className="absolute w-full h-full rounded-[4px] md:rounded-md shadow-[inset_2px_2px_1px_#afafaf,inset_-2px_-2px_1px_#979797,_5px_5px_8px_#000] z-10"></div>
            <div className="absolute w-full h-full backdrop-blur-[2px] bg-[#d9d9d9]/30 overflow-hidden rounded-[4px] md:rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightsPower;
