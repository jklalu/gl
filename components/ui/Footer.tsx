import { Section } from '@/components/ui/Section'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Section className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GL Aluminum and Glass Installation Services</h3>
              <p className="text-gray-300">
                Professional aluminum and glass installation services. Family-owned and operated since 2011.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone:
                  <a href="tel:09914127284" className="hover:text-blue-400">
                    0991 412 7284
                  </a>
                </p>
                <p>Email:
                  <a href="mailto:glalum@gamil.com" className="hover:text-blue-400">
                    glalum@gamil.com
                  </a>
                </p>
                <p>Address:
                  <a href="https://maps.app.goo.gl/m3GGGEh3S5TE2SVy7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    369, Sitio Bihunan, Biñang 1st, Bocaue, Bulacan
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Aluminum Window Installation</li>
                <li>Sliding Doors</li>
                <li>Awning Windows</li>
                <li>Glass Installation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 GL Aluminum and Glass Installation Services. All rights reserved.</p>
          </div>
        </div>
      </Section>
    </footer>
  )
}