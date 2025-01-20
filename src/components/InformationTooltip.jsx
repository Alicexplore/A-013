const InformationTooltip = () => {
  return (
<div className="absolute top-5 right-5 md:top-10 md:right-10 flex flex-col items-end font-Roboto 
    text-[#222] z-40 cursor-pointer group">
    <span className="text-[12px] md:text-lg -mt-[2px] md:-mt-2">
        <ion-icon name="information-circle"></ion-icon>
    </span>
    <div className="opacity-0 group-hover:opacity-100 w-[50%] md:w-1/3 bg-[#222] rounded-sm mt-2 transition-opacity duration-1000 
        ">
        <p className="m-[9px] md:m-4 text-[#d9d9d9] text-[7px] md:text-[11px] uppercase">
            A-013 evolves continuously, allowing me to grow alongside it, 
            meaning the A-013 you discover today may not be the same tomorrow. 
        </p>
    </div>
</div>


  )
}

export default InformationTooltip