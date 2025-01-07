import { motion } from "framer-motion";

const TextFolio = () => {
  return (
    <div
          className="absolute bottom-5 right-5 md:bottom-5 md:right-10 font-Roboto text-[9px] sm:text-[10.5px] md:text-xs tracking-widest 
        text-[#d9d9d9] mb-0 sm:mb-5 sm:text-left pointer-events-none">
          <h1>A-013 / V1.0.0</h1>
          <div className="flex items-baseline">
            <p>FOLIO 2025</p>
            <motion.div
              className="right-[2px] w-[5px] md:w-[7px] h-[7px] md:h-[9px] bg-[#d9d9d9] ml-[1px] mt-[3px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                opacity: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 0.7,
                  ease: "easeInOut",
                },
              }}
            ></motion.div>
          </div>
        </div>
  )
}

export default TextFolio