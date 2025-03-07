import { motion } from 'framer-motion';

const Projects = () => {

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
        <h1 className="px-4">projects</h1>
        <span className="flex-1 h-[1px] bg-white"></span>
      </div>

      <div className="flex-1 mt-6 md:mt-8 overflow-y-auto text-[9px] md:text-[12px] space-y-6 md:space-y-8 font-normal">
        <div className="flex flex-col gap-4 md:gap-6 self-start w-full">
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/Alicexplore/A-013"
              target="_blank"
              rel=""
              className="text-[28px] md:text-[36px] -mt-[2px]">
                <span>
                  <ion-icon name="document-sharp"></ion-icon>
                </span>
            </a>
            <div className="flex flex-col text-left gap-1">
            <a
              href="https://github.com/Alicexplore/A-013"
              target="_blank"
              className="underline underline-offset-[3px] md:underline-offset-4">
                A-013 / neo-futuristic mini console
            </a>
              <p>react tailwind framer-motion vite / 2025</p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/Alicexplore/portfolio2024"
              target="_blank"
              rel=""
              className="text-[28px] md:text-[36px] -mt-[2px]">
                <span>
                  <ion-icon name="document-sharp"></ion-icon>
                </span>
            </a>
            <div className="flex flex-col text-left gap-1">
            <a
              href="https://github.com/Alicexplore/portfolio2024"
              target="_blank"
              className="underline underline-offset-[3px] md:underline-offset-4">
                anderson&rsquo;s portfolio
            </a>
              <p>react tailwind framer-motion vite / 2024</p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/Alicexplore/The_Famiglia_Project"
              target="_blank"
              className="text-[28px] md:text-[36px] -mt-[2px]">
                <span>
                  <ion-icon name="document-sharp"></ion-icon>
                </span>
            </a>
            <div className="flex flex-col text-left gap-1">
            <a
              href="https://github.com/Alicexplore/The_Famiglia_Project"
              target="_blank"
              className="underline underline-offset-[3px] md:underline-offset-4">
                famiglia / vegan restaurant
            </a>
              <p>react tailwind vite / 2023</p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/Alicexplore/The_Sneakers_Project"
              target="_blank"
              className="text-[28px] md:text-[36px] -mt-[2px]">
                <span>
                  <ion-icon name="document-sharp"></ion-icon>
                </span>
            </a>
            <div className="flex flex-col text-left gap-1">
            <a
              href="https://github.com/Alicexplore/The_Sneakers_Project"
              target="_blank"
              className="underline underline-offset-[3px] md:underline-offset-4">
                the sneakers project
            </a>
              <p>react tailwind vite / 2023</p>
            </div>
          </div>
        </div>
      </div>
</motion.div>
  );
};

export default Projects;

