import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Short Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">CleanPro</h2>
            <p className="text-blue-100 mb-6">
              Professional cleaning services with trained personnel and eco-friendly products.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/inkaperu024?igsh=MTZqd2hrcW91cWdoag%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  {t('services.residential.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  {t('services.commercial.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  {t('services.spring.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  {t('services.construction.title')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.info')}</h3>
            <address className="not-italic text-blue-200">
              <p className="mb-2">{t('contact.location')}</p>
              <p className="mb-2">+1 (438) 870-9696</p>
              <p>inka_express024@hotmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300">
            {t('footer.rights').replace('2025', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;