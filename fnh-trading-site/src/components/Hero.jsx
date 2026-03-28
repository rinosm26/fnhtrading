import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Clock3 } from 'lucide-react'; // Changed Icon for 24/7
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    title: "Refining the Art of Automotive Perfection",
    description: "Experience the ultimate showroom shine with our bespoke detailing packages tailored for Qatar's elite vehicles.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=60&w=1200",
    tag: "Premium Car Care"
  },
  {
    title: "Advanced Ceramic Shield Protection",
    description: "Protect your investment from the harsh desert sun with our 9H nano-ceramic coatings and UV-resistant finishes.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=60&w=1200",
    tag: "Paint Protection"
  },
  {
    title: "Master-Class Interior Restoration",
    description: "Deep steam cleaning and leather conditioning that brings back that new-car smell and pristine feel.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=60&w=1200",
    tag: "Interior Detail"
  },
  {
    title: "Precision Engine Bay Detailing",
    description: "Technical cleaning that removes grime and protects sensitive components for peak performance.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=60&w=1200",
    tag: "Engine Care"
  },
  {
    tag: "Elite Home Care",
    title: "Refining the Art of Residential Perfection",
    description: "Experience the ultimate peace of mind with bespoke maintenance packages tailored for Qatar’s finest residences.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=60&w=1200"
  },
  {
    tag: "Premium Painting",
    title: "Master-Class Interior Restoration & Finish",
    description: "Transform your living spaces with high-end finishes and flawless paint application that redefines luxury living.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=60&w=1200"
  },
  {
    tag: "Expert Electrical",
    title: "Precision Engineering for Modern Power",
    description: "Technical excellence in electrical repairs and smart home installations, ensuring safety and peak performance for your villa.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=1200"
  },
  {
    tag: "Technical Services",
    title: "Seamless Plumbing & Custom Woodwork",
    description: "From leak detection to custom cabinetry, our certified technicians preserve your home’s structural integrity and style.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=60&w=1200"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-slate-900">
      
      {/* 1. Added Static 24/7 Badge (Anchor) */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50 animate-pulse">
        <div className="flex items-center space-x-2 bg-red-600/10 border border-red-500/20 rounded-full px-5 py-2.5 backdrop-blur-md shadow-lg shadow-red-900/20">
          <Clock3 className="w-5 h-5 text-red-600" />
          <span className="text-red-600 text-sm md:text-base font-bold uppercase tracking-widest">
            24/7 Mobile Service
          </span>
        </div>
      </div>
           
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Darker Overlays for Text Readability */}
                <div className="absolute inset-0 bg-slate-900/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Content - Animates based on activeIndex */}
      <div className="relative z-10 max-w-xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl transition-all duration-700 ease-in-out transform">
          
          {/* Dynamic Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-200/20 border border-green-200/30 rounded-full px-4 py-1 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary-fg animate-pulse"></span>
            <span className="text-primary-fg text-xs md:text-sm font-bold uppercase tracking-widest">
              {slides[activeIndex].tag}
            </span>
          </div>
          
          {/* Dynamic Title */}
          <h1 className="text-2xl md:text-2xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-2xl">
            {slides[activeIndex].title.split(' ').map((word, i) => 
              word === "Automotive" || word === "Protection" || word === "Restoration" ? 
              <span key={i} className="text-blue-500"> {word} </span> : word + " "
            )}
          </h1>
          
          {/* Dynamic Description */}
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            {slides[activeIndex].description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 bg-primary-light hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/40 active:scale-95"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/services"
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Badges */}
          {/* <div className="mt-12 grid grid-cols-1 sm:flex items-center gap-6 text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold tracking-wide">Premium Products Only</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold tracking-wide">Expert Application</span>
            </div>
          </div> */}


        </div>
      </div>

      {/* Swiper Customization (CSS) */}
      <style>{`
        .swiper-pagination-bullets { bottom: 40px !important; text-align: left !important; padding-left: 10% !important; }
        .swiper-pagination-bullet { width: 12px; height: 12px; background: #fff; opacity: 0.3; transition: all 0.3s; }
        .swiper-pagination-bullet-active { width: 30px; border-radius: 6px; background: #3b82f6; opacity: 1; }
      `}</style>
    </section>
  );
};

export default Hero;