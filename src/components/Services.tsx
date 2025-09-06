import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Clock, Wrench, Home, Building, Sparkles, HardHat, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const serviceCards = [
    {
      id: 'residential',
      title: t('services.residential.title') || 'Nettoyage Résidentiel',
      description: t('services.residential.text') || 'Service de nettoyage professionnel pour les maisons, adapté à vos besoins spécifiques.',
      icon: <Home className="w-10 h-10 text-blue-600" />,
      features: [
        t('services.residential.1') || 'Nettoyage en profondeur',
        t('services.residential.2') || 'Désinfection complète',
        t('services.residential.3') || 'Produits écologiques',
        t('services.residential.4') || 'Personnel formé'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'commercial',
      title: t('services.commercial.title') || 'Nettoyage Commercial',
      description: t('services.commercial.text') || 'Entretien complet pour bureaux et espaces commerciaux.',
      icon: <Building className="w-10 h-10 text-blue-600" />,
      features: [
        t('services.commercial.1') || 'Service 24/7',
        t('services.commercial.2') || 'Équipements spécialisés',
        t('services.commercial.3') || 'Plans personnalisés',
        t('services.commercial.4') || 'Certifications'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'spring',
      title: t('services.spring.title') || 'Nettoyage de Printemps',
      description: t('services.spring.text') || 'Nettoyage en profondeur et rénovation complète des espaces.',
      icon: <Sparkles className="w-10 h-10 text-blue-600" />,
      features: [
        t('services.spring.1') || 'Nettoyage intensif',
        t('services.spring.2') || 'Organisation',
        t('services.spring.3') || 'Rénovation',
        t('services.spring.4') || 'Désinfection'
      ],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'post-construction',
      title: t('services.construction.title') || 'Post-Construction',
      description: t('services.construction.text') || 'Nettoyage spécialisé après construction et rénovations.',
      icon: <HardHat className="w-10 h-10 text-blue-600" />,
      features: [
        t('services.construction.1') || 'Enlèvement de débris',
        t('services.construction.2') || 'Nettoyage en profondeur',
        t('services.construction.3') || 'Finitions finales',
        t('services.construction.4') || 'Certification'
      ],
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const benefits = [
    {
      id: 'quality',
      title: t('services.quality') || 'Garantie de Qualité',
      description: t('services.satisfaction') || 'Satisfaction garantie dans chaque service',
      icon: <Shield className="w-8 h-8 text-white" />,
      bgColor: 'bg-blue-600'
    },
    {
      id: 'availability',
      title: t('services.availability') || 'Disponibilité 24/7',
      description: t('services.emergency') || 'Services d\'urgence disponibles',
      icon: <Clock className="w-8 h-8 text-white" />,
      bgColor: 'bg-indigo-600'
    },
    {
      id: 'equipment',
      title: t('services.equipment') || 'Équipements Professionnels',
      description: t('services.technology') || 'Technologie de pointe',
      icon: <Wrench className="w-8 h-8 text-white" />,
      bgColor: 'bg-cyan-600'
    }
  ];

  return (
    <section id="services" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-2 sm:mb-3 md:mb-4">{t('services.title') || 'Nos Services'}</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-700 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
            {t('services.subtitle') || 'Solutions de nettoyage professionnelles conçues pour dépasser vos attentes'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-16">
          {serviceCards.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="p-2 sm:p-3">
                <div className="aspect-w-16 aspect-h-9 mb-3 sm:mb-4">
                  <div className="w-full h-24 sm:h-28 md:h-32 bg-blue-50 flex items-center justify-center rounded-lg">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-600">{service.icon}</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${benefit.bgColor} flex items-center justify-center shadow-lg`}>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white">{benefit.icon}</div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-blue-800 mb-2 sm:mb-3 md:mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-blue-600 text-white font-medium text-sm sm:text-base rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {t('services.request') || 'Demander un Service'}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;