import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ScrambleTextScreen from "./ScrambleTextScreen"; 
import PropTypes from "prop-types";

const BootScreen = ({ isPowerOn, onBootEnd }) => {
  const controls = useAnimation();
  const logoControls = useAnimation();
  const [startLoading, setStartLoading] = useState(false);
  const [showText, setShowText] = useState(false);

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

    };

    sequence();
  }, [startLoading, controls, logoControls]);

  useEffect(() => {
    if (showText && onBootEnd) {
      const endDelay = setTimeout(() => {
        onBootEnd(); 
      }, 500); 
  
      return () => clearTimeout(endDelay);
    }
  }, [showText, onBootEnd]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: showText ? 0 : 1, transition: { duration: 0.5 } }}
      >
        <motion.img
          className="w-[200px] md:w-[300px]"
          src="./images/LogoPower.svg"
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
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <ScrambleTextScreen text="HELLO MY NAME IS A-013" scrambleDuration={2.5} />
        </motion.div>
      )}
    </div>
  );
};

BootScreen.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  onBootEnd: PropTypes.bool.isRequired,
};

export default BootScreen;
