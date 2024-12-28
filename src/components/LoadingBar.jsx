import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const LoadingBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        transition: { delay: 1, duration: 0 },
      });
      await controls.start({
        width: ["0%", "30%", "30%", "50%", "70%", "70%", "100%"],
        transition: {
          duration: 5,
          times: [0, 0.2, 0.3, 0.5, 0.7, 0.85, 1],
          ease: "easeInOut",
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      controls.start({
        opacity: 0,
        transition: { duration: 0 },
      });
    };

    sequence();
  }, [controls]);

  return (
    <div className="absolute bottom-0 w-full flex items-center justify-center p-10">
      <div className="w-full h-4 relative flex items-center">
        <motion.div
          className="h-[6px] bg-[#222] blur-xxxs w-[200px] rounded-sm"
          initial={{ opacity: 0, width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default LoadingBar;
