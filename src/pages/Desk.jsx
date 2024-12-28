const Desk = () => {
    return (
      <div className="absolute h-full w-full">
        <div className="absolute h-full w-full flex items-center justify-center">
          <img
            className="block md:hidden h-full w-full p-10"
            src="./images/LogoVertical.svg"
            alt="logo A-013"
          />
          <img
            className="hidden md:block h-full w-full p-10"
            src="./images/LogoHorizontal.svg"
            alt="logo A-013"
          />
        </div>
        <div className="absolute h-full w-full bg-gradient-to-tr from-[#edede6]/50 to-[#d1d1cb]/80 inset-0">
          <div className="absolute w-full h-full backdrop-blur-sm bg-white/30 overflow-hidden"></div>
        </div>
      </div>
    );
  };
  
  export default Desk;
  