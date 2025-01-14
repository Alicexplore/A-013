import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const LoadingBar = () => {
  const controls = useAnimation();
  const logoControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      if (!isMounted) return;

      await controls.start({
        opacity: 1,
        transition: { delay: 0.5, duration: 0 },
      });

      if (!isMounted) return;

      await logoControls.start({
        clipPath: "inset(0% 0 0% 0)",
        opacity: 1,
        transition: { delay: 0.5, duration: 0.75, ease: "easeInOut" },
      });

      if (!isMounted) return;

      await controls.start({
        width: ["0%", "30%", "30%", "50%", "70%", "70%", "100%"],
        transition: {
          duration: 3,
          times: [0, 0.2, 0.3, 0.5, 0.7, 0.85, 1],
          ease: "easeInOut",
        },
      });

      if (!isMounted) return;

      await Promise.all([
        controls.start({ opacity: 0, transition: { duration: 0.5 } }),
        logoControls.start({ opacity: 0, transition: { duration: 0.5 } }),
      ]);
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, [controls, logoControls]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
    
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          className="w-[200px] md:w-[300px]"
          src="./images/LogoHorizontalPower.svg"
          alt="Logo"
          initial={{ clipPath: "inset(50% 0 50% 0)", opacity: 0 }}
          animate={logoControls}
          style={{
            clipPath: "inset(0% 0 0% 0)", 
          }}
        />
      </div>

      <div className="absolute bottom-5 w-full px-10">
        <div className="relative h-4 w-full bg-transparent">
          <motion.div
            className="h-[6px] bg-[#d9d9d9] blur-xxxs rounded-lg"
            initial={{ opacity: 0, width: "0%" }}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
