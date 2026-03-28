import ServicesGrid from '../components/ServicesGrid';
import { ShieldCheck, PlusCircle, Clock, Sparkles } from 'lucide-react';

const addons = [
  { name: "Headlight Restoration", price: "QAR 150", desc: "Clear up foggy lenses for better night visibility." },
  { name: "Engine Bay Detail", price: "QAR 200", desc: "Degreasing and dressing of all plastic/rubber components." },
  { name: "Odor Removal", price: "QAR 100", desc: "Ozone treatment to eliminate smoke or pet smells." },
  { name: "Clay Bar Only", price: "QAR 100", desc: "Removal of industrial fallout and paint contaminants." }
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Detailing Packages</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional-grade automotive care tailored for luxury, sports, and daily vehicles in Doha.
          </p>
        </div>
      </div>

      {/* Main Packages (Reusing our Grid) */}
      <ServicesGrid />

      {/* A La Carte / Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Optional Add-ons</h2>
            <p className="text-slate-500 mt-2">Enhance your package with these specialized services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((item, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <PlusCircle className="w-6 h-6 text-primary-light mr-4" />
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
                <div className="font-bold text-primary-light">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      {/* <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold italic">Unsure which package you need?</h3>
            <p className="text-blue-100">Bring your car by for a free paint inspection and consultation.</p>
          </div>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
            Get a Quote
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Services;