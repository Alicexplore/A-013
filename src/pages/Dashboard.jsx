import { useState } from "react";
import { motion } from "framer-motion";

import MetalPlate from "../components/MetalPlate";
import ButtonsDirections from "../components/ButtonsDirections";
import TextFolio from "../components/TextFolio";
import TextName from "../components/TextName";
import MediaCards from "../components/MediaCards";
import ScrambleTextScreen from "../components/ScrambleTextScreen";
import Lights from "../components/Lights";
import LightsPower from "../components/LightsPower";
import SelectButton from "../components/SelectButton";
import MenuButton from "../components/MenuButton";
import Sound from "../components/Sound";
import PowerButton from "../components/PowerButton";

const Dashboard = () => {
  const [isPowerOn, setIsPowerOn] = useState(false);

  const handlePowerPress = () => {
    setIsPowerOn((prevState) => !prevState);
  };

  return (
    <div className="h-svh w-full bg-[#222] overflow-hidden flex flex-col items-center justify-center relative background">
      <TextName />
      <TextFolio />

      <div className="flex items-center justify-center rounded-lg md:rounded-xl relative z-10 w-[90%] max-w-[380px] 
      md:max-w-[500px] aspect-[5/6] bg-[#222] shadow-[4px_20px_30px_#000,inset_4px_4px_4px_#383838,inset_-4px_-4px_4px_#161616] 
      md:shadow-[6px_35px_30px_#000,inset_4px_4px_4px_#383838,inset_-4px_-4px_4px_#161616]">
        
        <div className="absolute inset-[3px] md:inset-[5px] rounded-[7px] sm:rounded-[10px] border-[#fff]/5 
        md:border-[#fff]/10 border-[2px] border-t-[2px] border-b-[2px] bg-transparent flex items-center justify-center 
        blur-xs md:blur-s"></div>

        <div className="hidden md:block">
          <MediaCards />
        </div>

        <div className="grid grid-cols-5 grid-rows-6 w-full h-full gap-[8px] p-[10px] md:p-[14px] relative overflow-hidden">
          <motion.div
            className="col-span-5 row-span-4 rounded-[4px] md:rounded-md relative h-full w-full"
            style={{
              boxShadow: isPowerOn
                ? "inset -4px -4px 8px #000, inset 4px 4px 8px #000"
                : "inset -4px -4px 8px #000, inset 4px 4px 8px #000",
            }}
            animate={{
              backgroundColor: isPowerOn ? "#262626" : "#222",
            }}
            initial={{
              backgroundColor: isPowerOn ? "#222" : "#222",
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}>
            <div className="absolute inset-0 overflow-hidden rounded-[4px] md:rounded-md">
              <div className={`absolute inset-0 w-[40rem] h-[40rem] -left-[25rem] -top-[20rem] rounded-[4px] md:rounded-md 
              pointer-events-none bg-gradient-to-tr from-white via-white/20 to-transparent 
              ${isPowerOn ? "opacity-20" : "opacity-30"} rotate-[135deg]`}></div>
            </div>

            <div className={`absolute inset-0 
            ${isPowerOn ? "bg-gradient-to-tl from-[#111]/70 to-transparent" : "bg-gradient-to-tl from-[#111]/70 to-transparent"}
            rounded-[4px] md:rounded-md`}></div>

            <div className="absolute inset-0 border-[#000] border-[0.5px] md:border-[1px] rounded-[4px] md:rounded-md"></div>

            <div className="font-Roboto absolute inset-0 flex items-start right-10 justify-center text-[8px] md:text-[10px] 
            tracking-widest text-[#d9d9d9] pointer-events-none z-30 gap-[10px] -rotate-90">
              {isPowerOn ? (
                <motion.img
                  key="logo-power-on"
                  src="./images/LogoHorizontalPower.svg"
                  alt="logo A-013 (Power On)"
                  className="w-[35px] md:w-[45px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.25, ease: "easeInOut" },
                  }}
                />
              ) : (
                <motion.img
                  key="logo-power-off"
                  src="./images/LogoHorizontal.svg"
                  alt="logo A-013 (Power Off)"
                  className="w-[35px] md:w-[45px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.25, ease: "easeInOut" },
                  }}
                />
              )}

              {isPowerOn ? (
                <motion.div
                  className="rounded-full w-2 h-2 md:w-3 md:h-3 bg-[#fff] blur-xs z-50 shadow-[0px_0px_6px_#fff]"
                  key="on-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: { duration: 0, delay: 0.25, ease: "easeInOut" },
                  }}
                />
              ) : (
                <motion.div
                  className="rounded-full w-2 h-2 md:w-3 md:h-3 bg-[#000] z-50"
                  key="off-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.25, ease: "easeInOut" },
                  }}
                />
              )}
            </div>

            {isPowerOn ? (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                key="opening-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { ease: "linear", delay: 1 } }}>
                <ScrambleTextScreen
                  text="HELLO MY NAME IS A-013"
                  scrambleDuration={2.5}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 3.5, duration: 1.5, repeat: Infinity }}>
                  <h1 className="mt-[60px] sm:mt-[80px] text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest 
                  pointer-events-none uppercase">press menu</h1>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="absolute inset-0 bg-[#6c6c6c] blur-xs"
                initial={{ height: "100%", top: "0%", width: "100%" }}
                animate={{ height: "0px", top: "50%", width: "100%", color: "#222" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key="power-off-animation"
              />
            )}
          </motion.div>

          <Sound />

          <PowerButton handlePowerPress={handlePowerPress} isPowerOn={isPowerOn} />

          <MenuButton isPowerOn={isPowerOn} />
          <ButtonsDirections isPowerOn={isPowerOn} />
          {isPowerOn ? <LightsPower /> : <Lights />}
          <MetalPlate />
          <SelectButton isPowerOn={isPowerOn} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

