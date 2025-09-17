import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Globe, Home, Briefcase, Image, MessageSquare, Contact } from 'lucide-react';
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
    { href: '#home', label: t('nav.home'), icon: <Home size={16} /> },
    { href: '#services', label: t('nav.services'), icon: <Briefcase size={16} /> },
    { href: '#gallery', label: t('nav.gallery'), icon: <Image size={16} /> },
    { href: '#testimonials', label: t('nav.testimonials'), icon: <MessageSquare size={16} /> },
    { href: '#contact', label: t('nav.contact'), icon: <Contact size={16} /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/80' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4">{link.icon}</span>
                  {link.label}
                </span>
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`}></span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50' 
                    : 'text-white border-white/20 hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-semibold">{language === 'en' ? 'EN' : 'FR'}</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                    language === 'en' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                    language === 'en' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>EN</span>
                  English
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                    language === 'fr' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                    language === 'fr' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>FR</span>
                  Français
                </button>
              </div>
            </div>

            {/* Call Button */}
            <a 
              href="tel:+14388709696" 
              className={`group flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
              }`}
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span>{t('nav.callNow')}</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 hover:scale-105 ${
              scrolled || isMenuOpen 
                ? 'text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-10 transform transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Logo */}
          <div className="text-center mb-8">
            <div className="text-2xl font-bold text-blue-600 mb-2">Jenny Limpieza</div>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-2 mb-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-4 py-4 px-4 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 active:scale-95"
                    onClick={toggleMenu}
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {link.icon}
                    </span>
                    <span className="text-lg font-medium">{link.label}</span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div className="bg-gray-50/80 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-700">{t('nav.language')}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setLanguage('en');
                    toggleMenu();
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all duration-300 active:scale-95 ${
                    language === 'en' 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                    language === 'en' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>EN</span>
                  <span className="font-medium">English</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('fr');
                    toggleMenu();
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all duration-300 active:scale-95 ${
                    language === 'fr' 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                    language === 'fr' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>FR</span>
                  <span className="font-medium">Français</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Call Button */}
          <a 
            href="tel:+14388709696" 
            className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 mb-8"
            onClick={toggleMenu}
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>{t('nav.callNow')}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;