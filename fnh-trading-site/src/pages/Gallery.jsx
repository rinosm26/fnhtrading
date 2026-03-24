import { useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';

const galleryData = [
  { id: 1, category: 'Exterior', title: 'Stage 2 Paint Correction', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Interior', title: 'Deep Leather Restoration', image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Ceramic', title: '9H Ceramic Coating', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Exterior', title: 'Engine Bay Detailing', image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Interior', title: 'Full Cabin Sanitization', image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Ceramic', title: 'Wheel & Caliper Protection', image: 'https://images.unsplash.com/photo-1611566176247-495768366a1f?auto=format&fit=crop&q=80&w=800' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Exterior', 'Interior', 'Ceramic'];

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work Gallery</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Witness the transformations. We take pride in every inch of detail we provide.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold flex items-center justify-between">
                  {item.title}
                  <ExternalLink className="w-5 h-5" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 p-8 rounded-3xl bg-blue-50 border border-blue-100 text-center">
          <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Want to see more?</h2>
          <p className="text-gray-600 mb-6">Follow us on Instagram for daily updates and behind-the-scenes content.</p>
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Follow @EliteDetailQatar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;