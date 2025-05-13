import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="flex w-full justify-center items-center px-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium text-lg transition-colors duration-300 hover:text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a 
            href="tel:+14388709696" 
            className={`flex items-center gap-2 font-medium text-lg ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}
          >
            <Phone size={18} />
            <span>{t('nav.callNow')}</span>
          </a>

          <div className="relative group">
            <button 
              className={`flex items-center gap-1 text-lg ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span>{language === 'en' ? 'EN' : 'FR'}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <button
                onClick={() => setLanguage('en')}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  language === 'en' ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  language === 'fr' ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                Français
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className={`lg:hidden p-2 z-20 absolute right-4 ${
            scrolled || isMenuOpen ? 'text-blue-600' : 'text-white'
          }`} 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="space-y-6 mb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xl font-medium text-gray-800 hover:text-blue-600 block py-2"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => {
                setLanguage('en');
                toggleMenu();
              }}
              className={`px-4 py-2 rounded-full border ${
                language === 'en' 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                setLanguage('fr');
                toggleMenu();
              }}
              className={`px-4 py-2 rounded-full border ${
                language === 'fr' 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              FR
            </button>
          </div>

          <a 
            href="tel:+14388709696" 
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors mt-auto mb-8"
            onClick={toggleMenu}
          >
            <Phone size={18} />
            <span>{t('nav.callNow')}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;