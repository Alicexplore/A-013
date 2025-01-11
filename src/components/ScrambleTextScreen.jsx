import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScrambleTextScreen = ({ text, scrambleDuration = 2.5 }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#-$%^&*(){}_[]";

  useEffect(() => {
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
    }, (scrambleDuration * 1000) / text.length);

    return () => clearInterval(scrambleInterval);
  }, [text, scrambleDuration]);

  return (
    <h1 className="text-[#d9d9d9] font-Roboto text-[9px] md:text-xs tracking-widest pointer-events-none">
      {scrambledText}
    </h1>
  );
};

ScrambleTextScreen.propTypes = {
  text: PropTypes.string.isRequired,
  scrambleDuration: PropTypes.number,
};

export default ScrambleTextScreen;
