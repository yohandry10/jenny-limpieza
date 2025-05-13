import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const WorkPlan = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  
  const workItemKeys = [
    'workplan.windowCleaning',
    'workplan.framesAndMoldings',
    'workplan.bathroomCleaning',
    'workplan.cabinetCleaning',
    'workplan.kitchenCleaning',
    'workplan.applianceCleaning',
    'workplan.wallAndCeilingCleaning',
    'workplan.carpetCleaning',
    'workplan.blindCleaning',
    'workplan.doorCleaning',
    'workplan.upholsteredFurnitureCleaning',
    'workplan.dusting',
    'workplan.floorVacuuming',
    'workplan.stairCleaning'
  ];

  // Create multiple scroll reveal refs for columns
  const columnRefs = [useScrollReveal(), useScrollReveal()];

  // Split items into two columns
  const column1Keys = workItemKeys.slice(0, Math.ceil(workItemKeys.length / 2));
  const column2Keys = workItemKeys.slice(Math.ceil(workItemKeys.length / 2));

  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mt-32 -mr-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 -mb-40 -ml-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('workplan.title')}
          </h2>
          <p className="text-blue-600 text-lg">
            {t('workplan.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div 
            ref={columnRefs[0].ref}
            className={`transition-all duration-700 ${
              columnRefs[0].isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <ul className="space-y-4">
              {column1Keys.map((itemKey, index) => (
                <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div 
            ref={columnRefs[1].ref}
            className={`transition-all duration-700 delay-300 ${
              columnRefs[1].isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <ul className="space-y-4">
              {column2Keys.map((itemKey, index) => (
                <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPlan;