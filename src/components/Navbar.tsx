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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2 sm:py-3' : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="flex w-full justify-center items-center px-3 sm:px-4 md:px-6 lg:px-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium text-base xl:text-lg transition-all duration-300 hover:text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all flex items-center gap-1.5 xl:gap-2 ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  <span className="hidden xl:inline">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a 
            href="tel:+14388709696" 
            className={`flex items-center gap-1.5 xl:gap-2 font-medium text-base xl:text-lg px-3 xl:px-4 py-2 rounded-full ${
              scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
            } transition-all duration-300 shadow-sm hover:shadow`}
          >
            <Phone size={16} className="animate-pulse xl:w-[18px] xl:h-[18px]" />
            <span className="hidden sm:inline">{t('nav.callNow')}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <div className="relative group">
            <button 
              className={`flex items-center gap-1 text-lg px-3 py-1 rounded-full border border-transparent hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'EN' : 'FR'}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${
                  language === 'en' ? 'text-blue-600 font-medium bg-blue-50/50' : 'text-gray-700'
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-blue-100 text-blue-600">EN</span>
                English
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`flex items-center gap-2 w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${
                  language === 'fr' ? 'text-blue-600 font-medium bg-blue-50/50' : 'text-gray-700'
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-blue-100 text-blue-600">FR</span>
                Français
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className={`lg:hidden p-2 z-20 absolute right-3 sm:right-4 md:right-6 lg:right-4 ${
            scrolled || isMenuOpen ? 'text-blue-600' : 'text-white'
          } hover:bg-white/10 rounded-lg transition-all duration-200`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
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
        <div className="flex flex-col h-full pt-16 sm:pt-20 px-4 sm:px-6 md:px-8">
          <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg sm:text-xl font-medium text-gray-800 hover:text-blue-600 flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-blue-50/50 transition-all active:scale-95"
                  onClick={toggleMenu}
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8 bg-gray-50 p-3 sm:p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <Globe size={16} className="text-blue-600 sm:w-[18px] sm:h-[18px]" />
              <span className="font-medium text-gray-700 text-sm sm:text-base">{t('nav.language')}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setLanguage('en');
                  toggleMenu();
                }}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border transition-all active:scale-95 ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                  language === 'en' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'
                }`}>EN</span>
                <span className="text-sm sm:text-base">English</span>
              </button>
              <button
                onClick={() => {
                  setLanguage('fr');
                  toggleMenu();
                }}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border transition-all active:scale-95 ${
                  language === 'fr' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                  language === 'fr' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'
                }`}>FR</span>
                <span className="text-sm sm:text-base">Français</span>
              </button>
            </div>
          </div>

          <a 
            href="tel:+14388709696" 
            className="flex items-center justify-center gap-3 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-base sm:text-lg hover:from-blue-700 hover:to-blue-600 transition-all mt-auto mb-6 sm:mb-8 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 active:scale-95"
            onClick={toggleMenu}
          >
            <Phone size={18} className="animate-pulse sm:w-5 sm:h-5" />
            <span>{t('nav.callNow')}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;