import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from 'lucide-react';
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
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-blue-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-blue-500" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </div>
      
      <div 
        className={`container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 relative z-10 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-3 sm:mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            {t('testimonials.subtitle')}
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative flex justify-center mb-6 sm:mb-8 md:mb-10">
            <div className="max-w-4xl mx-auto bg-white rounded-lg sm:rounded-xl shadow-xl p-4 sm:p-6 md:p-8 relative border-t-4 border-blue-500 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 text-blue-500 bg-blue-50 p-1.5 sm:p-2 rounded-full">
                <Quote size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 animate-pulse" />
              </div>
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex items-center space-x-0.5 sm:space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center mt-6 sm:mt-7 md:mt-8 px-2 sm:px-4 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform hover:scale-110" />
            </button>
            
            <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
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
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                      />
                    </div>
                    
                    {index === activeIndex && (
                      <div className="absolute -bottom-10 sm:-bottom-11 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-32 sm:w-36 md:w-40 text-center">
                        <div className="relative">
                          <p className="text-blue-800 font-medium text-xs sm:text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
                            <MessageSquare size={10} className="sm:w-3 sm:h-3 text-blue-500" />
                            <span className="text-xs">{testimonial.role}</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;