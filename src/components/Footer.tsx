import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Logo and Short Description */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">CleanPro</h2>
            <p className="text-blue-100 mb-4 md:mb-6 text-sm sm:text-base">
              Professional cleaning services with trained personnel and eco-friendly products.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/inkaperu024?igsh=MTZqd2hrcW91cWdoag%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.residential.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.commercial.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.spring.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.construction.title')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('contact.info')}</h3>
            <address className="not-italic text-blue-200 text-sm sm:text-base">
              <p className="mb-2">{t('contact.location')}</p>
              <p className="mb-2">+1 (438) 870-9696</p>
              <p className="mb-2">+1 (514) 812 4712</p>
              <p className="break-all">inka_express024@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 md:pt-8 text-center">
          <p className="text-blue-300 text-xs sm:text-sm">
            {t('footer.rights').replace('2025', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;