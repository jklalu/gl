import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

const services = [
  {
    title: 'Aluminum Windows Installation',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-10 w-10 text-blue-600"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    items: ['Sliding Windows', 'Awning Windows', 'Casement Windows', 'Fixed Windows'],
  },
  {
    title: 'Aluminum Doors Installation',
    icon: '🚪',
    items: ['Sliding Doors', 'Swing Doors', 'Glass Doors', 'Screen Doors'],
  },
  {
    title: 'Glass Installation',
    icon: '🔷',
    items: ['Tempered Glass', 'Clear / Tinted Glass', 'Glass Partitions', 'Storefront Glass'],
  },
  {
    title: 'Aluminum Pergola & Sunshade',
    icon: '☀️',
    items: ['Pergola Installation', 'Aluminum Louvers', 'Sunshade Systems'],
  },
  {
    title: 'Aluminum & Glass Partitions',
    icon: '🏢',
    items: ['Office Partitions', 'Room Dividers', 'Frameless Glass Setup'],
  },
  {
    title: 'Repair & Maintenance',
    icon: '🛠️',
    items: ['Sliding door repair', 'Window alignment', 'Glass replacement', 'Seal / leak fixing'],
  },
]

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive aluminum and glass services with a focus on quality and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-slate-50">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left text-gray-600">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}