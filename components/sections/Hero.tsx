'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

const slides = [
  { image: '/banners/door.jfif', name: 'Aluminum Door' },
  { image: '/banners/window.jfif', name: 'Aluminum Window' },
  { image: '/banners/cabinet.jfif', name: 'Aluminum Cabinet' },
  { image: '/banners/cart.jfif', name: 'Aluminum Cart' },
  { image: '/banners/seamless.jfif', name: 'Seamless Window' },
  { image: '/banners/slatted.jfif', name: 'Aluminum Slatted Roof' },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Section id="home" className="bg-gradient-to-br from-white via-slate-50 to-slate-100 min-h-screen flex items-center max-lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            GL Aluminum and Glass Installation Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Professional installation of aluminum windows, sliding doors, awning windows, and glass solutions.
            Family-owned business with over 20 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-gray-900">{slides[currentSlide].name}</h3>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            ›
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}