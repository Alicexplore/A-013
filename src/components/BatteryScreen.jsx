import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BatteryScreen = ({ isPowerOn, onPowerOff, setIsOpen, batteryLevel, setBatteryLevel }) => {
  const dischargeIntervalRef = useRef(null);
  const shutdownTimeoutRef = useRef(null);
  const [powerAudio, setPowerAudio] = useState(null);

  useEffect(() => {
    setPowerAudio(new Audio('/sounds/PowerButton.mp3'));
  }, []);

  const playSound = (sound) => {
    sound.currentTime = 0; 
    sound.play();
  };

  useEffect(() => {
    if (isPowerOn) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isPowerOn, setIsOpen]);

  useEffect(() => {
    if (isPowerOn && batteryLevel > 0) {
      dischargeIntervalRef.current = setInterval(() => {
        setBatteryLevel((prev) => Math.max(prev - 1, 0));
      }, 180000);
    }

    return () => clearInterval(dischargeIntervalRef.current);
  }, [isPowerOn, batteryLevel, setBatteryLevel]); 

  useEffect(() => {
    if (batteryLevel === 0) {
      shutdownTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        onPowerOff();
        playSound(powerAudio); 

      }, 180000); 
    } else {
      clearTimeout(shutdownTimeoutRef.current);
    }

    return () => clearTimeout(shutdownTimeoutRef.current);
  }, [batteryLevel, onPowerOff, setIsOpen, powerAudio]);

  const batteryColors = [
    "bg-[#d60000]", "bg-[#e53600]", "bg-[#dd6900]", "bg-[#f4940b]",
    "bg-[#f2b50c]", "bg-[#baab25]", "bg-[#999100]"
  ];

  return (
    <div className="relative col-span-2 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-black overflow-hidden">
      <div className="absolute inset-[1px] bg-[#333] flex flex-col items-center justify-center shadow-[inset_-2px_-2px_6px_#111,inset_2px_2px_6px_#111]">
        {isPowerOn && (
          <>
            <div className="flex flex-row gap-1 z-20">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[10px] md:w-4 h-[30px] md:h-[40px] ${
                    batteryLevel > i ? batteryColors[i] : "bg-[#444]"
                  }`}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[#000]/45 to-transparent z-10"></div>
          </>
        )}
      </div>

      <motion.div
        className="absolute top-[1px] left-[1px] right-[1px] h-[calc(100%-2px)] bg-[#d9d9d9] z-50 flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: isPowerOn ? "102%" : "0%" }}
        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

BatteryScreen.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  onPowerOff: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  batteryLevel: PropTypes.number.isRequired,
  setBatteryLevel: PropTypes.func.isRequired, 
};

export default BatteryScreen;
