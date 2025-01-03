// import { motion } from "framer-motion";

const Lights = () => {
  return (
    <div className="col-span-1 row-span-2 flex items-center justify-center">
      <div className="w-full h-full relative flex items-center bg-black border-[0.5px] md:border-[1px] border-black">
        <div className="absolute inset-[1px] bg-black rounded-sm">
        {/* <div className="absolute inset-0 bg-gradient-to-tl from-[#000]/60 to-transparent rounded-md"></div> */}
            <div className="grid grid-rows-10 h-full w-full gap-[1.5px] md:gap-[2px] bg-black">
            {Array(10).fill(null).map((_, index) => (
                
                <div 
                  key={index}
                  className="rounded-[4px] md:rounded-[1px] bg-[#d4d4cf] flex items-center justify-center my-[0.5px] mx-[0.5px]
                  shadow-[inset_3px_3px_0px_#fff,inset_-3px_-3px_0px_#979797,3px_3px_6px_#222]">
                </div>
            ))}
            </div>        
        </div>
      </div>
    </div> 
  )
}

export default Lights