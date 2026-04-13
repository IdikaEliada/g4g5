import { TextAnimate } from "@/components/ui/text-animate"
import { AuroraText } from "@/components/ui/aurora-text"
import { NumberTicker } from "@/components/ui/number-ticker"
import { AnimatedHexPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { HeroList } from "@/components/HeroList"
import { TypingAnimation } from "@/components/ui/typing-animation"
import Link from "next/link"
import { ShinyButton } from "@/components/ui/shiny-button"
import { PixelImage } from "@/components/ui/pixel-image"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export default function Hero() {
  return (
    <>
      <AnimatedHexPattern
        className={cn(
          "mask-[linear-gradient(to_bottom_left,#F8F8FF_60,transparent,transparent)]"
        )}
      />
      <div className="flex items-center justify-center relative">
        <div className="flex flex-col justify-star items-center md:items-start gap-6 text-center  sm:text-left">
          <h1 className=" text-[clamp(3rem,10vw,6rem)] font-heading text-7xl font-semibold text-black pb-2 max-w-4xl">
            <TypingAnimation showCursor={false} startOnView  className="-tracking-tighter">
              Going for
            </TypingAnimation>{" "}
            <span className="relative inline-block tracking-tight text-[clamp(3.25rem,10.5vw,7.25rem)]">

              <AuroraText>Gold</AuroraText> {" "}
              <NumberTicker value={5.0} decimalPlaces={1} />
            </span>
          </h1>
          <TextAnimate animation="blurInUp" by="word" className="max-w-lg text-lg md:text-2xl line-clamp-2 leading-8 text-zinc-950 px-16 md:px-0 ">
            The Quantum Leap - From Potential to Power: Scaling the Next Generation of Industry Leaders

          </TextAnimate>

          <div className="flex w-full items-center justify-center md:justify-start font-accent gap-4 mt-6">
            <Link href="/register">
              <ShinyButton className={cn("tracking-wider justify-center items-center flex-1 text-[rgb(255,255,255,90%)]  rounded-2xl hover:border-2 px-4 md:px-8 lg:px-16 border-dashed border-alt bg-black py-4 font-semibold uppercase transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:bg-accent hover:shadow-[4px_4px_0px_black] hover:text-black hover:border-dark active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none")}>
                Register Now
              </ShinyButton>
            </Link>
            <ShinyButton className="py-4 text-[rgb(0,0,0,65%)]">
              <a href="#learn-more">Learn More</a>
            </ShinyButton>
          </div>

          <div className="lg:hidden mask-[linear-gradient(to_bottom,#F8F8FF_75,transparent)]">
            <PixelImage src="/sen-gen.svg" grid="8x8" />
          </div>
        </div>
        <div className="hidden lg:block h-fit  mask-[linear-gradient(to_bottom,#F8F8FF_80%,transparent, transparent)]">
          <HeroList className="" />

        </div>
        <div className="absolute hidden lg:block right-0 mask-[linear-gradient(to_bottom,#F8F8FF_60%,transparent)]">
          <PixelImage src="/sen-gen.svg" grid="8x8" />
        </div>


      </div>
      <div className="lg:hidden py-8">
        <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl">
          <ScrollVelocityRow baseVelocity={10} direction={1}>
            #TheQuantumLeap#G4G5.0
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={10} direction={-1}>
            #TheQuantumLeap#G4G5.0 
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </>
  )
}