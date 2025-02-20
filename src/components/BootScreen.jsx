import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import ScrambleTextScreen from "./ScrambleTextScreen";
import PropTypes from "prop-types";

const BootScreen = ({ isPowerOn, onBootComplete }) => {
  const controls = useAnimation();
  const logoControls = useAnimation();
  const [startLoading, setStartLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showPressMenu, setShowPressMenu] = useState(false);

  useEffect(() => {
    if (isPowerOn) {
      const powerOnDelay = setTimeout(() => {
        setStartLoading(true);
      }, 1000);

      return () => clearTimeout(powerOnDelay);
    }
  }, [isPowerOn]);

  useEffect(() => {
    if (!startLoading) return;

    const sequence = async () => {
      await controls.start({ opacity: 1, width: "0%" });

      await logoControls.start({
        clipPath: "inset(0% 0 0% 0)",
        opacity: 1,
        transition: { delay: 0.5, duration: 0.75, ease: "easeInOut" },
      });

      await controls.start({
        width: ["0%", "30%", "30%", "50%", "70%", "70%", "100%"],
        transition: {
          duration: 3,
          times: [0, 0.2, 0.3, 0.5, 0.7, 0.85, 1],
          ease: "easeInOut",
        },
      });

      await Promise.all([
        controls.start({ opacity: 0, transition: { duration: 0.5 } }),
        logoControls.start({ opacity: 0, transition: { duration: 0.5 } }),
      ]);

      setShowText(true);
      setTimeout(() => {
        setShowPressMenu(true);
      }, 1000);

      setTimeout(() => {
        if (onBootComplete) {
          onBootComplete(); 
        }
      }, 4000);
    };

    sequence();
  }, [startLoading, controls, logoControls, onBootComplete]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div key="boot-sequence" className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: showText ? 0 : 1, transition: { duration: 0.5 } }}
          >
            <motion.img
              className="w-[200px] md:w-[300px]"
              src="./images/LogoHorizontalPower.svg"
              alt="Logo"
              initial={{ clipPath: "inset(50% 0 50% 0)", opacity: 0 }}
              animate={logoControls}
            />

            <motion.div className="absolute bottom-5 w-full px-10">
              <motion.div
                className="h-[6px] bg-[#d9d9d9] rounded-lg"
                initial={{ width: "0%", opacity: 0 }}
                animate={startLoading ? controls : { width: "0%" }}
              />
            </motion.div>
          </motion.div>

          {showText && (
            <motion.div 
              className="absolute flex flex-col items-center"
              key="scramble-text" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}>
                <ScrambleTextScreen text="HELLO MY NAME IS A-013" scrambleDuration={2.5} />
                {showPressMenu && (
                  <motion.p 
                    className="absolute mt-10 text-[#d9d9d9] font-Roboto text-[9px] md:text-xs tracking-widest pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 2 }}>
                    PRESS MENU
                  </motion.p>
                )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

BootScreen.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  onBootComplete: PropTypes.func.isRequired,
};

export default BootScreen;
