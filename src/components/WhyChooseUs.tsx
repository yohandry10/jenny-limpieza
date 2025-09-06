import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Award, Clock, Leaf, Settings, Users, Zap 
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />,
      title: t('why.experience.title'),
      description: t('why.experience.text'),
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />,
      title: t('why.staff.title'),
      description: t('why.staff.text'),
    },
    {
      icon: <Leaf className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />,
      title: t('why.eco.title'),
      description: t('why.eco.text'),
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />,
      title: t('why.tech.title'),
      description: t('why.tech.text'),
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />,
      title: t('why.service.title'),
      description: t('why.service.text'),
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />,
      title: t('why.attention.title'),
      description: t('why.attention.text'),
    },
  ];

  // Create multiple scroll reveal refs for features
  const featureRef1 = useScrollReveal();
  const featureRef2 = useScrollReveal();
  const featureRef3 = useScrollReveal();
  const featureRef4 = useScrollReveal();
  const featureRef5 = useScrollReveal();
  const featureRef6 = useScrollReveal();
  
  // Combine refs into an array for easier access
  const featureRefs = [featureRef1, featureRef2, featureRef3, featureRef4, featureRef5, featureRef6];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-sky-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}" }}
        ></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 relative z-10">
        <h2 
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-blue-900 px-2 sm:px-0"
        >
          {t('why.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={featureRefs[index].ref as React.RefObject<HTMLDivElement>}
              className={`bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                featureRefs[index].isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '700ms'
              }}
            >
              <div className="mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'rotate(80deg)' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;