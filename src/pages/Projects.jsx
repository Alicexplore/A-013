import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const Projects = ({ goBackToMenu }) => {
  const controls = useAnimation();
  const scrollY = useRef(0); 
  const textRef = useRef(null); 
  const [maxScroll, setMaxScroll] = useState(0); 

  const scrollStep = 30; 
  const smoothness = { type: "spring", stiffness: 100, damping: 15 }; 

  useEffect(() => {
    if (textRef.current) {
      const containerHeight = 200; 
      const textHeight = textRef.current.scrollHeight;
      setMaxScroll(containerHeight - textHeight); 
    }
  }, []);

  const scrollDown = () => {
    if (scrollY.current > maxScroll) {
      scrollY.current = Math.max(scrollY.current - scrollStep, maxScroll); 
      controls.start({ y: scrollY.current, transition: smoothness });
    }
  };

  const scrollUp = () => {
    if (scrollY.current < 0) {
      scrollY.current = Math.min(scrollY.current + scrollStep, 0); 
      controls.start({ y: scrollY.current, transition: smoothness });
    }
  };

  return (
    <div className="w-full h-full items-center justify-center flex flex-col p-10">
      <h2 className="text-center mb-8 text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase pointer-events-none">
        projects
      </h2>
      <div className="w-full h-[210px] overflow-hidden p-2 relative">
        <motion.div ref={textRef} animate={controls} className="w-full">
          <p className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">
            famiglia 
          </p>
          <br />
          <img src="./images/famiglia.png" alt="" width={1000} />
         
          <a href="https://www.linkedin.com/in/alicebergonhe/" target="_blank" rel="noopener noreferrer" className="underline
          text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">repo github</a>
          <br />
          <br />
          <p className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">
            Built with care and technical precision, I bring to life the ideas she envisioned, translating them into a unique
            web design experience that reflects her keen eye for detail and passion for aesthetics.
          </p>
          <br />
          <p className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">
            Alice is currently looking for a new opportunity as a Frontend Developer, if her vision resonates with you, feel 
            free to reach out!
          </p>
        </motion.div>
      </div>

      <div className="flex justify-between mt-8 w-full mx-auto">
        <button
          onClick={goBackToMenu}
          className="text-[#fff] text-2xl transition-colors"
        >
          <ion-icon name="caret-back-outline"></ion-icon>
        </button>

        <div className="flex flex-row gap-4">
          <button
            onClick={scrollUp}
            className="text-[#fff] text-2xl transition-colors"
          >
            <ion-icon name="caret-up-outline"></ion-icon>
          </button>
          <button
            onClick={scrollDown}
            className="text-[#fff] text-2xl transition-colors"
          >
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  goBackToMenu: PropTypes.func.isRequired,
};

export default Projects;