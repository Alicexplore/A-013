import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const Maintenance = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#222] bg-opacity-50 z-50 p-10
    pointer-events-none">
      <div className="w-[300px] h-[240px] md:w-[400px] md:h-[320px] p-6 rounded-md md:rounded-lg text-center items-center 
      justify-center flex flex-col mb-[120px] md:mb-[160px]">
        
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-[#d9d9d9] mb-3 md:mb-5 tracking-wide"
          initial="hidden"
          whileInView="show"
          variants={fadeIn(1)}
          viewport={{ once: true, amount: 0 }}
        > 
          Hi
        </motion.h1>

        <div className="text-[#d9d9d9]/80 font-light text-[9px] md:text-[13px] text-center p-2 md:p-3 mb-4 md:mb-5 space-y-1
        uppercase ">
          <motion.p
            className="tracking-tighter"
            initial="hidden"
            whileInView="show"
            variants={fadeIn(2)}
            viewport={{ once: true, amount: 0 }}
          >
            A-013 is a neo-futuristic mini computer built
          </motion.p>

          <motion.p
            className="tracking-[0.023rem] md:tracking-[0.03rem]"
            initial="hidden"
            whileInView="show"
            variants={fadeIn(2.6)}
            viewport={{ once: true, amount: 0 }}
          >
            to showcase my passion for Frontend
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={fadeIn(3.2)}
            viewport={{ once: true, amount: 0 }}
          >
            Development, it will be launched on the
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className="flex items-center justify-center text-center space-x-1"
          >
            <motion.p
              initial="hidden"
              whileInView="show"
              variants={fadeIn(3.8)}
              viewport={{ once: true, amount: 0 }}
              className="inline font-bold"
            >
              9th of March.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              variants={fadeIn(4.8)}
              viewport={{ once: true, amount: 0 }}
              className="inline"
            >
              Hope to see you then ↗
            </motion.p>
          </motion.div>
        </div>

        <motion.img
          src="./images/logo-white.svg"
          alt="logo white"
          className="-mt-1 w-[35px] md:w-[50px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 6.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Maintenance;
