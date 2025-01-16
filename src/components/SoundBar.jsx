const SoundBar = () => {
  return (
    <div className="absolute top-[10px] md:top-[14px] w-full h-full flex justify-center">
        <div className="bg-[#d9d9d9] w-3/5 h-[20px] md:h-[30px] rounded-b-md shadow-[inset_-1px_-1px_2px_#161616,0px_4px_8px_#000] 
        md:shadow-[inset_-2px_-2px_2px_#939393,0px_4px_8px_#000] relative">
            <div className="absolute flex items-center justify-center w-full h-full gap-[5px] md:gap-2">              
                <span className="w-[40px] md:w-[60px] h-[4px] md:h-[6px] bg-[#222] rounded-full"></span>
                <span className="w-[4px] md:w-[6px] h-[4px] md:h-[6px] bg-[#222] rounded-full"></span>             
            </div>
        </div>
    </div>
  )
}

export default SoundBar