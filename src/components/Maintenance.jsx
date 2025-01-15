const Maintenance = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black font-Roboto bg-opacity-30 z-50 uppercase"
    >
      <div className="bg-[#d9d9d9] w-[90%] md:w-[400px] p-6 rounded-lg shadow-lg text-center flex flex-col">
        <h1 className="text-2xl font-bold text-black mb-1">Welcome</h1>
        <h2 className="text-sm text-gray-700 mb-6">(thanks for your curiosity)</h2>
        <p className="text-gray-600 text-[13px] mb-7 text-justify p-3">
          A-013 is my new personal website, a neo-futuristic mini computer built to showcase my passion for Frontend
          Development, A-013 will be launched on the <strong>21st of January</strong>, hope to see you then 🚀
        </p>

        <div
          className="bg-[#222] text-white px-6 py-2 w-2/3 rounded-lg cursor-not-allowed mt-auto mx-auto"
          title="Fake one buddy 🫶">
          🖖 See you soon 
        </div>
      </div>
    </div>
  );
};

export default Maintenance;

