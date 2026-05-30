import { motion } from 'framer-motion';

const About = () => {

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
        <h1 className="px-4">who am i</h1>
        <span className="flex-1 h-[1px] bg-white"></span>
      </div>

      <div className="flex-1 mt-6 md:mt-8 overflow-y-auto text-[9px] md:text-[12px] space-y-6 md:space-y-8 font-normal">
        <p className="leading-relaxed">
        Hi, my name is Alice Bergonhe and I’m a frontend developer with a passion for crafting smooth, interactive, 
        and user-friendly interfaces.
        </p>
        <p className="leading-relaxed">
        Since discovering web development in 2022, I’ve enjoyed turning ideas into thoughtful digital experiences, balancing functionality, design, and attention to detail.
        </p>
        <p className="leading-relaxed">
        I mainly work with React, TypeScript, Tailwind CSS or pure CSS, and Framer Motion.
        </p>
        <p className="leading-relaxed">
        When I’m not coding, you’ll usually find me building something, exploring a new idea, or diving into my latest obsession.
        </p>
        <p className="leading-relaxed">
        I love to talk around web development, feel free to reach out! ツ
        </p>
      </div>

      <div className='absolute bottom-2 md:bottom-3 text-md md:text-2xl left-1/2 -translate-x-1/2 flex items-center justify center'>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>

    </motion.div>
  );
};

export default About;
