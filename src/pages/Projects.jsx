import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const Projects = ({ goBackToMenu }) => {
  const controls = useAnimation(); 
  const textRef = useRef(null); 

  return (
    <div className="w-full h-full items-center justify-center flex flex-col p-10">
      <h2 className="text-center mb-8 text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase pointer-events-none z-10">
        projects
      </h2>
      <div className="w-full h-[210px] overflow-y-auto p-2 relative">
        <motion.div ref={textRef} animate={controls} className="w-full">
          <h3 className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">
            A-013
          </h3>
          <br />
          <img className="shadow-[0px_0px_6px_#000]" src="./images/a013.png" alt="" width={1000} />
          <br />
          <p className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">
            Vegan restaurant built during my studies, react + tailwind
          </p>
          <a href="https://www.linkedin.com/in/alicebergonhe/" target="_blank" rel="noopener noreferrer" className="underline
          text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">github</a>

          <h3 className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase mt-12">
            famiglia 
          </h3>
          <br />
          <img className="shadow-[0px_0px_6px_#000]" src="./images/famiglia.png" alt="" width={1000} />
          <br />
          <p className="text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">
            Vegan restaurant built during my studies, react + tailwind
          </p>
          <a href="https://www.linkedin.com/in/alicebergonhe/" target="_blank" rel="noopener noreferrer" className="underline
          text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">github</a>
          <br />
        
        </motion.div>
      </div>

      <div className="flex justify-between mt-8 w-full mx-auto">
        <button
          onClick={goBackToMenu}
          className="text-[#fff] text-2xl transition-colors"
        >
          <ion-icon name="caret-back-outline"></ion-icon>
        </button>
      
      </div>
    </div>
  );
};

Projects.propTypes = {
  goBackToMenu: PropTypes.func.isRequired,
};

export default Projects;