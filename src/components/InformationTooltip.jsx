const InformationTooltip = () => {
  return (
<div className="absolute top-5 right-5 md:top-10 md:right-10 flex flex-row items-center font-Roboto 
    text-[#222] z-40 cursor-pointer group gap-3">
    <div className="opacity-0 group-hover:opacity-100 py-2 md:py-3 px-3 md:px-4 bg-[#222] rounded-sm transition-opacity 
    duration-1000 ease-in-out">
        <p className="text-[#d9d9d9] text-[7px] md:text-[11px] uppercase">
          press power button
        </p>
    </div>
    <span className="text-[12px] md:text-lg ">
        <ion-icon name="information-circle"></ion-icon>
    </span>
</div>


  )
}

export default InformationTooltip