import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetalPlate from "../components/MetalPlate";
import TextFolio from "../components/TextFolio";
import TextName from "../components/TextName";
import MediaCards from "../components/MediaCards";
import Lights from "../components/Lights";
import LightsPower from "../components/LightsPower";
import PowerButton from "../components/PowerButton";
import DirectionButtons from "../components/DirectionButtons";
import RechargeButton from "../components/RechargeButton";
import BootScreen from "../components/BootScreen";
import BatteryScreen from "../components/BatteryScreen";
import Menu from "../pages/Menu";

const Dashboard = () => {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isScreenOpen, setIsScreenOpen] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(7);
  const [bootCompleted, setBootCompleted] = useState(false);
  const [showBootScreen, setShowBootScreen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("instructions");

  useEffect(() => {
    localStorage.setItem("isPowerOn", "false");
    setIsPowerOn(false); 
    const storedPowerState = localStorage.getItem("isPowerOn");
    const storedBatteryLevel = localStorage.getItem("batteryLevel");
    if (storedPowerState === "true") {
      setIsPowerOn(true);
    } else {
      setIsPowerOn(false);
    }
    if (storedBatteryLevel) {
      setBatteryLevel(Number(storedBatteryLevel));
    }
    const timeout = setTimeout(() => setIsInitialized(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const handlePowerPress = () => {
    setIsPowerOn((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isPowerOn", newState ? "true" : "false");
      if (!newState) {
        localStorage.setItem("batteryLevel", batteryLevel.toString());
        localStorage.setItem("currentComponent", "instructions");
        setBootCompleted(false);
        setShowBootScreen(false);
        setCurrentComponent("instructions");
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!isPowerOn) {
      setBatteryLevel(7);
    } else {
      localStorage.setItem("batteryLevel", batteryLevel.toString());
    }
  }, [isPowerOn, batteryLevel]);

  const handleRecharge = () => {
    setBatteryLevel(7);
  };

  useEffect(() => {
    if (!isPowerOn) {
      setBootCompleted(false);
    }
  }, [isPowerOn]);

  useEffect(() => {
    if (isPowerOn) {
      setShowBootScreen(true);
    }
  }, [isPowerOn]);

  return (
    <div className="h-svh w-full bg-[#d9d9d9] overflow-hidden flex flex-col items-center justify-center relative">
      <TextName />
      <TextFolio />
      <div className="flex items-center justify-center rounded-xl md:rounded-3xl relative z-10 w-[90%] max-w-[380px] md:max-w-[500px] aspect-[5/6] bg-[#d9d9d9] shadow-[4px_20px_30px_#222,inset_4px_4px_4px_#fff,inset_-4px_-4px_4px_#979797] md:shadow-[6px_35px_30px_#222,inset_4px_4px_4px_#fff,inset_-4px_-4px_4px_#979797]">
        <div className="absolute inset-[3px] md:inset-[5px] rounded-xl md:rounded-[20px] border-[#fff]/70 md:border-[#fff]/90 border-[2px] bg-transparent flex items-center justify-center blur-xs md:blur-s"></div>
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
            {!isPowerOn && (
              <motion.div
                className="absolute inset-0 bg-[#d9d9d9] blur-xs"
                initial={{ height: "100%", top: "0%", width: "100%" }}
                animate={{
                  height: "0px",
                  top: "50%",
                  width: "100%",
                  color: "#222",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key="power-off-animation"
              />
            )}
            <AnimatePresence>
              {showBootScreen && isPowerOn && (
                <motion.div
                  key="bootScreen"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onAnimationComplete={() => {
                    if (!isPowerOn) setShowBootScreen(false);
                  }}
                >
                  <BootScreen
                    isPowerOn={isPowerOn}
                    onBootEnd={() => {
                      setBootCompleted(true);
                      setTimeout(() => setShowBootScreen(false), 3000);
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {bootCompleted && isPowerOn && !showBootScreen && (
                <motion.div
                  key="menu"
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Menu currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
            >
              <motion.span
                className="absolute right-2 top-2 md:right-3 md:top-3 rounded-full w-[10px] h-[10px] md:w-3 md:h-3 blur-xxs"
                initial={{ backgroundColor: isPowerOn ? "#d60000" : "#B9AB24" }}
                animate={{ backgroundColor: isPowerOn ? "#B9AB24" : "#d60000" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
          <PowerButton
            handlePowerPress={handlePowerPress}
            isPowerOn={isPowerOn}
            isInitialized={isInitialized}
          />
          <BatteryScreen
            isPowerOn={isPowerOn}
            isOpen={isScreenOpen}
            setIsOpen={setIsScreenOpen}
            onPowerOff={() => setIsPowerOn(false)}
            batteryLevel={batteryLevel}
            setBatteryLevel={setBatteryLevel}
          />
          <DirectionButtons
            isPowerOn={isPowerOn}
            isInitialized={isInitialized}
            currentComponent={currentComponent}
            setCurrentComponent={setCurrentComponent}
            showBootScreen={showBootScreen}
          />
          {isPowerOn ? <LightsPower /> : <Lights />}
          <MetalPlate />
          <RechargeButton
            isPowerOn={isPowerOn}
            isInitialized={isInitialized}
            handleRecharge={handleRecharge}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

