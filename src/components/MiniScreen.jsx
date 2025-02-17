import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MiniScreen = ({ isCursorDown, isPowerOn, onPowerOff }) => {
  const [batteryLevel, setBatteryLevel] = useState(4);
  const timeoutRef = useRef(null);
  const dischargeIntervalRef = useRef(null);
  const [shadow, setShadow] = useState("");

  useEffect(() => {
    if (isCursorDown) {
      setShadow("inset 1px 1px 3px #939393, inset -1px -1px 3px #939393");
    } else {
      setTimeout(() => setShadow(""), 1500);
    }
  }, [isCursorDown]);

  useEffect(() => {
    if (!isPowerOn) {
      setBatteryLevel(4);
      clearTimeout(timeoutRef.current);
      clearInterval(dischargeIntervalRef.current);
    }
  }, [isPowerOn]);

  useEffect(() => {
    if (isPowerOn && batteryLevel > 0) {
      dischargeIntervalRef.current = setInterval(() => {
        setBatteryLevel((prev) => Math.max(prev - 1, 0));
      }, 120000);
    }

    return () => clearInterval(dischargeIntervalRef.current);
  }, [isPowerOn, batteryLevel]);

  useEffect(() => {
    if (batteryLevel === 0 && isPowerOn) {
      timeoutRef.current = setTimeout(() => {
        onPowerOff();
      }, 120000);
    } else {
      clearTimeout(timeoutRef.current);
    }
  }, [batteryLevel, isPowerOn, onPowerOff]);

  useEffect(() => {
    if (isCursorDown && isPowerOn) {
      clearTimeout(timeoutRef.current);
      setBatteryLevel(4);
    }
  }, [isCursorDown, isPowerOn]);

  const batteryColors = ["bg-[#d60000]", "bg-[#e53600]", "bg-[#dd6900]", "bg-[#f4940b]"];

  return (
    <div className="relative col-span-1 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-black overflow-hidden">
      <div className="absolute inset-[1px] bg-[#333] flex flex-col items-center justify-center shadow-[inset_-2px_-2px_6px_#111,inset_2px_2px_6px_#111]">
        {isPowerOn && (
          <>
            <p className="mb-2 font-Roboto uppercase text-[8px] md:text-[10px] tracking-wider text-[#c3c3c3] z-20 pointer-events-none">
              battery
            </p>
            <div className="flex flex-row gap-1 z-20">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-2 md:w-3 h-[25px] md:h-[35px] ${batteryLevel > i ? batteryColors[i] : "bg-[#444]"}`} />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[#000]/45 to-transparent z-10"></div>
          </>
        )}
      </div>

      <motion.div
        className="absolute top-[1px] left-[1px] right-[1px] h-[calc(100%-2px)] rounded-[4px] md:rounded-md bg-[#d9d9d9] z-50"
        initial={{ y: 0, boxShadow: "" }}
        animate={{
          y: isCursorDown ? "102%" : "0%",
          boxShadow: isCursorDown ? "inset 1px 1px 3px #939393, inset -1px -1px 3px #939393" : shadow,
        }}
        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

MiniScreen.propTypes = {
  isCursorDown: PropTypes.bool.isRequired,
  isPowerOn: PropTypes.bool.isRequired,
  onPowerOff: PropTypes.func.isRequired,
};

export default MiniScreen;
