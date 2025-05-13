import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.callNow': 'Appelez Maintenant',
    
    'hero.title': 'Solutions de nettoyage personnalisées pour maisons et entreprises',
    'hero.subtitle': 'Nous sommes une entreprise dédiée à fournir des services de nettoyage de haute qualité avec du personnel qualifié et des produits écologiques.',
    'hero.cta': 'Contactez-nous',
    
    'about.mission.title': 'Mission',
    'about.mission.text': 'Fournir des services de nettoyage exceptionnels qui transforment les espaces et améliorent la qualité de vie de nos clients, en utilisant des produits écologiques et des technologies innovantes.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'Être reconnu comme leader dans l\'industrie du nettoyage professionnel, se distinguant par notre excellence, innovation et engagement envers la satisfaction du client.',
    'about.values.title': 'Valeurs',
    'about.values.1': 'Excellence du service',
    'about.values.2': 'Engagement environnemental',
    'about.values.3': 'Intégrité professionnelle',
    'about.values.4': 'Innovation constante',
    
    'why.title': 'Pourquoi Nous Choisir?',
    'why.experience.title': 'Expérience Prouvée',
    'why.experience.text': 'Plus d\'une décennie à transformer des espaces dans toute la région.',
    'why.staff.title': 'Personnel Certifié',
    'why.staff.text': 'Équipe professionnelle avec formation continue et certifications.',
    'why.eco.title': 'Produits Écologiques',
    'why.eco.text': 'Engagés envers l\'environnement et votre santé.',
    'why.tech.title': 'Technologie Avancée',
    'why.tech.text': 'Équipements et méthodes de pointe.',
    'why.service.title': 'Service Personnalisé',
    'why.service.text': 'Solutions adaptées à vos besoins spécifiques.',
    'why.attention.title': 'Attention 24/7',
    'why.attention.text': 'Toujours disponibles quand vous en avez besoin.',
    
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions de nettoyage professionnel conçues pour dépasser vos attentes',
    
    'services.residential.title': 'Nettoyage Résidentiel',
    'services.residential.text': 'Service de nettoyage professionnel pour les maisons, adapté à vos besoins spécifiques.',
    'services.residential.1': 'Nettoyage en profondeur',
    'services.residential.2': 'Désinfection complète',
    'services.residential.3': 'Produits écologiques',
    'services.residential.4': 'Personnel qualifié',
    
    'services.commercial.title': 'Nettoyage Commercial',
    'services.commercial.text': 'Entretien intégral pour bureaux et espaces commerciaux.',
    'services.commercial.1': 'Service 24/7',
    'services.commercial.2': 'Équipements spécialisés',
    'services.commercial.3': 'Plans personnalisés',
    'services.commercial.4': 'Certifications',
    
    'services.spring.title': 'Nettoyage de Printemps',
    'services.spring.text': 'Nettoyage en profondeur et rénovation complète des espaces.',
    'services.spring.1': 'Nettoyage intensif',
    'services.spring.2': 'Organisation',
    'services.spring.3': 'Rénovation',
    'services.spring.4': 'Désinfection',
    
    'services.construction.title': 'Post-Construction',
    'services.construction.text': 'Nettoyage spécialisé après construction et rénovations.',
    'services.construction.1': 'Élimination des débris',
    'services.construction.2': 'Nettoyage en profondeur',
    'services.construction.3': 'Finitions finales',
    'services.construction.4': 'Certification',
    
    'services.quality': 'Garantie de qualité',
    'services.satisfaction': 'Satisfaction garantie pour chaque service',
    'services.availability': 'Disponibilité 24/7',
    'services.emergency': 'Services d\'urgence disponibles',
    'services.equipment': 'Équipement Professionnel',
    'services.technology': 'Technologie de pointe',
    'services.request': 'Demander un Service',
    
    'workplan.title': 'Plan de Travail',
    'workplan.subtitle': 'Notre processus détaillé pour un nettoyage impeccable',
    'workplan.windowCleaning': 'Nettoyage des vitres',
    'workplan.framesAndMoldings': 'Nettoyage des cadres et moulures',
    'workplan.bathroomCleaning': 'Nettoyage et désinfection des salles de bain',
    'workplan.cabinetCleaning': 'Nettoyage intérieur/extérieur des armoires',
    'workplan.kitchenCleaning': 'Nettoyage complet de la cuisine',
    'workplan.applianceCleaning': 'Nettoyage des appareils électroménagers',
    'workplan.wallAndCeilingCleaning': 'Nettoyage des murs et plafonds',
    'workplan.carpetCleaning': 'Nettoyage des tapis',
    'workplan.blindCleaning': 'Nettoyage des stores',
    'workplan.doorCleaning': 'Nettoyage des portes',
    'workplan.upholsteredFurnitureCleaning': 'Nettoyage des meubles rembourrés',
    'workplan.dusting': 'Époussetage complet',
    'workplan.floorVacuuming': 'Aspiration des sols',
    'workplan.stairCleaning': 'Nettoyage des escaliers',
    
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Expériences réelles de clients satisfaits',
    
    'testimonials.maria.name': 'Maria Gonzalez',
    'testimonials.maria.role': 'Propriétaire',
    'testimonials.maria.content': 'Le service était exceptionnel. Ma maison n\\\'a jamais été aussi propre et bien rangée. Hautement recommandé!',
    'testimonials.carlos.name': 'Carlos Rodriguez',
    'testimonials.carlos.role': 'Chef de Bureau',
    'testimonials.carlos.content': 'Professionnel, ponctuel et efficace. Ils ont complètement transformé notre espace de travail.',
    'testimonials.ana.name': 'Ana Martinez',
    'testimonials.ana.role': 'Décoratrice d\\\'Intérieur',
    'testimonials.ana.content': 'Leur souci du détail est impressionnant. Je fais entièrement confiance à leur service pour mes projets.',
    'testimonials.roberto.name': 'Roberto Sanchez',
    'testimonials.roberto.role': 'Propriétaire de Restaurant',
    'testimonials.roberto.content': 'Ils maintiennent notre restaurant impeccable. Leur service est essentiel pour notre entreprise.',
    
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Demandez votre devis personnalisé aujourd\'hui',
    'contact.name': 'Nom Complet',
    'contact.email': 'Courriel',
    'contact.phone': 'Téléphone',
    'contact.service': 'Service d\'Intérêt',
    'contact.select': 'Sélectionnez un service',
    'contact.message': 'Message',
    'contact.send': 'Envoyer la Demande',
    'contact.submitting': 'Envoi en cours...',
    'contact.submitted': 'Envoyé avec succès !',
    'contact.info': 'Informations de Contact',
    'contact.info.location': 'Emplacement',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Courriel',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.schedule': 'Lundi - Vendredi: 8:00 AM - 6:00 PM\nSamedi: 9:00 AM - 4:00 PM\nDimanche: Fermé',
    'contact.location': 'Montréal, Laval, Rive-Sud et Rive-Nord',
    
    'footer.rights': '© 2025. Tous droits réservés.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.followUs': 'Suivez-nous',

    'preloader.loading': 'Chargement...',
    'preloader.welcome': 'Bienvenue !',

    'backToTop.label': 'Retour en haut',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    
    'hero.title': 'Custom cleaning solutions for homes and businesses',
    'hero.subtitle': 'We are a company dedicated to providing high-quality cleaning services with trained personnel and ecological products.',
    'hero.cta': 'Contact Us',
    
    'about.mission.title': 'Mission',
    'about.mission.text': 'Provide exceptional cleaning services that transform spaces and improve our clients\' quality of life, using eco-friendly products and innovative technologies.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'To be recognized as leaders in the professional cleaning industry, distinguishing ourselves by our excellence, innovation, and commitment to customer satisfaction.',
    'about.values.title': 'Values',
    'about.values.1': 'Service excellence',
    'about.values.2': 'Environmental commitment',
    'about.values.3': 'Professional integrity',
    'about.values.4': 'Constant innovation',
    
    'why.title': 'Why Choose Us?',
    'why.experience.title': 'Proven Experience',
    'why.experience.text': 'More than a decade transforming spaces throughout the region.',
    'why.staff.title': 'Certified Personnel',
    'why.staff.text': 'Professional team with continuous training and certifications.',
    'why.eco.title': 'Ecological Products',
    'why.eco.text': 'Committed to the environment and your health.',
    'why.tech.title': 'Advanced Technology',
    'why.tech.text': 'State-of-the-art equipment and methods.',
    'why.service.title': 'Personalized Service',
    'why.service.text': 'Solutions tailored to your specific needs.',
    'why.attention.title': '24/7 Attention',
    'why.attention.text': 'Always available when you need us.',
    
    'services.title': 'Our Services',
    'services.subtitle': 'Professional cleaning solutions designed to exceed your expectations',
    
    'services.residential.title': 'Residential Cleaning',
    'services.residential.text': 'Professional cleaning service for homes, tailored to your specific needs.',
    'services.residential.1': 'Deep cleaning',
    'services.residential.2': 'Complete disinfection',
    'services.residential.3': 'Ecological products',
    'services.residential.4': 'Trained personnel',
    
    'services.commercial.title': 'Commercial Cleaning',
    'services.commercial.text': 'Comprehensive maintenance for offices and commercial spaces.',
    'services.commercial.1': '24/7 Service',
    'services.commercial.2': 'Specialized equipment',
    'services.commercial.3': 'Customized plans',
    'services.commercial.4': 'Certifications',
    
    'services.spring.title': 'Spring Cleaning',
    'services.spring.text': 'Deep cleaning and complete renovation of spaces.',
    'services.spring.1': 'Intensive cleaning',
    'services.spring.2': 'Organization',
    'services.spring.3': 'Renovation',
    'services.spring.4': 'Disinfection',
    
    'services.construction.title': 'Post-Construction',
    'services.construction.text': 'Specialized cleaning after construction and renovations.',
    'services.construction.1': 'Debris removal',
    'services.construction.2': 'Deep cleaning',
    'services.construction.3': 'Final finishes',
    'services.construction.4': 'Certification',
    
    'services.quality': 'Quality guarantee',
    'services.satisfaction': 'Satisfaction guaranteed for every service',
    'services.availability': '24/7 Availability',
    'services.emergency': 'Emergency services available',
    'services.equipment': 'Professional Equipment',
    'services.technology': 'Cutting-edge technology',
    'services.request': 'Request Service',
    
    'workplan.title': 'Work Plan',
    'workplan.subtitle': 'Our detailed process for an impeccable cleaning',
    'workplan.windowCleaning': 'Window cleaning',
    'workplan.framesAndMoldings': 'Cleaning of frames and moldings',
    'workplan.bathroomCleaning': 'Bathroom cleaning and disinfection',
    'workplan.cabinetCleaning': 'Interior/exterior cabinet cleaning',
    'workplan.kitchenCleaning': 'Complete kitchen cleaning',
    'workplan.applianceCleaning': 'Appliance cleaning',
    'workplan.wallAndCeilingCleaning': 'Wall and ceiling cleaning',
    'workplan.carpetCleaning': 'Carpet cleaning',
    'workplan.blindCleaning': 'Blind cleaning',
    'workplan.doorCleaning': 'Door cleaning',
    'workplan.upholsteredFurnitureCleaning': 'Upholstered furniture cleaning',
    'workplan.dusting': 'Complete dusting',
    'workplan.floorVacuuming': 'Floor vacuuming',
    'workplan.stairCleaning': 'Stair cleaning',
    
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real experiences from satisfied customers',
    
    'testimonials.maria.name': 'Maria Gonzalez',
    'testimonials.maria.role': 'Homeowner',
    'testimonials.maria.content': 'The service was exceptional. My house has never been so clean and tidy. Highly recommended!',
    'testimonials.carlos.name': 'Carlos Rodriguez',
    'testimonials.carlos.role': 'Office Manager',
    'testimonials.carlos.content': 'Professional, punctual, and efficient. They have completely transformed our workspace.',
    'testimonials.ana.name': 'Ana Martinez',
    'testimonials.ana.role': 'Interior Designer',
    'testimonials.ana.content': 'Their attention to detail is impressive. I fully trust their service for my projects.',
    'testimonials.roberto.name': 'Roberto Sanchez',
    'testimonials.roberto.role': 'Restaurant Owner',
    'testimonials.roberto.content': 'They keep our restaurant impeccable. Their service is essential for our business.',
    
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Request your personalized quote today',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.service': 'Service of Interest',
    'contact.select': 'Select a service',
    'contact.message': 'Message',
    'contact.send': 'Send Request',
    'contact.submitting': 'Submitting...',
    'contact.submitted': 'Sent successfully!',
    'contact.info': 'Contact Information',
    'contact.info.location': 'Location',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.hours': 'Opening Hours',
    'contact.schedule': 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed',
    'contact.location': 'Montreal, Laval, South Shore and North Shore',
    
    'footer.rights': '© 2025. All rights reserved.',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',

    'preloader.loading': 'Loading...',
    'preloader.welcome': 'Welcome!',

    'backToTop.label': 'Back to top',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};