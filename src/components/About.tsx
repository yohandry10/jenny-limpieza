import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useParallax from '../hooks/useParallax';
import useScrollReveal from '../hooks/useScrollReveal';

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
      className="py-20 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Mission */}
          <div 
            ref={missionRef}
            className={`bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg shadow-lg transform transition-all duration-700 ${
              missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              transform: missionVisible ? 
                `translate3d(${parallax.x * 0.02}px, ${parallax.y * 0.02}px, 0)` : 
                'translate3d(0, 10px, 0)',
              opacity: missionVisible ? 1 : 0
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-700">
              {t('about.mission.text')}
            </p>
          </div>
          
          {/* Vision */}
          <div 
            ref={visionRef}
            className={`bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg shadow-lg transform transition-all duration-700 delay-150 ${
              visionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              transform: visionVisible ? 
                `translate3d(${parallax.x * 0.01}px, ${parallax.y * 0.01}px, 0)` : 
                'translate3d(0, 10px, 0)',
              opacity: visionVisible ? 1 : 0
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              {t('about.vision.title')}
            </h2>
            <p className="text-gray-700">
              {t('about.vision.text')}
            </p>
          </div>
          
          {/* Values */}
          <div 
            ref={valuesRef}
            className={`bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg shadow-lg transform transition-all duration-700 delay-300 ${
              valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              transform: valuesVisible ? 
                `translate3d(${parallax.x * -0.01}px, ${parallax.y * -0.01}px, 0)` : 
                'translate3d(0, 10px, 0)',
              opacity: valuesVisible ? 1 : 0
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              {t('about.values.title')}
            </h2>
            <ul className="space-y-2">
              {values.map((value, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  {value}
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