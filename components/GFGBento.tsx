import { FileTextIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon, TrophyIcon, MapPinIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { HeroList } from "@/components/HeroList"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"

const categories = [
  { name: "Debate", fee: "₦3,000", tag: "Individual / Team of 2" },
  { name: "Spoken Word", fee: "₦3,000", tag: "3–5 min performance" },
  { name: "Essay Writing", fee: "₦3,000", tag: "1,000–1,500 words" },
  { name: "Quiz", fee: "₦3,000", tag: "Buzzer-style" },
  { name: "Content Creation", fee: "₦3,000", tag: "Reel / TikTok / Carousel" },
  { name: "Business Pitch", fee: "₦4,000", tag: "5 min + 3 min Q&A" },
  { name: "Tech Pitch", fee: "₦4,000", tag: "5 min + 3 min Q&A" },
]

const features = [
  {
    Icon: TrophyIcon,
    name: "Going for Gold 5.0",
    description:
      "The Quantum Leap — From Potential to Power. FUTO's premier student competition, 2026.",
    href: "/register",
    cta: "Register now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:25s]"
      >
        {categories.map((cat, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {cat.name}
              </figcaption>
              <span className="text-xs text-muted-foreground">{cat.tag}</span>
            </div>
            <blockquote className="mt-2 text-xs font-semibold text-yellow-400">
              {cat.fee}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "What You Win",
    description:
      "Cash prizes, brand new laptops, smartphones, and access to exclusive global mentorship programs.",
    href: "#prizes",
    cta: "See prizes",
    className: "col-span-3 lg:col-span-2",
    background: (
      <HeroList className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Register & Pay",
    description:
      "Pay to Zenith Bank · 2410648511 (Okafor Uchechukwu Benedict). Include name + category in narration, then send proof to 09059113423 or 07043570945.",
    href: "/register",
    cta: "Register now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        vertical
        className="absolute top-4 right-2 h-[300px] w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105"
      >
        {categories.map((cat, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-full cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-gray-950/[.1] bg-gray-950/[.01]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]",
            )}
          >
            <div className="flex items-center justify-between">
              <figcaption className="text-sm font-medium dark:text-white">
                {cat.name}
              </figcaption>
              <span className="text-xs font-semibold text-yellow-400">{cat.fee}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{cat.tag}</p>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: MapPinIcon,
    name: "Venue",
    description: "Federal University of Technology, Owerri · 2026.",
    className: "col-span-3 lg:col-span-1",
    href: "#venue",
    cta: "Get directions",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <MapPinIcon strokeWidth={0.5} className="size-40 text-yellow-400" />
      </div>
    ),
  },
]

export function GFGBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}