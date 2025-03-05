import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const Instructions = () => {
    return (
      <div className="flex flex-col items-center w-full h-full text-white uppercase p-[30px] md:p-10">
        <motion.h1
          className="text-[10px] md:text-sm font-roboto mt-1 md:mt-2"
          initial="hidden"
          whileInView="show"
          variants={fadeIn(0.5)}
          viewport={{ once: true, amount: 0 }}
        > 
          welcome
        </motion.h1>
            <div className="space-y-3 md:space-y-5">
                <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(1)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  Thank you for being here and taking the time to explore!
                 </motion.p>
                <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(1.5)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  Please use the arrow keys to navigate through the console and find out a little more about me and my work.
                 </motion.p>
                 <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(2)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  Please also note that A-013 is equipped with a battery that decrements over time, causing the console to turn off if left unused. Remember to press the recharge key to refill the battery if you don&rsquo;t want the console to turn off.
                 </motion.p>
                 <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(2.5)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  Hope you enjoy the ride! I love receiving feedback, so feel free to reach out and share your 
                  thoughts on my work! ツ
                 </motion.p>
            </div>
      </div>
    )
  }
  
  export default Instructions