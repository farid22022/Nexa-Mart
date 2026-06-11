'use client'

import { useEffect, useRef, useState } from 'react'

interface UseAnimationOnScrollOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useAnimationOnScroll(
  options: UseAnimationOnScrollOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, rootMargin, once])

  return { elementRef, isVisible }
}

export function useCountAnimation(
  endValue: number,
  duration: number = 2000,
  triggerAnimation: boolean = true
) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!triggerAnimation || isAnimating) return

    setIsAnimating(true)
    let startTime: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      const value = Math.floor(progress * endValue)

      if (value <= endValue) {
        setCount(value)
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        setIsAnimating(false)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [triggerAnimation, endValue, duration, isAnimating])

  return count
}

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const elementOffset = rect.top
        setOffset(elementOffset * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { elementRef, offset }
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
