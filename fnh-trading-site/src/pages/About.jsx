import { Award, ShieldCheck, Users, Target, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Impact Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engineering <span className="text-blue-500">Excellence</span> in Car Care.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Founded by a Technology Lead with over 16 years of professional experience, 
              we bring a data-driven, systematic approach to automotive restoration in Qatar.
            </p>
          </div>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20 hidden lg:block"></div>
      </section>

      {/* 2. The Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1597766354181-454687593649?auto=format&fit=crop&q=80&w=1000" 
                alt="Precision Detailing Studio" 
                className="rounded-3xl shadow-2xl border-8 border-gray-50"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl hidden md:block shadow-xl">
                <p className="text-4xl font-black italic">16+</p>
                <p className="text-xs uppercase font-bold tracking-widest">Years Experience</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Our Heritage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Where Technology Meets <br />Automotive Art.
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                At Elite Detail, we believe that car detailing is a science. While others simply clean, 
                we apply the same rigor found in high-level IT infrastructure management to your vehicle's 
                preservation. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                With a deep understanding of the Qatar environment—including the impact of extreme 
                summer heat and abrasive desert sands—we exclusively utilize world-leading ceramic 
                and paint protection technologies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {["Climate-Controlled Studio", "Authorized Installers", "Ph-Neutral Methods", "Premium 9H Coatings"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-800 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Professional Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Certified Expertise", 
                desc: "Our technicians are trained in the latest paint correction and ceramic application techniques to ensure perfection." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Premium Products", 
                desc: "We never compromise. We only use authorized 9H ceramic coatings and pH-neutral chemicals safe for all finishes." 
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "Transparency", 
                desc: "Our 16-year background in service management ensures every client receives clear timelines and detailed reports." 
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-balance">Ready to give your car the elite treatment it deserves?</h2>
          <p className="text-slate-600 mb-10">Visit our studio in Doha's Industrial Area for a complimentary paint health check.</p>
          <a 
            href="/contact" 
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-slate-200"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;