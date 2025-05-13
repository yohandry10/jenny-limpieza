import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Clock, Wrench } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const serviceCards = [
    {
      id: 'residential',
      title: 'Nettoyage Résidentiel',
      description: 'Service de nettoyage professionnel pour les maisons, adapté à vos besoins spécifiques.',
      icon: 'home',
      features: [
        'Nettoyage en profondeur',
        'Désinfection complète',
        'Produits écologiques',
        'Personnel formé'
      ]
    },
    {
      id: 'commercial',
      title: 'Nettoyage Commercial',
      description: 'Entretien complet pour bureaux et espaces commerciaux.',
      icon: 'building',
      features: [
        'Service 24/7',
        'Équipements spécialisés',
        'Plans personnalisés',
        'Certifications'
      ]
    },
    {
      id: 'spring',
      title: 'Nettoyage de Printemps',
      description: 'Nettoyage en profondeur et rénovation complète des espaces.',
      icon: 'sparkles',
      features: [
        'Nettoyage intensif',
        'Organisation',
        'Rénovation',
        'Désinfection'
      ]
    },
    {
      id: 'post-construction',
      title: 'Post-Construction',
      description: 'Nettoyage spécialisé après construction et rénovations.',
      icon: 'hard-hat',
      features: [
        'Enlèvement de débris',
        'Nettoyage en profondeur',
        'Finitions finales',
        'Certification'
      ]
    }
  ];

  const benefits = [
    {
      id: 'quality',
      title: 'Garantie de Qualité',
      description: 'Satisfaction garantie dans chaque service',
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'availability',
      title: 'Disponibilité 24/7',
      description: 'Services d\'urgence disponibles',
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'equipment',
      title: 'Équipements Professionnels',
      description: 'Technologie de pointe',
      icon: <Wrench className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 mb-3 md:mb-4">Nos Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            Solutions de nettoyage professionnelles conçues pour dépasser vos attentes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 md:mb-16">
          {serviceCards.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-1">
                <div className="aspect-w-16 aspect-h-9 mb-3 sm:mb-4">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {service.icon === 'home' && (
                      <span className="text-blue-600 text-3xl sm:text-4xl">🏠</span>
                    )}
                    {service.icon === 'building' && (
                      <span className="text-blue-600 text-3xl sm:text-4xl">🏢</span>
                    )}
                    {service.icon === 'sparkles' && (
                      <span className="text-blue-600 text-3xl sm:text-4xl">✨</span>
                    )}
                    {service.icon === 'hard-hat' && (
                      <span className="text-blue-600 text-3xl sm:text-4xl">🚧</span>
                    )}
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-xs sm:text-sm">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-1 sm:mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-center text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Demander un Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;