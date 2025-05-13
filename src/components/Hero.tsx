import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import useParallax from '../hooks/useParallax';

const slides = [
  {
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
    alt: 'Professional cleaning service'
  },
  {
    image: 'https://images.pexels.com/photos/4108716/pexels-photo-4108716.jpeg',
    alt: 'Office cleaning'
  },
  {
    image: 'https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg',
    alt: 'Deep cleaning service'
  }
];

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const parallax = useParallax(heroRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Logo in top-left corner for desktop, centered for mobile */}
      <div className="absolute top-8 left-8 z-30 hidden md:block">
        <img src="/logo1.png" alt="CleanPro Logo" className="h-45 w-auto" />
      </div>

      {/* Mobile Logo */}
      <div className="absolute top-0 left-0 right-0 pt-2 z-20 md:hidden">
        <img src="/logo1.png" alt="CleanPro Logo" className="h-52 sm:h-64 md:h-80 w-auto mx-auto" />
      </div>

      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              style={{
                transform: `translate3d(${parallax.x * 0.03}px, ${parallax.y * 0.03}px, 0)`,
              }}
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
        ))}
      </div>
      
      {/* Content - Default centered for desktop, pushed down for mobile */}
      <div className="container mx-auto px-4 z-10 text-white text-center md:transform-none md:mt-0 transform translate-y-24 xs:translate-y-28 sm:translate-y-32">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{
              transform: `translate3d(${parallax.x * -0.05}px, ${parallax.y * -0.05}px, 0)`,
            }}
          >
            {t('hero.title')}
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 opacity-90"
            style={{
              transform: `translate3d(${parallax.x * -0.02}px, ${parallax.y * -0.02}px, 0)`,
            }}
          >
            {t('hero.subtitle')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium py-3 px-6 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            {t('hero.cta')}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;