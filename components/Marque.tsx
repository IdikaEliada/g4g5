import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { Mic2, Feather, FileText, Zap, Video, Briefcase, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const categories = [
  {
    icon: Mic2,
    name: "Debate",
    tag: "Individual / Team of 2",
    body: "Argue for or against motions on leadership, tech & innovation. Judged on logic, evidence, delivery, and poise.",
  },
  {
    icon: Feather,
    name: "Spoken Word",
    tag: "3–5 min performance",
    body: "Deliver an original piece on leadership & transformation. Judged on creativity, emotional impact, and stage presence.",
  },
  {
    icon: FileText,
    name: "Essay Writing",
    tag: "1,000–1,500 words",
    body: "Submit an essay on industry leadership & innovation. Top entries may be published. Judged on research, clarity & originality.",
  },
  {
    icon: Zap,
    name: "Quiz",
    tag: "Buzzer-style",
    body: "Fast-paced rounds covering general knowledge, current affairs, entrepreneurship, tech, and FUTO-relevant topics.",
  },
  {
    icon: Video,
    name: "Content Creation",
    tag: "Reel / TikTok / Carousel",
    body: "Produce short-form content capturing 'From Potential to Power.' Judged on creativity, production quality & message clarity.",
  },
  {
    icon: Briefcase,
    name: "Business Pitch",
    tag: "5 min + 3 min Q&A",
    body: "Present your business idea to investors. Focus: market viability, revenue model, scalability, and execution plan.",
  },
  {
    icon: Rocket,
    name: "Tech Pitch",
    tag: "5 min + 3 min Q&A",
    body: "Pitch your tech solution or startup. Focus: technical innovation, problem-solving impact, feasibility & future potential.",
  },
]

const firstRow = categories.slice(0, Math.ceil(categories.length / 2))
const secondRow = categories.slice(Math.ceil(categories.length / 2))
const thirdRow = categories.slice(0, categories.length / 2)
const fourthRow = categories.slice(categories.length / 2)

const CategoryCard = ({
  icon: Icon,
  name,
  tag,
  body,
}: {
  icon: LucideIcon
  name: string
  tag: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/10 bg-gray-950/10 hover:bg-gray-950/5",
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Icon size={24} className="shrink-0 dark:text-white" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{tag}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white/70">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((cat) => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((cat) => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
    </div>
  )
}

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <CategoryCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <CategoryCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <CategoryCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <CategoryCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}