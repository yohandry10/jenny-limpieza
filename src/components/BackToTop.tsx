import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BackToTop = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-20 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label={t('backToTop.label')}
    >
      <div className="relative">
        <ChevronUp size={24} className="animate-bounce" />
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap font-medium">
          {t('backToTop.label') || 'Top'}
        </span>
      </div>
    </button>
  );
};

export default BackToTop;