import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import { ShieldCheck, Zap, Award, Star } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Cars Detailed', value: '500+', icon: <Zap className="w-5 h-5" /> },
    { label: 'Expert Years', value: '10+', icon: <Award className="w-5 h-5" /> },
    { label: 'Five Star Reviews', value: '100%', icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section: The big first impression */}
      <Hero />

      {/* 2. Quick Stats Bar: Builds instant trust */}
      <div className="bg-primary-light py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-4 text-white">
                <div className="p-3 bg-white/10 rounded-full">{stat.icon}</div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-blue-100 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Services Preview: Shows the packages we built */}
      <ServicesGrid />

      {/* 4. "Our Process" Section: Specific for high-end detailing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000" 
                alt="Detailing process" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Precision detailing for the <span className="text-blue-600">Qatar Climate.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                The heat and sand in Doha can be brutal on your car's paint. We don't just wash cars; 
                we apply scientific protection methods that keep your vehicle looking new for years.
              </p>
              
              <div className="space-y-4">
                {[
                  "Ph-Neutral Snow Foam Pre-wash",
                  "Two-Bucket Method for Scratch-Free Results",
                  "High-Grade 9H Ceramic Sealants",
                  "Climate-Controlled Application Studio"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Experience the Showroom Shine Again
          </h2>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-blue-500/20"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;