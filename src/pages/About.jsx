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
          Hi, my name is Alice Bergonhe and I’m a frontend developer. I’ve been coding since 2022 and haven’t looked back since.
        </p>
        <p className="leading-relaxed">
          I focus a lot on user experience, as I believe it’s essential to engage users and keep them hooked.
          I also strive every day to write clean, performant code, and that’s an area I’m eager to keep improving.
        </p>
        <p className="leading-relaxed">
          I’m also passionate about creating sleek and interactive UIs with smooth animations,
          using technologies like React, Tailwind CSS, and Framer Motion.
        </p>
        <p className="leading-relaxed">
          When I’m not coding, I like to focus on my NFT collection, a dystopian world that I like to immerse myself in to take my mind off things.
        </p>
        <p className="leading-relaxed">
          After a year as a frontend engineer apprentice at Qonto, I’m now looking for a frontend developer role in a company
          that values my work and helps me grow. If this resonates with you, feel free to reach out! ツ
        </p>
      </div>
    </motion.div>
  );
};

export default About;
