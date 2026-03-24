import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury car detailing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              Premium Car Care in Qatar
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Refining the Art of <span className="text-blue-500">Automotive</span> Perfection
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            From ceramic coatings to interior restoration, we provide elite detailing 
            services that preserve your vehicle's value and showroom shine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              <span>Book Your Detail</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/services"
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              View Packages
            </Link>
          </div>

          {/* Social Proof / Trust Markers */}
          <div className="mt-12 flex items-center space-x-6 text-slate-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Eco-Friendly Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;