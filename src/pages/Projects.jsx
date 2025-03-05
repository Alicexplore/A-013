const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full h-full text-white uppercase p-10 overflow-hidden z-50">
      <h1 className="text-xs md:text-sm uppercase mt-2 pointer-events-none">
        projects
      </h1>
      <div className="grid grid-cols-3 mt-8 md:mt-12 w-full h-[70%] gap-4">
      <div className="col-span-1 cursor-pointer border-[#d9d9d9] border-2 rounded-md hover:bg-white/70 hover:duration-1000
      hover:transition-all ease-in-out transition-transform">
          
          </div>
        <div className="col-span-1 cursor-pointer border-[#d9d9d9] border-2 rounded-md">
          
        </div>
        <div className="col-span-1 cursor-pointer border-[#d9d9d9] border-2 rounded-md">
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
