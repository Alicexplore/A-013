import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import MetalPlate from "../components/MetalPlate";
import ButtonsDirections from "../components/ButtonsDirections";
import TextFolio from "../components/TextFolio";
import TextName from "../components/TextName";
import MediaCards from "../components/MediaCards";
import Lights from "../components/Lights";
import LightsPower from "../components/LightsPower";
import EnterButton from "../components/EnterButton";
import MenuButton from "../components/MenuButton";
import Sound from "../components/Sound";
import PowerButton from "../components/PowerButton";
import LoadingBar from "../components/LoadingBar";

const Dashboard = () => {
  const [isPowerOn, setIsPowerOn] = useState(() => {
    return localStorage.getItem("isPowerOn") === "true";
  });

  const [isInitialized, setIsInitialized] = useState(false); 

  const handlePowerPress = () => {
    setIsPowerOn((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isPowerOn", newState);
      return newState;
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsInitialized(true), 500); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-svh w-full bg-[#d9d9d9] overflow-hidden flex flex-col items-center justify-center relative">
      <TextName />
      <TextFolio />

      <div className="flex items-center justify-center rounded-xl md:rounded-3xl relative z-10 w-[90%] max-w-[380px] 
      md:max-w-[500px] aspect-[5/6] bg-[#d9d9d9] shadow-[4px_20px_30px_#222,inset_4px_4px_4px_#fff,inset_-4px_-4px_4px_#979797] 
      md:shadow-[6px_35px_30px_#222,inset_4px_4px_4px_#fff,inset_-4px_-4px_4px_#979797]">
        
        <div className="absolute inset-[3px] md:inset-[5px] rounded-xl md:rounded-[20px] border-[#fff]/70 
        md:border-[#fff]/90 border-[2px] bg-transparent flex items-center justify-center blur-xs md:blur-s"></div>

        <div className="hidden md:block">
          <MediaCards />
        </div>

        <div className="grid grid-cols-5 grid-rows-6 w-full h-full gap-[8px] p-[10px] md:p-[14px] relative overflow-hidden">
          <motion.div
            className="col-span-5 row-span-4 rounded-lg md:rounded-xl relative h-full w-full"
            style={{
              boxShadow: isPowerOn
                ? "inset -6px -6px 10px #000, inset 6px 6px 10px #000"
                : "none",
            }}
            animate={{
              backgroundColor: isPowerOn ? "#333" : "#222",
            }}
            initial={{
              backgroundColor: isPowerOn ? "#333" : "#111",
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}>

            <div className={`absolute inset-0 
            ${isPowerOn ? "bg-gradient-to-tl from-[#111]/70 to-transparent" : "bg-gradient-to-tl from-[#000]/70 to-transparent"}
            rounded-lg md:rounded-xl`}></div>

            <div className="absolute inset-0 border-[#000] border-[0.5px] md:border-[1px] rounded-lg md:rounded-xl"></div> 

            <div className="absolute flex right-[13px] md:right-[18px] pointer-events-none z-30">

              {isPowerOn ? (
                <motion.div
                  className=""
                  key="on-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: { duration: 0, delay: 0.25, ease: "easeInOut" },
                  }}>
                  <div className="flex flex-row items-center gap-2 md:gap-3">
                    <div className="text-[#d9d9d9] text-[16px] md:text-[24px] mt-[4px] md:mt-[6px]">
                    <ion-icon name="battery-full-sharp"></ion-icon>
                    </div>
                    <div className="rounded-full w-2 h-2 md:w-3 md:h-3 bg-[#d9d9d9]  z-50 
                    shadow-[0px_0px_6px_#d9d9d9]"></div>
                  </div>                 
                </motion.div>
              ) : (
                <motion.div
                  className=""
                  key="off-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.25, ease: "easeInOut" },
                  }}>
                    <div className="flex flex-row items-center gap-2 md:gap-3">
                    <div className="text-[#373737] text-[16px] md:text-[24px] mt-[4px] md:mt-[6px]">
                    <ion-icon name="battery-full-sharp"></ion-icon>
                    </div>
                    <div className="rounded-full w-2 h-2 md:w-3 md:h-3 bg-[#373737] z-50"></div>
                  </div>                 
                </motion.div>
              )}

            </div>
            

            <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInitialized ? 1 : 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isPowerOn ? (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            key="opening-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { ease: "linear", delay: 1 } }}
          >
            <LoadingBar />
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 bg-[#d9d9d9] blur-xs"
            initial={{ height: "100%", top: "0%", width: "100%" }}
            animate={{ height: "0px", top: "50%", width: "100%", color: "#222" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key="power-off-animation"
          />
        )}
      </motion.div>

          </motion.div>

          <Sound />
          <PowerButton handlePowerPress={handlePowerPress} isPowerOn={isPowerOn} isInitialized={isInitialized} />
          <MenuButton isPowerOn={isPowerOn} isInitialized={isInitialized} />
          <ButtonsDirections isPowerOn={isPowerOn} isInitialized={isInitialized} />
          {isPowerOn ? <LightsPower /> : <Lights />}
          <MetalPlate />
          <EnterButton isPowerOn={isPowerOn} isInitialized={isInitialized} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

