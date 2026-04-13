"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Essay submitted",
    description: "Going for Gold 5.0 · Essay Writing",
    time: "2m ago",
    icon: "✍️",
    color: "#1E86FF",
  },
  {
    name: "Debate registered",
    description: "Going for Gold 5.0 · Debates",
    time: "4m ago",
    icon: "🎙️",
    color: "#FF3D71",
  },
  {
    name: "Slot claimed",
    description: "Going for Gold 5.0 · Spoken Word",
    time: "7m ago",
    icon: "🔥",
    color: "#FF6B35",
  },
  {
    name: "Team registered",
    description: "Going for Gold 5.0 · Business Pitch",
    time: "11m ago",
    icon: "💼",
    color: "#00C9A7",
  },
  {
    name: "Quiz spot taken",
    description: "Going for Gold 5.0 · Quizzes",
    time: "15m ago",
    icon: "🧠",
    color: "#FFB800",
  },
  {
    name: "Entry confirmed",
    description: "Going for Gold 5.0 · Content Creation",
    time: "19m ago",
    icon: "🎬",
    color: "#9B59B6",
  },
  {
    name: "Early bird registered",
    description: "Going for Gold 5.0 · Giveaway",
    time: "23m ago",
    icon: "🎁",
    color: "#2ECC71",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-175 cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-500 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function HeroList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-115 w-full flex-col overflow-hidden p-2 mask-[linear-gradient(to_bottom,#F8F8FF_40,transparent,transparent)]",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t" />
    </div>
  )
}