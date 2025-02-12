import { motion } from "framer-motion";
import ScrambleTextScreen from "./ScrambleTextScreen";

const PressMenu = () => {

  return (
    <div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        key="opening-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { ease: "linear", delay: 0 } }}>
            
        <ScrambleTextScreen
          text="HELLO MY NAME IS A-013"
          scrambleDuration={2.5}/>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3.5, duration: 1.5, repeat: Infinity }}>
          <h1 className="mt-[60px] sm:mt-[80px] text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest 
          pointer-events-none uppercase">press menu</h1>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PressMenu;
