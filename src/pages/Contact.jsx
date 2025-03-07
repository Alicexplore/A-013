import { motion } from 'framer-motion';
import ScrambleText from "../components/ScrambleText"

const Contact = () => {
  return (
    <motion.div
      className="flex flex-col w-full h-full uppercase p-[32px] md:p-12 overflow-hidden z-50 text-white font-Roboto cursor-default relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0 }}
    >
      <div className="flex items-center justify-between w-full text-[10px] md:text-sm text-center font-medium">
        <span className="flex-1 h-[1px] bg-white"></span>
        <h1 className="px-4">contact</h1>
        <span className="flex-1 h-[1px] bg-white"></span>
      </div>

      <div className="flex-1 mt-6 md:mt-8 overflow-y-auto text-[9px] md:text-[12px] space-y-6 md:space-y-8 font-normal">
        <div className="leading-relaxed flex flex-col">
          <h2>alice bergonhe</h2>
          <p>paris</p>
        </div>
        <div className="leading-relaxed flex flex-col">
          <a href="mailto:alicebergonhe@gmail.com">
            <span className="inline-block">
              <ScrambleText
                text="alicebergonhe@gmail.com"
                scrambleDuration={2.5}
              />
            </span>
          </a>
        </div>
        <div className="leading-relaxed flex flex-col">
          <a href="https://www.linkedin.com/in/alicebergonhe/" target="_blank">
            <span className="inline-block">
              <ScrambleText
                text="linkedin"
                scrambleDuration={1.5}
              />
            </span>
          </a>
          <a href="https://github.com/Alicexplore" target="_blank">
            <span className="inline-block">
              <ScrambleText
                text="github"
                scrambleDuration={1.3}
              />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
