import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const Instructions = () => {
    return (
      <div className="flex flex-col items-center w-full h-full text-white uppercase p-12">
        <motion.h1
          className="text-xs md:text-sm font-roboto mt-2"
          initial="hidden"
          whileInView="show"
          variants={fadeIn(1)}
          viewport={{ once: true, amount: 0 }}
        > 
          instructions
        </motion.h1>
            <div className="space-y-6">
                <motion.p
                  className="text-[8px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(2)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  please use directions buttons to navigate threw the console and discover more about me and my work.
                 </motion.p>
                 <motion.p
                  className="text-[8px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(3)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  be careful, this console is working with a battery that handle to power off if you are not 
                 </motion.p>
            </div>
      </div>
    )
  }
  
  export default Instructions