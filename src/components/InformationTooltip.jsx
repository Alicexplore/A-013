const InformationTooltip = () => {
  return (
    <div className="absolute top-5 right-5 md:top-10 md:right-10 flex flex-col font-Roboto 
    tracking-widest text-[#222] z-40 pointer-events-none">
        <span className="text-[12px] md:text-lg -mt-[2px] md:-mt-2"><ion-icon name="information-circle"></ion-icon></span>
    </div>
  )
}

export default InformationTooltip