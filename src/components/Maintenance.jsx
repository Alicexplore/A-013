const Maintenance = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black font-Roboto bg-opacity-30 z-50 uppercase p-10">
        <div className="bg-[#d9d9d9] w-[300px] h-[220px] md:w-[400px] md:h-[320px] p-6 rounded-lg shadow-lg text-center
         items-center justify-center flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-black md:mb-1">Welcome</h1>
            <h2 className="text-[10px] md:text-sm text-gray-700 mb-3 md:mb-6">(thanks for your curiosity)</h2>
            <p className="text-gray-600 text-[9px] md:text-[13px] mb-3 text-justify p-2">
              A-013 is my new personal website, a neo-futuristic mini computer built to showcase my passion for Frontend
              Development, A-013 will be launched on the <strong>21st of January</strong>, hope to see you then 🚀
            </p>
            <div className="bg-[#222] text-white px-6 py-2 w-2/4 rounded-lg cursor-not-allowed mt-auto mx-auto
            text-[8px] md:text-sm md:mt-3"
              title="Fake one buddy 🫶">
              🖖 See you soon 
            </div>
        </div>
    </div>
  );
};

export default Maintenance;

