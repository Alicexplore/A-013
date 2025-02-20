import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "../components/Menu";
import MetalPlate from "../components/MetalPlate";
import TextFolio from "../components/TextFolio";
import TextName from "../components/TextName";
import MediaCards from "../components/MediaCards";
import Lights from "../components/Lights";
import LightsPower from "../components/LightsPower";
import MenuButton from "../components/MenuButton";
import PowerButton from "../components/PowerButton";
import ButtonsDirections from "../components/ButtonsDirections";
import EnterButton from "../components/EnterButton";
import BootScreen from "../components/BootScreen";

const Dashboard = () => {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [startMenuDelay, setStartMenuDelay] = useState(false);

  useEffect(() => {
    const storedPowerState = localStorage.getItem("isPowerOn");
    const storedMenuDelayState = localStorage.getItem("startMenuDelay");

    if (storedPowerState === "true") {
      setIsPowerOn(true);
    } else {
      setIsPowerOn(false);
    }

    if (storedMenuDelayState === "true") {
      setStartMenuDelay(true);
    } else {
      setStartMenuDelay(false);
    }

    setIsMenuVisible(false);
    localStorage.setItem("isPowerOn", "false");
    localStorage.setItem("isMenuVisible", "false");
    localStorage.setItem("startMenuDelay", "false");

    const timeout = setTimeout(() => setIsInitialized(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const handlePowerPress = () => {
    setIsPowerOn((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isPowerOn", newState ? "true" : "false");

      if (!newState) {
        setIsMenuVisible(false);
        localStorage.setItem("isMenuVisible", "false");
      }

      if (newState) {
        setIsBootComplete(false);
        setIsMenuVisible(false);
        localStorage.setItem("startMenuDelay", "true");
        setTimeout(() => {
          setStartMenuDelay(false);
          localStorage.setItem("startMenuDelay", "false");
        }, 7000);
      }

      return newState;
    });
  };

  const handleMenuClick = () => {
    if (isBootComplete && !startMenuDelay && isPowerOn) {
      setIsMenuVisible(true);
      localStorage.setItem("isMenuVisible", "true");
    }
  };

  const handleBootComplete = () => {
    setIsBootComplete(true);
  };

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
                : "inset -6px -6px 10px #000, inset 6px 6px 10px #000",
              backgroundColor: isPowerOn ? "#333" : "#000",
              transition: "0.3 easeIn",
            }}
          >
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-tl from-[#111]/85 to-transparent"></div>
            <div className="absolute inset-0 border-[#000] border-[0.5px] md:border-[1px] rounded-lg md:rounded-xl"></div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInitialized ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {isPowerOn && !isMenuVisible && (
                <BootScreen isPowerOn={isPowerOn} onBootComplete={handleBootComplete} />
              )}
            </motion.div>
            {isMenuVisible && isPowerOn && <Menu />}
          </motion.div>
          <PowerButton
            handlePowerPress={handlePowerPress}
            isPowerOn={isPowerOn}
            isInitialized={isInitialized}
          />
          <MenuButton
            isPowerOn={isPowerOn}
            isInitialized={isInitialized}
            onMenuClick={handleMenuClick}
          />
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

