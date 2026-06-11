'use client'

import { useAnimationOnScroll } from '@/hooks/useAnimationOnScroll'

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: number
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const { elementRef, isVisible } = useAnimationOnScroll()

  return (
    <section ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div
        className={`grid gap-8 sm:grid-cols-2 ${
          columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        }`}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isVisible={isVisible}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  )
}

interface FeatureCardProps {
  feature: Feature
  isVisible: boolean
  delay: number
}

function FeatureCard({ feature, isVisible, delay }: FeatureCardProps) {
  return (
    <div
      className="group rounded-lg border bg-card p-6 transition-all duration-500 hover:border-primary hover:shadow-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Icon container */}
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary">
        {feature.title}
      </h3>
      <p className="text-sm leading-6 text-muted-foreground">
        {feature.description}
      </p>

      {/* Animated underline */}
      <div className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-primary to-primary/50 transition-all group-hover:w-full" />
    </div>
  )
}
