import { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();
  
  const testimonialsData = [
    { 
      id: 'maria',
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 'carlos',
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      id: 'ana',
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      id: 'roberto',
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    }
  ];

  const testimonials: Testimonial[] = testimonialsData.map(item => ({
    name: t(`testimonials.${item.id}.name`),
    role: t(`testimonials.${item.id}.role`),
    content: t(`testimonials.${item.id}.content`),
    avatar: item.avatar
  }));

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "80px"
          }}
        ></div>
      </div>
      
      <div 
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-blue-200 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative flex justify-center mb-10">
            <Quote className="absolute text-cyan-500 w-16 h-16 opacity-30 top-0 -left-4" />
            
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl">
              <p className="text-white/90 text-lg text-center">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex -space-x-4">
              {testimonials.map((testimonial, index) => {
                // Calculate distance from active index (handling wrap-around)
                const distance = Math.min(
                  Math.abs(index - activeIndex),
                  Math.abs(index - activeIndex - testimonials.length),
                  Math.abs(index - activeIndex + testimonials.length)
                );
                
                const scale = 1 - distance * 0.15;
                const opacity = 1 - distance * 0.3;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative transition-all duration-300 ${
                      index === activeIndex ? 'z-30' : 'z-20'
                    }`}
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity
                    }}
                  >
                    <div className={`rounded-full overflow-hidden border-2 ${
                        index === activeIndex ? 'border-cyan-400' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 object-cover"
                      />
                    </div>
                    
                    {index === activeIndex && (
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-40 text-center">
                        <p className="text-white font-medium text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-blue-300 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;