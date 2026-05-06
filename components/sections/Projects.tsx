'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const categories = ['Windows', 'Doors', 'Pergola & Sunshade', 'Cabinets & Storage']

type Project = {
  id: number
  title: string
  category: string
  images: string[]
}

const projects: Project[] = [
  { id: 1, title: 'Modern Sliding Windows', category: 'Windows', images: ['/windows/window.jfif'] },
  { id: 2, title: 'Seamless Aluminum Awning', category: 'Windows', images: ['/windows/seamless.jfif', '/windows/window.jfif'] },
  { id: 4, title: 'French Door (Swing Door)', category: 'Doors', images: ['/doors/door.jfif'] },
  { id: 7, title: 'Aluminum Slatted Roof', category: 'Pergola & Sunshade', images: ['/pergola/slatted.jfif'] },
  { id: 9, title: 'Kitchen Sink Cabinet', category: 'Cabinets & Storage', images: ['/cabinet/cabinet.jfif'] },
  { id: 10, title: 'Custom Cart', category: 'Cabinets & Storage', images: ['/cabinet/cart.jfif'] },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Windows')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedProjectImageIndex, setSelectedProjectImageIndex] = useState(0)

  const filteredProjects = projects.filter(project => project.category === activeCategory)

  return (
    <Section id="projects" className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed installations showcasing quality craftsmanship.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className='cursor-pointer hover:outline'
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => { setSelectedProject(project); setSelectedProjectImageIndex(0) }}
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-6xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white"
            >
              ✕
            </button>
            <div className="bg-black relative flex items-center justify-center max-h-[85vh] overflow-hidden">
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedProjectImageIndex((prev) => Math.max(prev - 1, 0))}
                    className="absolute left-4 z-10 rounded-full bg-white/90 p-3 text-gray-700 shadow hover:bg-white"
                    disabled={selectedProjectImageIndex === 0}
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setSelectedProjectImageIndex((prev) => Math.min(prev + 1, selectedProject.images.length - 1))}
                    className="absolute right-4 z-10 rounded-full bg-white/90 p-3 text-gray-700 shadow hover:bg-white"
                    disabled={selectedProjectImageIndex === selectedProject.images.length - 1}
                  >
                    ›
                  </button>
                </>
              )}
              <img
                src={selectedProject.images[selectedProjectImageIndex]}
                alt={selectedProject.title}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">{selectedProject.title}</h3>
                {selectedProject.images.length > 1 && (
                  <span className="text-sm text-gray-500">
                    {selectedProjectImageIndex + 1}/{selectedProject.images.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}