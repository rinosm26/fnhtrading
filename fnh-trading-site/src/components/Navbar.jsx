import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import myLogo from '../assets/fnh-logo.png'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const navLinks = [
    { name: 'nav.home', path: '/' },
    { name: 'nav.services', path: '/services' },
    { name: 'nav.gallery', path: '/gallery' },
    { name: 'nav.about', path: '/about' },
    { name: 'nav.contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={myLogo} alt="FNH Trading Logo" className="w-32 h-32 object-contain " /> 
            <div className="flex flex-col items-end text-right">
              {/* Arabic Name Line */}
              <span className="text-lg font-bold tracking-tight text-primary-fg" dir="rtl">
                إف إن إتش <span className="text-primary-fg">للمقاولات والتجارة والخدمات</span>
              </span>

              {/* English Name Line */}
              <span className="text-lg font-bold tracking-tight text-primary-light">
                FNH<span className="text-primary-light"> CONTRACTING TRADING AND SERVICES</span>
              </span>
            </div>
          </Link>
         
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-gray-600 hover:text-primary-light transition-colors"
              >
                {t(link.name)} 
              </Link>
            ))}
            
            {/* Language Switcher at the end */}
            <LanguageSwitcher />

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-light hover:bg-gray-50 rounded-md"
              >
                {t(link.name)} 
              </Link>
            ))}
            {/* <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-3 py-3 mt-4 rounded-md font-semibold"
            >
              Book Now
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;