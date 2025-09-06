import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, CheckCircle, Clock, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import useParallax from '../hooks/useParallax';

const slides = [
  {
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
    alt: 'Professional cleaning service',
    icon: <Star className="text-yellow-400" />,
    highlight: 'Premium Service'
  },
  {
    image: 'https://images.pexels.com/photos/4108716/pexels-photo-4108716.jpeg',
    alt: 'Office cleaning',
    icon: <CheckCircle className="text-green-400" />,
    highlight: 'Satisfaction Guaranteed'
  },
  {
    image: 'https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg',
    alt: 'Deep cleaning service',
    icon: <Shield className="text-blue-400" />,
    highlight: 'Professional Team'
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
      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-30 hidden md:block">
        <img src="/logo1.png" alt="CleanPro Logo" className="h-32 lg:h-40 xl:h-45 w-auto filter drop-shadow-lg" />
      </div>

      {/* Mobile Logo */}
      <div className="absolute top-0 left-0 right-0 pt-1 sm:pt-2 z-20 md:hidden">
        <img src="/logo1.png" alt="CleanPro Logo" className="h-40 xs:h-44 sm:h-52 w-auto mx-auto filter drop-shadow-lg" />
      </div>
      
      {/* Current slide highlight */}
      <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-30 hidden lg:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 lg:px-4 py-2 rounded-full">
        {slides[currentSlide].icon}
        <span className="text-white font-medium text-sm lg:text-base">{slides[currentSlide].highlight}</span>
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
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>
          </div>
        ))}
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content - Default centered for desktop, pushed down for mobile */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 z-10 text-white text-center md:transform-none md:mt-0 transform translate-y-20 xs:translate-y-24 sm:translate-y-28 md:translate-y-0">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
            style={{
              transform: `translate3d(${parallax.x * -0.05}px, ${parallax.y * -0.05}px, 0)`,
            }}
          >
            {t('hero.title')}
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto"
            style={{
              transform: `translate3d(${parallax.x * -0.02}px, ${parallax.y * -0.02}px, 0)`,
            }}
          >
            {t('hero.subtitle')}
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <Clock size={14} className="text-blue-300 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base">24/7 Service</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <Shield size={14} className="text-blue-300 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base">Certified Team</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <Sparkles size={14} className="text-blue-300 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base">Eco-friendly</span>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:from-blue-700 hover:to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 text-sm sm:text-base"
          >
            {t('hero.cta')}
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              currentSlide === index ? 'bg-white shadow-lg' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;