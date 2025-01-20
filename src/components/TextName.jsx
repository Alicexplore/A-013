import ScrambleText from "./ScrambleText"

const TextName = () => {
  return (
    <div className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col font-Roboto text-[9px] md:text-xs 
    tracking-widest text-[#222] z-40">
        <div className="pointer-events-none mix-blend-difference">
            <h1>ALICE BERGONHE</h1>
            <h1>FRONTEND DEVELOPER</h1>
        </div>
        <div className="mt-3 sm:mt-4">
            <ScrambleText
              className="text-xs"
              text="/ LINKEDIN"
              scrambleDuration={1.5}
            />
            <ScrambleText
              className="text-xs"
              text="/ GITHUB"
              scrambleDuration={1.5}
            />
        </div>
    </div> 
  )
}

export default TextName