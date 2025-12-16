import { motion } from "framer-motion";

const Instructions = () => {

  return (
    <motion.div
      className="flex flex-col w-full h-full uppercase p-[22px] md:p-12 overflow-hidden z-50 text-white font-Roboto cursor-default relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0 }}
    >
      <div className="flex items-center justify-between w-full text-[8px] md:text-sm text-center font-medium">
        <span className="flex-1 h-[1px] bg-white"></span>
        <h1 className="px-4">welcome</h1>
        <span className="flex-1 h-[1px] bg-white"></span>
      </div>

      <div className="flex-1 mt-4 md:mt-8 overflow-y-auto text-[7px] md:text-[12px] space-y-4 md:space-y-8 font-normal">
        <p className="leading-relaxed">
          Thank you for being here and taking the time to explore A-013!
        </p>
        <p className="leading-relaxed">
          Please use the big arrow keys to navigate through the console and
          find out a little more about me and my work.
        </p>
        <p className="leading-relaxed">
          As you can see A-013 is equipped with a battery that decrements over
          time, causing the console to turn off if left unused.
        </p>
        <p className="leading-relaxed">
          Remember to press the recharge key to refill the battery if you
          don&rsquo;t want the console to turn off.
        </p>
        <p className="leading-relaxed">
          A-013 was built to grow with me. It’s not just a project, but a space
          where I continuously refine, optimize, and push my skills further.
        </p>
        <p className="leading-relaxed">
          The next major update will be a full migration to TypeScript.
        </p>
        <p className="leading-relaxed">
          The A-013 you’re visiting today may not be the same one tomorrow!
        </p>
        <p className="leading-relaxed">
          Hope you enjoy the ride! I love receiving feedback, so feel free to
          reach out and share your thoughts on my work! ツ
        </p>
      </div>

<div className='absolute bottom-[5px] md:bottom-3 text-[12px] md:text-2xl left-1/2 -translate-x-1/2 flex items-center justify center'>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>

    </motion.div>
  );
};

export default Instructions;
