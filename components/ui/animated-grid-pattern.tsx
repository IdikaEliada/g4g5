"use client"

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface AnimatedHexPatternProps extends ComponentPropsWithoutRef<"svg"> {
  hexRadius?: number        // pointy-top hex circumradius (default: 20)
  numHexes?: number         // number of animated hexes (default: 50)
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
  variant?: "hex" | "goldbar"
}

type Cell = {
  id: number
  pos: [number, number]   // col, row in grid coords
  iteration: number
}

// ── Hex geometry (pointy-top) ─────────────────────────────────────
function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30)
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(" ")
}

function hexCenter(col: number, row: number, r: number): [number, number] {
  const w = Math.sqrt(3) * r
  const h = 2 * r
  const x = col * w + (row % 2) * (w / 2)
  const y = row * h * 0.75
  return [x, y]
}

// ── Gold bar geometry ─────────────────────────────────────────────
function goldBarPath(cx: number, cy: number, w: number, h: number): string {
  const bevel = 4
  const x = cx - w / 2
  const y = cy - h / 2
  return [
    `M ${x + bevel} ${y}`,
    `L ${x + w - bevel} ${y}`,
    `L ${x + w} ${y + bevel}`,
    `L ${x + w} ${y + h - bevel}`,
    `L ${x + w - bevel} ${y + h}`,
    `L ${x + bevel} ${y + h}`,
    `L ${x} ${y + h - bevel}`,
    `L ${x} ${y + bevel}`,
    "Z",
  ].join(" ")
}

// ─────────────────────────────────────────────────────────────────
export function AnimatedHexPattern({
  hexRadius = 20,
  numHexes = 50,
  className,
  maxOpacity = 0.3,
  duration = 4,
  repeatDelay = 0.5,
  variant = "hex",
  ...props
}: AnimatedHexPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [cells, setCells] = useState<Cell[]>([])

  // Grid sizing
  const r = hexRadius
  const colW = Math.sqrt(3) * r
  const rowH = r * 1.5

  // For gold bars: treat like a rect grid
  const barW = r * 2.2
  const barH = r * 1.1
  const barGapX = barW + 4
  const barGapY = barH + 4

  const cols = Math.ceil(dimensions.width / (variant === "hex" ? colW : barGapX)) + 1
  const rows = Math.ceil(dimensions.height / (variant === "hex" ? rowH : barGapY)) + 1

  const getPos = useCallback((): [number, number] => {
    return [Math.floor(Math.random() * cols), Math.floor(Math.random() * rows)]
  }, [cols, rows])

  const generateCells = useCallback(
    (count: number): Cell[] =>
      Array.from({ length: count }, (_, i) => ({ id: i, pos: getPos(), iteration: 0 })),
    [getPos]
  )

  const updateCellPosition = useCallback(
    (cellId: number) => {
      setCells((current) => {
        const cell = current[cellId]
        if (!cell || cell.id !== cellId) return current
        const next = current.slice()
        next[cellId] = { ...cell, pos: getPos(), iteration: cell.iteration + 1 }
        return next
      })
    },
    [getPos]
  )

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setCells(generateCells(numHexes))
    }
  }, [dimensions.width, dimensions.height, generateCells, numHexes])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions((prev) => {
          const { width, height } = entry.contentRect
          return prev.width === width && prev.height === height ? prev : { width, height }
        })
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // ── Render the static grid pattern ───────────────────────────────
  const gridCells: React.ReactNode[] = []

  if (variant === "hex") {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const [cx, cy] = hexCenter(col, row, r)
        gridCells.push(
          <polygon
            key={`g-${col}-${row}`}
            points={hexPoints(cx, cy, r - 1)}
            fill="none"
            strokeWidth="0.6"
          />
        )
      }
    }
  } else {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = col * barGapX
        const cy = row * barGapY
        gridCells.push(
          <path
            key={`g-${col}-${row}`}
            d={goldBarPath(cx, cy, barW, barH)}
            fill="none"
            strokeWidth="0.6"
          />
        )
      }
    }
  }

  // ── Render animated highlight cells ──────────────────────────────
  const animatedCells = cells.map(({ pos: [col, row], id, iteration }, index) => {
    if (variant === "hex") {
      const [cx, cy] = hexCenter(col, row, r)
      return (
        <motion.polygon
          key={`${id}-${iteration}`}
          points={hexPoints(cx, cy, r - 1)}
          initial={{ opacity: 0 }}
          animate={{ opacity: maxOpacity }}
          transition={{
            duration,
            repeat: 1,
            delay: index * 0.1,
            repeatType: "reverse",
            repeatDelay,
          }}
          onAnimationComplete={() => updateCellPosition(id)}
          fill="currentColor"
          strokeWidth="0"
        />
      )
    } else {
      const cx = col * barGapX
      const cy = row * barGapY
      return (
        <motion.path
          key={`${id}-${iteration}`}
          d={goldBarPath(cx, cy, barW, barH)}
          initial={{ opacity: 0 }}
          animate={{ opacity: maxOpacity }}
          transition={{
            duration,
            repeat: 1,
            delay: index * 0.1,
            repeatType: "reverse",
            repeatDelay,
          }}
          onAnimationComplete={() => updateCellPosition(id)}
          fill="currentColor"
          strokeWidth="0"
        />
      )
    }
  })

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/10 stroke-gray-400/10",
        className
      )}
      {...props}
    >
      {gridCells}
      {animatedCells}
    </svg>
  )
}