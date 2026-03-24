import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Appointment Date</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready to give your vehicle the treatment it deserves? Fill out the form below or reach out directly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Booking Form */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+974 ...." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                  <option>Express Detail</option>
                  <option>Full Restoration</option>
                  <option>Ceramic Coating</option>
                  <option>Paint Correction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. BMW M4" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requests</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Tell us about your car..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200">
                Confirm Booking Request
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info & Map */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-gray-900">Our Location</p>
                    <p className="text-gray-600">Industrial Area, St 23, Doha, Qatar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-lg text-green-600"><MessageCircle className="w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp Us</p>
                    <p className="text-gray-600">+974 5555 0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-50 p-3 rounded-lg text-purple-600"><Clock className="w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-gray-900">Opening Hours</p>
                    <p className="text-gray-600">Sat - Thu: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 text-sm">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
                  Interactive Map Loading...
               </div>
               {/* When ready, replace this div with a Google Maps iframe */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4!2d51.4!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiTiA1McKwMjQnMDAuMCJF!5e0!3m2!1sen!2sqa!4v1600000000000!5m2!1sen!2sqa"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
               ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;