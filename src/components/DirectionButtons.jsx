import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const DirectionButtons = ({ isInitialized, setCurrentComponent, currentComponent, showBootScreen }) => {
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);

  const keyPressSound = new Audio('/sounds/ButtonDirection.mp3');
  keyPressSound.volume = 0.2; 

  const components = ["about", "projects", "contact"]; 
  const currentIndex = components.indexOf(currentComponent);

  const handleUpClick = () => {
    if (!isInitialized) return;
    setUpPressed(true);
    keyPressSound.play();   
    if (!showBootScreen) { 
      const nextIndex = (currentIndex - 1 + components.length) % components.length;
      setCurrentComponent(components[nextIndex]);
      setTimeout(() => setUpPressed(false), 150);
    } else {
      setTimeout(() => setUpPressed(false), 150); 
    }
  };

  const handleDownClick = () => {
    if (!isInitialized) return;
    setDownPressed(true);
    keyPressSound.play();
    if (!showBootScreen) {
      const nextIndex = (currentIndex + 1) % components.length; 
      setCurrentComponent(components[nextIndex]);
      setTimeout(() => setDownPressed(false), 150);
    } else {
      setTimeout(() => setDownPressed(false), 150);
    };
  };

  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-[#000] border-[0.5px] md:border-[1px] border-[#000]">
        <div className="absolute inset-[1px] bg-[#000] rounded-sm">
          <div className="grid grid-rows-3 h-full w-full gap-[1.5px] md:gap-[2px] bg-[#000]">
            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#d9d9d9] z-2 flex items-center justify-center cursor-pointer"
              onClick={handleUpClick}
              style={{
                boxShadow: upPressed
                  ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                  : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #222",
                  transition: "box-shadow 0.1s ease-in-out", 
              }}>
              <span className="absolute pointer-events-none flex items-center justify-center w-[12px] md:w-[17px]">
                <img src="./images/uparrow.svg" alt="flash icon"/>
              </span>
            </motion.div>

            <div className="col-span-1 bg-[#d9d9d9]">
              <div className="flex justify-between h-full w-full">
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`h-full ${
                        index === 0
                          ? "w-[6px] md:w-[10px] shadow-[inset_-2px_0px_1px_#fff]"
                          : index === 6
                          ? "w-[6px] md:w-[10px] shadow-[inset_2px_0px_1px_#939393]"
                          : "w-[8px] md:w-[12px] shadow-[inset_2px_0px_1px_#939393,inset_-2px_0px_1px_#fff]"
                      } bg-[#d9d9d9]`}
                    ></div>
                  ))}
              </div>
            </div>

            <motion.div
              className="col-span-1 rounded-[4px] md:rounded-md bg-[#d9d9d9] z-2 flex items-center justify-center cursor-pointer"
              onClick={handleDownClick}
              style={{
                boxShadow: downPressed
                  ? "inset 2px 2px 5px #222, inset -2px -2px 5px #222"
                  : "inset 2px 2px 2px #fff, inset -2px -2px 2px #939393, 5px 5px 8px #222",
                  transition: "box-shadow 0.1s ease-in-out",
              }}>
                <span className="absolute pointer-events-none flex items-center justify-center w-[12px] md:w-[17px]">
                  <img src="./images/downarrow.svg" alt="flash icon"/>
                </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

DirectionButtons.propTypes = {
  isInitialized: PropTypes.bool.isRequired,
  setCurrentComponent: PropTypes.func.isRequired, 
  currentComponent: PropTypes.string.isRequired,
  showBootScreen: PropTypes.bool.isRequired,
};

export default DirectionButtons;
