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
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: t('why.experience.title'),
      description: t('why.experience.text'),
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t('why.staff.title'),
      description: t('why.staff.text'),
    },
    {
      icon: <Leaf className="w-8 h-8 text-blue-600" />,
      title: t('why.eco.title'),
      description: t('why.eco.text'),
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: t('why.tech.title'),
      description: t('why.tech.text'),
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: t('why.service.title'),
      description: t('why.service.text'),
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: t('why.attention.title'),
      description: t('why.attention.text'),
    },
  ];

  // Create multiple scroll reveal refs for features
  const featureRefs = features.map(() => useScrollReveal());

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
        >
          {t('why.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={featureRefs[index].ref}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                featureRefs[index].isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '700ms'
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
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