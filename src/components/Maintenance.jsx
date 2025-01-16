import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const Maintenance = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#222] bg-opacity-90 z-50 uppercase p-10">
      <div className="w-[300px] h-[240px] md:w-[400px] md:h-[320px] p-6 rounded-md md:rounded-lg text-center items-center justify-center flex flex-col">
        
        <motion.h1
          className="text-xl md:text-2xl font-bold text-[#d9d9d9] mb-3 md:mb-5 font-Roboto tracking-wider"
          initial="hidden"
          whileInView="show"
          variants={fadeIn(1)}
          viewport={{ once: true, amount: 0 }}
        >
          Welcome
        </motion.h1>

        <div className="text-[#d9d9d9]/80 text-[9px] md:text-[13px] text-center p-2 md:p-3 mb-4 md:mb-5 space-y-1">
          <motion.p
            className="tracking-tighter font-light"
            initial="hidden"
            whileInView="show"
            variants={fadeIn(2)}
            viewport={{ once: true, amount: 0 }}
          >
            A-013 is a neo-futuristic mini computer built
          </motion.p>

          <motion.p
            className="tracking-wide font-light"
            initial="hidden"
            whileInView="show"
            variants={fadeIn(2.6)}
            viewport={{ once: true, amount: 0 }}
          >
            to showcase my passion for Frontend
          </motion.p>

          <motion.p
            className='font-light'
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
              className="inline"
            >
              <strong>28th of January.</strong>
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              variants={fadeIn(4.8)}
              viewport={{ once: true, amount: 0 }}
              className="inline font-light"
            >
              Hope to see you then ❤︎
            </motion.p>
          </motion.div>
        </div>

        <motion.img
          src="./images/logo-white.svg"
          alt="logo white"
          className="-mt-1 w-[50px] md:w-[70px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 6.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Maintenance;
