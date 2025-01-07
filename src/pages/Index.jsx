import { useState, useEffect } from "react";
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

const Index = () => {
  const [pressedStates, setPressedStates] = useState(Array(8).fill(false));
  const [extraPressed, setExtraPressed] = useState(false);
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const handlePowerPress = () => {
    setIsPowerOn((prevState) => !prevState);
  };

  const handlePress = (index) => {
    setPressedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
    if (index === 1) {
      setExtraPressed((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (extraPressed) {
      setExtraPressed(true);
      const timer = setTimeout(() => setExtraPressed(false), 200);
      return () => clearTimeout(timer);
    }
  }, [extraPressed]);

  useEffect(() => {
    if (!isPowerOn) {
      setPressedStates(Array(8).fill(false));
    }
  }, [isPowerOn]);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <div className="h-svh w-full bg-[#222] overflow-hidden flex flex-col items-center justify-center relative">
      <TextFolio />
      <TextName />

      <div
        className="flex items-center justify-center rounded-lg md:rounded-xl relative z-10 w-[90%] max-w-[380px] md:max-w-[500px]
      aspect-[5/6] bg-[#222] shadow-[4px_20px_30px_#000,inset_4px_4px_4px_#383838,inset_-4px_-4px_4px_#161616] 
      md:shadow-[6px_35px_30px_#000,inset_4px_4px_4px_#383838,inset_-4px_-4px_4px_#161616]"
      >
        <div
          className="absolute inset-[3px] md:inset-[5px] rounded-[7px] sm:rounded-[10px] border-[#fff]/5 md:border-[#fff]/10 border-[2px] border-t-[2px] 
        border-b-[2px] bg-transparent flex items-center justify-center blur-xs md:blur-s"
        ></div>

        <div className="hidden md:block">
          <MediaCards />
        </div>

        <div className="grid grid-cols-5 grid-rows-6 w-full h-full gap-[8px] p-[10px] md:p-[14px] relative overflow-hidden">

          {/* screen */}

          <motion.div
            className="col-span-5 row-span-4 rounded-[4px] md:rounded-md relative h-full w-full"
            style={{boxShadow: "inset -4px -4px 10px #000, inset 4px 4px 10px #000"}}
            animate={{
              backgroundColor: isPowerOn ? "#83802b" : "#181708", 
            }}
            initial={{
              backgroundColor: isPowerOn ? "#83802b" : "#29280d",
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            {isPowerOn ? (
              <div className="absolute inset-0 bg-gradient-to-tl from-[#000]/60 to-transparent rounded-md"></div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-tl from-[#000]/70 to-transparent rounded-md"></div>
            )}

            <div className="absolute inset-0 border-[#000] border-[1px] rounded-md"></div>
            <div className="absolute inset-0 rounded-md bg-transparent "></div>

            <div
              className="font-Roboto absolute inset-0 items-start right-10 justify-center text-[8px] md:text-[10px] tracking-widest
            text-[#d9d9d9] pointer-events-none flex flex-row z-50 gap-[10px] -rotate-90"
            >
              <motion.div
                className="mt-[2px]"
                key="on-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                    ease: "easeInOut",
                  },
                }}
              >
                {isPowerOn ? (
                <img
                  src="./images/LogoHorizontalPower.svg"
                  alt="logo A-013"
                  className="w-[35px] md:w-[45px]"
                />
                ):(
                  <img
                  src="./images/LogoHorizontal.svg"
                  alt="logo A-013"
                  className="w-[35px] md:w-[45px]"
                />
                )}
              </motion.div>
              {isPowerOn ? (
                <motion.div
                  className="rounded-full w-2 h-2 md:w-3 md:h-3 bg-[#fff] blur-xs z-50 shadow-[0px_0px_6px_#fff] mt-[2px]"
                  key="on-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: {
                      duration: 0,
                      delay: 0.25,
                      ease: "easeInOut",
                    },
                  }}
                >
                </motion.div>
              ) : (
                <motion.div
                  className="rounded-full w-2 h-2 md:w-3 md:h-3 bg-[#000000] z-50 mt-[2px]"
                  key="off-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: 0.25,
                      ease: "easeInOut",
                    },
                  }}
                />
              )}
            </div>

            {isPowerOn || pressedStates[0] ? (
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center"
    key="opening-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      opacity: {
        ease: "linear",
        delay: 1,
      },
    }}
  >
    <ScrambleTextScreen
      text="HELLO MY NAME IS A-013"
      scrambleDuration={2.5}
    />
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        delay: 3.5,
        duration: 1.5,
        repeat: Infinity,
      }}
    >
      <h1
        className="mt-[60px] sm:mt-[80px] text-[#d9d9d9] font-Roboto text-[9px] md:text-xs tracking-widest 
        pointer-events-none uppercase"
      >
        press menu
      </h1>
    </motion.div>
  </motion.div>
) : (
  !isPowerOn && isInitialized && (
    <motion.div
      className="absolute inset-0 bg-[#83802b] blur-xs"
      initial={{
        height: "100%",
        top: "0%",
        width: "100%",
      }}
      animate={{
        height: "0px",
        top: "50%",
        width: "100%",
        color: "#222",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      key="power-off-animation"
    />
  )
)}

          {isPowerOn? (
           <div
           className="font-Roboto absolute inset-0 items-start -right-10 justify-center text-[8px] md:text-[10px] tracking-widest
         text-[#d9d9d9] pointer-events-none flex z-50 rotate-90"
         >
           <h1>FOLIO 2025</h1>
         </div>
          ):(
             <div
              className="font-Roboto absolute inset-0 items-start -right-10 justify-center text-[8px] md:text-[10px] tracking-widest
            text-[#000] pointer-events-none flex z-50 rotate-90"
            >
              <h1>FOLIO 2025</h1>
            </div>
          )}
          </motion.div>

          {/* end screen */}
          
         
            <Sound /> 
        
         

          <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000]">
            <div className="absolute inset-[1px] rounded-sm border-[#000]"
            style={{
              background:
                "conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)",
            }}>
            <div className="absolute inset-[7px] md:inset-[10px] rounded-sm md:border-[0.5px] border-[#000] bg-[#000]">           
            <motion.div
              className="absolute inset-[1px] rounded-[4px] md:rounded-[5px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                handlePress(0);
                handlePowerPress();
              }}
              style={{
                background:
                  "conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)",
              }}
              animate={{
                boxShadow: extraPressed
                  ? "inset 2px 2px 5px #111, inset -2px -2px 5px #111"
                  : pressedStates[0]
                  ? ""
                  : "inset 2px 2px 2px #fff, inset -1px -1px 2px #808080, 5px 5px 9px #111",
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}>
              <h1
                className="text-[#2e2c0a] font-Roboto tracking-widest text-[8px] md:text-[11px] font-medium
                pointer-events-none uppercase">
            
              </h1>
            </motion.div>
          </div>
          </div>
          </div>

          <MenuButton />

          <ButtonsDirections />
          
          {isPowerOn? (
            <LightsPower />
          ):(
            <Lights />
          )}

          <MetalPlate />
          <SelectButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
