import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrambleTextScreen from "./ScrambleTextScreen";
import Menu from "./Menu";

const PressMenuMessage = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!showMenu ? (
          <motion.div
            key="scramble-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <ScrambleTextScreen text="HELLO MY NAME IS A-013" scrambleDuration={2.5} />
          </motion.div>
        ) : (
          <motion.div
            className="w-full h-full"
            key="new-component"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PressMenuMessage;
