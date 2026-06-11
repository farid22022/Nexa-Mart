'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  image?: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

export function TestimonialCarousel({
  testimonials,
  autoplay = true,
  interval = 6000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(autoplay)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isAutoplay, interval, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoplay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
    setIsAutoplay(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
  }

  const current = testimonials[currentIndex]

  return (
    <div className="relative w-full py-8">
      {/* Main testimonial */}
      <div className="overflow-hidden rounded-lg border bg-card p-8 md:p-12">
        <div
          key={current.id}
          className="animate-fade-in-up space-y-6"
        >
          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 fill-amber-400 text-amber-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg leading-7 text-muted-foreground md:text-xl">
            "{current.quote}"
          </p>

          {/* Author */}
          <div>
            <p className="font-semibold">{current.name}</p>
            <p className="text-sm text-muted-foreground">{current.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          onClick={prevTestimonial}
          className="rounded-full border p-2 transition-all hover:bg-muted"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="rounded-full border p-2 transition-all hover:bg-muted"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Counter */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  )
}
