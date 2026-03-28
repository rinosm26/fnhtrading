import { Check, Shield, Droplets, Sparkles } from 'lucide-react';

const packages = [
  {
    name: "Express Detail",
    price: "250",
    description: "Perfect for a weekly refresh and maintaining that showroom shine.",
    icon: <Droplets className="w-8 h-8 text-primary-light" />,
    features: ["Hand Wash & Dry", "Vacuum Interior", "Tire Dressing", "Window Cleaning"],
    recommended: false
  },
  {
    name: "Full Restoration",
    price: "750",
    description: "Our most popular deep-clean service for both interior and exterior.",
    icon: <Sparkles className="w-8 h-8 text-primary-light" />,
    features: ["Clay Bar Treatment", "Iron Decontamination", "Interior Steam Clean", "Leather Conditioning", "Carnauba Wax"],
    recommended: true
  },
  {
    name: "Ceramic Coating",
    price: "2500+",
    description: "Ultimate long-term protection with 9H hardness and extreme gloss.",
    icon: <Shield className="w-8 h-8 text-primary-light" />,
    features: ["Multi-Stage Paint Correction", "Ceramic Pro Coating", "Wheel & Glass Coating", "5-Year Warranty"],
    recommended: false
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Detailing Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium care for every vehicle type. Select the plan that fits your car's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all hover:-translate-y-2 border-2 ${
                pkg.recommended ? 'border-text-primary-light scale-105 z-10' : 'border-transparent'
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-text-primary-light text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              <div className="mb-6">{pkg.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-gray-900">QAR {pkg.price}</span>
              </div>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <Check className="w-5 h-5 text-primary-fg mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${
                pkg.recommended 
                ? 'bg-primary-light text-white hover:bg-primary-fg' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;