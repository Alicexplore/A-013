import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MiniScreen = ({ isCursorDown }) => {
  return (
    <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-black overflow-hidden">
   
      <div className="absolute inset-[1px] bg-[#333] flex items-center justify-center
      shadow-[inset_2px_2px_5px_#000,inset_-1px_-1px_3px_#000]">

        <div className="absolute w-[70%] h-[70%] bg-[#222] rounded-full
        shadow-[inset_3px_3px_10px_#000,inset_-3px_-3px_10px_#777] border-[0.5px] border-[#2b2b2b]"></div>

          <div className="absolute top-[4.5px] left-1/2 w-[4px] h-[4px] bg-[#7a7604] -translate-x-1/2 rounded-full" />
          <div className="absolute bottom-[4.5px] left-1/2 w-[4px] h-[4px] bg-[#555] -translate-x-1/2 rounded-full" />
          <div className="absolute left-[4.5px] top-1/2 w-[4px] h-[4px] bg-[#555] -translate-y-1/2 rounded-full" />
          <div className="absolute right-[4.5px] top-1/2 w-[4px] h-[4px] bg-[#555] -translate-y-1/2 rounded-full" />

        <div className="relative w-[50%] h-[50%] rounded-full bg-[#333] cursor-pointer
          shadow-[inset_0px_1px_4px_#000,inset_0px_-1px_4px_#111,inset_1px_0px_4px_#111,inset_-1px_0px_4px_#111]"> 
          {/* <div className="absolute top-[2px] left-1/2 w-[1px] h-[8px] bg-black -translate-x-1/2 rounded-full" /> */}  
        </div>
        
      </div>
 
      <motion.div
        className="absolute top-[1px] left-[1px] right-[1px] h-[calc(100%-2px)] rounded-tr-[4px] rounded-tl-[4px] 
        md:rounded-tr-md md:rounded-tl-md bg-[#d9d9d9] shadow-[6px_6px_15px_#000]"
        initial={{ y: 0 }}
        animate={{ y: isCursorDown ? "102%" : "0%" }}
        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

MiniScreen.propTypes = {
  isCursorDown: PropTypes.bool.isRequired,
};

export default MiniScreen;

