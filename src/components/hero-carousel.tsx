'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface CarouselItem {
  id: string
  image: string
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
}

interface HeroCarouselProps {
  items: CarouselItem[]
  autoplay?: boolean
  interval?: number
}

export function HeroCarousel({
  items,
  autoplay = true,
  interval = 5000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!autoplay) return

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, interval)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, interval, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-muted">
      {/* Slides */}
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          {/* Text content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
            <div
              className={`transition-all duration-700 ${
                index === currentIndex
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                {item.title}
              </h2>
              <p className="mb-6 max-w-lg text-lg text-white/90">
                {item.description}
              </p>
              {item.ctaText && (
                <button className="rounded bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105">
                  {item.ctaText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur transition-all hover:bg-white/40"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur transition-all hover:bg-white/40"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
