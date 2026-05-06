import { Section } from '@/components/ui/Section'

export function About() {
  return (
<Section id="about" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About GL Aluminum and Glass</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Founded in 2011, GL Aluminum and Glass Installation Services has been a trusted partner in the industry for over 15 years. 
          As a family-owned business, we focus on delivering high-quality craftsmanship, personalized solutions, and building lasting trust with every homeowner and contractor we serve. 
          Our expert team specializes in precision aluminum window installation, modern sliding doors, awning windows, and custom glass solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
            <p className="text-gray-600">Extensive expertise in specialized aluminum and glass craftsmanship.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Owned</h3>
            <p className="text-gray-600">A local business dedicated to integrity, community, and personal service.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}