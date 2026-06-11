'use client'

import dynamic from 'next/dynamic'
import { Plane, Ship, Truck } from 'lucide-react'

// Individual model canvas — each card gets its own WebGL context
const TruckCanvas   = dynamic(() => import('./model-canvases/TruckCanvas').then(m => m.TruckCanvas),   { ssr: false, loading: () => <div className="h-full w-full bg-muted/30 rounded-lg" /> })
const A380Canvas    = dynamic(() => import('./model-canvases/A380Canvas').then(m => m.A380Canvas),    { ssr: false, loading: () => <div className="h-full w-full bg-muted/30 rounded-lg" /> })
const TitanicCanvas = dynamic(() => import('./model-canvases/TitanicCanvas').then(m => m.TitanicCanvas), { ssr: false, loading: () => <div className="h-full w-full bg-muted/30 rounded-lg" /> })

const modes = [
  {
    Canvas: TruckCanvas,
    Icon: Truck,
    label: 'Express Ground',
    desc: 'Door-to-door delivery across the continent in 24–72 h via our DAF fleet.',
    accent: 'from-amber-500/10 to-orange-500/5',
    iconColor: 'text-amber-500',
  },
  {
    Canvas: A380Canvas,
    Icon: Plane,
    label: 'Global Air Freight',
    desc: 'Priority cargo aboard our A380 network — anywhere in the world in 48 h.',
    accent: 'from-blue-500/10 to-sky-500/5',
    iconColor: 'text-blue-400',
  },
  {
    Canvas: TitanicCanvas,
    Icon: Ship,
    label: 'Ocean Cargo',
    desc: 'Heavy bulk shipments by sea — economical, reliable, fully tracked.',
    accent: 'from-teal-500/10 to-cyan-500/5',
    iconColor: 'text-teal-400',
  },
]

export function ModelStrip() {
  return (
    <section className="border-y bg-card">
      <div className="container-page py-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-primary">Built for every journey</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            Land, air &amp; sea shipping
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {modes.map(({ Canvas, Icon, label, desc, accent, iconColor }) => (
            <div
              key={label}
              className={`group relative overflow-hidden rounded-xl border bg-gradient-to-b ${accent} p-5 transition-all duration-300 hover:shadow-md`}
            >
              {/* 3D canvas */}
              <div className="relative mb-4 h-52 w-full overflow-hidden rounded-lg bg-[#06091a]">
                <Canvas />
              </div>

              {/* Card label */}
              <div className="flex items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-background/70 ${iconColor}`}>
                  <Icon className="size-4" />
                </span>
                <span className="font-semibold">{label}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
