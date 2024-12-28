import { motion } from "framer-motion";

const Enter = () => {
  return (
    <div className="w-full h-svh overflow-hidden relative">
      <div
        className="absolute bottom-[400px] sm:bottom-20 right-[400px] md:right-[300px] lg:right-[200px] bg-gradient-to-bl from-white/10 to-transparent 
        pointer-events-none z-50 blur-xs overflow-hidden rounded-md"
        style={{
          width: "200%",
          height: "200%",
          transform: "rotate(-45deg)",
        }}
      />

      <motion.div
        className="relative h-full w-full"
        initial={{
          backgroundColor: "#000",
          boxShadow: "inset -4px -4px 10px #000, inset 4px 4px 10px #000",
        }}
        animate={{
          backgroundColor: "#222",
          boxShadow: "inset -10px -10px 16px #111, inset 10px 10px 16px #111",
        }}
        transition={{
          delay: 2.5,
          duration: 0.5,
          ease: "easeIn",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[#000]/60 to-transparent rounded-md"></div>

        <div className="w-full h-full flex items-center justify-center relative z-10">
          <motion.img
            src="./images/LogoHorizontal.svg"
            width={600}
            className="relative p-10"
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: {
                duration: 2,
                delay: 3.5,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Enter;
