import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useParallax from '../hooks/useParallax';
import useScrollReveal from '../hooks/useScrollReveal';
import { Target, Eye, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const parallax = useParallax(sectionRef);
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: visionRef, isVisible: visionVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();

  const values = [
    t('about.values.1'),
    t('about.values.2'),
    t('about.values.3'),
    t('about.values.4')
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-3 sm:mb-4">About Us</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">We are committed to excellence in every aspect of our service, providing the highest quality cleaning solutions for homes and businesses.</p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Mission */}
          <div 
            ref={missionRef as React.RefObject<HTMLDivElement>}
            className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-700 border-t-4 border-blue-600 ${
              missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              transform: missionVisible ? 
                `translate3d(${parallax.x * 0.02}px, ${parallax.y * 0.02}px, 0)` : 
                'translate3d(0, 10px, 0)',
              opacity: missionVisible ? 1 : 0
            }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-blue-800 text-center">
              {t('about.mission.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              {t('about.mission.text')}
            </p>
          </div>
          
          {/* Vision */}
          <div 
            ref={visionRef as React.RefObject<HTMLDivElement>}
            className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-700 delay-150 border-t-4 border-blue-600 ${
              visionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              transform: visionVisible ? 
                `translate3d(${parallax.x * 0.01}px, ${parallax.y * 0.01}px, 0)` : 
                'translate3d(0, 10px, 0)',
              opacity: visionVisible ? 1 : 0
            }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-blue-800 text-center">
              {t('about.vision.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
          
          {/* Values */}
          <div 
            ref={valuesRef as React.RefObject<HTMLDivElement>}
            className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-700 delay-300 border-t-4 border-blue-600 ${
              valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              transform: valuesVisible ? 
                `translate3d(${parallax.x * -0.01}px, ${parallax.y * -0.01}px, 0)` : 
                'translate3d(0, 10px, 0)',
              opacity: valuesVisible ? 1 : 0
            }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-blue-800 text-center">
              {t('about.values.title')}
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-center text-gray-700 bg-blue-50 p-2 sm:p-3 rounded-lg">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Lightbulb size={12} className="text-blue-600 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-sm sm:text-base">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;