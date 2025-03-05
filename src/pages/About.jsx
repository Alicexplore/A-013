import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const About = () => {
    return (
      <div className="flex flex-col items-center w-full h-full text-white uppercase p-[30px] md:p-10">
        <motion.h1
          className="text-[10px] md:text-sm font-roboto mt-1 md:mt-2"
          initial="hidden"
          whileInView="show"
          variants={fadeIn(0.5)}
          viewport={{ once: true, amount: 0 }}
        > 
          about
        </motion.h1>
            <div className="space-y-3 md:space-y-6">
                <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(1)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  Hi, I&rsquo;m Alice Bergonhe, I&rsquo;m a frontend developer, 
                  I&rsquo;ve been coding since 2022 and haven&rsquo;t looked back since.
                 </motion.p>
                 <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(1.5)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  I focus a lot on user experience, as I believe it’s essential to engage users and keep them hooked. 
                  I also strive every day to write clean, performant code, and that’s an area I’m eager to keep improving.
                 </motion.p>
                 <motion.p
                  className="text-[7px] md:text-[11px] mt-8 md:mt-12 text-justify"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(2)}
                  viewport={{ once: true, amount: 0 }}
                > 
                  After a year as a frontend engineer apprentice at Qonto, I’m now looking for a frontend developer role in a company 
                  that values my work and helps me grow. If this resonates with you, feel free to reach out! ツ
                 </motion.p>
            </div>
      </div>
    )
  }
  
  export default About
