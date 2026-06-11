'use client'

import { useAnimationOnScroll, useCountAnimation } from '@/hooks/useAnimationOnScroll'

interface Stat {
  label: string
  value: number
  suffix?: string
  icon?: React.ReactNode
}

interface AnimatedStatsProps {
  stats: Stat[]
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const { elementRef, isVisible } = useAnimationOnScroll()

  return (
    <section
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className="py-16"
    >
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  stat: Stat
  isVisible: boolean
  delay: number
}

function StatCard({ stat, isVisible, delay }: StatCardProps) {
  const count = useCountAnimation(stat.value, 2000, isVisible)

  return (
    <div
      className="rounded-lg border bg-card p-6 text-center transition-all duration-500 ease-out hover:shadow-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {stat.icon && (
        <div className="mb-4 flex justify-center text-primary">
          {stat.icon}
        </div>
      )}
      <div className="text-4xl font-bold text-primary">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="mt-2 text-muted-foreground">{stat.label}</p>
    </div>
  )
}
