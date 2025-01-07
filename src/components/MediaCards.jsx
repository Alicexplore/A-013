import { motion } from "framer-motion";

const MediaCards = () => {
  return (
    <div className="absolute flex flex-row md:flex-col items-start md:items-center justify-between bottom-[180px] 
    left-8 md:-left-[150px] gap-[35px] md:gap-[50px]">
    
    <div className="rotate-[-20deg]">
    <motion.div
      className="relative w-[45px] h-[55px] md:w-[60px] md:h-[75px] bg-[#2e2e2e] rounded-[3px] md:rounded-[4px] cursor-pointer"
      initial={{
        scale: 1,
        boxShadow: "2px 2px 8px #000, inset 1px 1px 2px #3b3b3b, inset -2px -2px 2px #131313",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "6px 6px 15px #000, inset 1px 1px 3px #3b3b3b, inset -3px -3px 3px #131313",
      }}
      transition={{
        duration: 0.6, 
        ease: "easeInOut", 
      }}>
        <div className="absolute inset-[1px] md:inset-[2px] border-[#fff]/40 border-l-[0.5px] border-t-[0.5px] 
        rounded-[2px] md:rounded-[3px] blur-xxs md:blur-xs"></div>
        {/* <div className="absolute inset\-[3px] md:inset-[5px] border-[#4b4b4b] border-[0.5px] rounded-[1px] md:rounded-[2px]"></div> */}

        <div className="absolute w-full h-full grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center">
                <div className="w-2/3 h-full bg-[#D4D4CE] flex items-end justify-center rounded-b-[2px] md:rounded-b-[4px]
                shadow-[inset_0_3px_3px_#fff,1px_1px_2px_#000]">
                    <span className="font-Roboto tracking-widest text-[4px] md:text-[6px] text-[#222] uppercase mb-1">linkedin</span> 
                </div>
            </div>
            <div className="row-span-1 flex items-end justify-center">
                <div className="h-3/4 w-full flex items-end justify-center">
                <div className="h-full w-5/6 flex items-end justify-between px-[5px] md:px-[6px] bg-[#000] border-[#3b3b3b] border-t-[0.5px]
                border-l-[0.5px] border-r-[0.5px] rounded-t-sm shadow-[inset_0px_-3px_3px_#000]">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span 
                          key={index}
                          className="w-[3px] md:w-1 h-3/4"
                          style={{ background: 'conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)'}}>
                        </span>
                      ))} 
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    </div>

    <div className="rotate-[10deg]">
    <motion.div
      className="relative w-[45px] h-[55px] md:w-[60px] md:h-[75px] bg-[#2e2e2e] rounded-[3px] md:rounded-[4px] cursor-pointer"
      initial={{
        scale: 1,
        boxShadow: "2px 2px 8px #000, inset 1px 1px 2px #3b3b3b, inset -2px -2px 2px #131313",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "6px 6px 15px #000, inset 1px 1px 3px #3b3b3b, inset -3px -3px 3px #131313",
      }}
      transition={{
        duration: 0.6, 
        ease: "easeInOut", 
      }}>
        <div className="absolute inset-[1px] md:inset-[2px] border-[#fff]/40 border-l-[0.5px] border-t-[0.5px] 
        rounded-[2px] md:rounded-[3px] blur-xxs md:blur-xs"></div>
        {/* <div className="absolute inset\-[3px] md:inset-[5px] border-[#4b4b4b] border-[0.5px] rounded-[1px] md:rounded-[2px]"></div> */}

        <div className="absolute w-full h-full grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center">
                <div className="w-2/3 h-full bg-[#D4D4CE] flex items-end justify-center rounded-b-[2px] md:rounded-b-[4px]
                shadow-[inset_0_3px_3px_#fff,1px_1px_2px_#000]">
                    <span className="font-Roboto tracking-widest text-[4px] md:text-[6px] text-[#222] uppercase mb-1">github</span> 
                </div>
            </div>
            <div className="row-span-1 flex items-end justify-center">
                <div className="h-3/4 w-full flex items-end justify-center">
                <div className="h-full w-5/6 flex items-end justify-between px-[5px] md:px-[6px] bg-[#000] border-[#3b3b3b] border-t-[0.5px]
                border-l-[0.5px] border-r-[0.5px] rounded-t-sm shadow-[inset_0px_-3px_3px_#000]">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span 
                          key={index}
                          className="w-[3px] md:w-1 h-3/4"
                          style={{ background: 'conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)'}}>
                        </span>
                      ))} 
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    </div>

    </div>
  )
}

export default MediaCards