import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const ScrambleText = ({ text, scrambleDuration = 1.5 }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#-$%^&*(){}_[]";

  const handleMouseEnter = () => {
    let iterations = 0;
    const originalTextArray = text.split("");

    const scrambleInterval = setInterval(() => {
      const newText = originalTextArray.map((char, index) => {
        if (index < iterations) {
          return char; 
        }
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      });

      setScrambledText(newText.join(""));

      if (iterations >= originalTextArray.length) {
        clearInterval(scrambleInterval);
      }

      iterations += 1;
    }, (scrambleDuration * 500) / text.length);
  };

  const handleMouseLeave = () => {
    setScrambledText(text); 
  };

  return (
    <motion.h1
      className="cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {scrambledText}
    </motion.h1>
  );
};

ScrambleText.propTypes = {
  text: PropTypes.string.isRequired,
  scrambleDuration: PropTypes.number,
};

export default ScrambleText;
