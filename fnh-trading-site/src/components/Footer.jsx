import { Link } from 'react-router-dom';
//import { FacebookIcon, Instagram, Twitter, Youtube, Car, Mail, Phone, MapPin } from 'lucide-react';
import { Car, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold tracking-tight text-white">
                ELITE<span className="text-blue-500">DETAIL</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Qatar's premier destination for automotive preservation. We specialize in high-end ceramic coatings and precision detailing for luxury vehicles.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors border border-slate-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors border border-slate-800">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors border border-slate-800">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors border border-slate-800">
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Work Gallery</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About the Studio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+974 5555 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>info@elitedetail.qa</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-1" />
                <span>Street 23, Industrial Area<br />Doha, Qatar</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Studio Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Sat - Thu:</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span className="text-red-400">Closed</span>
              </li>
              <li className="mt-6 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl">
                <p className="text-xs text-blue-400 font-medium italic">
                  *Appointments are recommended for Ceramic Coating services.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Elite Detail Qatar. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;