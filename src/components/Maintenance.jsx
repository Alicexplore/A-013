const Maintenance = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#222] font-Roboto bg-opacity-60 z-50 uppercase p-10">
        <div className="bg-[#d9d9d9] w-[300px] h-[240px] md:w-[400px] md:h-[320px] p-6 rounded-lg shadow-lg text-center
         items-center justify-center flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
              <span className="relative -top-[1.5px]">✌︎</span> Welcome <span className="relative -top-[1.5px]">✌︎</span>
            </h1>
            <p className="text-[#222]/80 text-[9px] md:text-[13px] text-justify p-2 md:p-3 mb-4 md:mb-5 tracking-tight">
              A-013 is my new personal website, a neo-futuristic mini computer built to showcase my passion for Frontend
              Development, A-013 will be launched on the <strong>21st of January</strong>.<br />Hope to see you then 
              <span className="absolute text-sm md:text-xl ml-[4px] md:ml-[6px] -mt-[3px] md:-mt-[4px]">☺︎</span>
            </p>
            <div className="bg-[#222] text-white px-6 py-2 w-2/4 rounded-lg cursor-not-allowed 
            text-[8px] md:text-sm"
              title="Fake button buddy 🫶">
              See you soon 
            </div>
        </div>
    </div>
  );
};

export default Maintenance;

