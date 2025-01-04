const MetalPlate = () => {
  return (
    <div className="relative col-span-2 row-span-1 border-[0.5px] md:border-[1px] border-[#000] bg-[#000] pointer-events-none">
      <div className="absolute inset-[1px] rounded-sm flex items-center justify-center"
      style={{ background: 'conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8)' }}> 
        <div className="absolute flex flex-col items-center">
        <h1 className=" font-Roboto tracking-widest text-[#222] text-[8px] md:text-[11px] uppercase">a-013 / v1</h1>
        <h2 className="font-Roboto tracking-widest text-[#222] text-[5px] md:text-[7px] uppercase">serial number 13051984</h2>
        <h3 className="font-Roboto tracking-widest text-[#222] text-[5px] md:text-[7px] uppercase">alice b. / folio 2025</h3>
        </div>

        <div className="w-full h-full flex flex-col justify-between p-[3px] md:p-1">

          <div className="flex flex-row justify-between">

          <div className="h-[5px] w-[5px] md:h-[8px] md:w-[8px] bg-transparent rounded-full border-[0.5px] md:border-[1px]
          border-[#494949] flex items-center justify-center rotate-45 relative">
            <div className="absolute w-full h-[0.5px] bg-[#6e6e6e] top-1/2 left-1/2 transform -translate-x-1/2
             -translate-y-1/2"></div>
          </div>

          <div className="h-[5px] w-[5px] md:h-[8px] md:w-[8px] bg-transparent rounded-full border-[0.5px] md:border-[1px]
          border-[#494949] flex items-center justify-center rotate-90 relative">
            <div className="absolute w-full h-[0.5px] bg-[#6e6e6e] top-1/2 left-1/2 transform -translate-x-1/2
             -translate-y-1/2"></div>
          </div>
          </div>

          <div className="flex flex-row justify-between">
          <div className="h-[5px] w-[5px] md:h-[8px] md:w-[8px] bg-transparent rounded-full border-[0.5px] md:border-[1px] 
          border-[#494949] flex items-center justify-center relative">
            <div className="absolute w-full h-[0.5px] bg-[#6e6e6e] top-1/2 left-1/2 transform -translate-x-1/2
             -translate-y-1/2"></div>
          </div>

          <div className="h-[5px] w-[5px] md:h-[8px] md:w-[8px] bg-transparent rounded-full border-[0.5px] md:border-[1px] 
          border-[#494949] flex items-center justify-center -rotate-45 relative">
            <div className="absolute w-full h-[0.5px] bg-[#6e6e6e] top-1/2 left-1/2 transform -translate-x-1/2
             -translate-y-1/2"></div>
          </div>

          </div>

        </div> 
      </div>
    </div>
  )
}

export default MetalPlate