import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Droplets, UtensilsCrossed, Home, Bath, Brush, Wind, Trash, Layers, Scissors, Scan, Maximize, Minimize } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const WorkPlan = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  
  const workItems = [
    { key: 'workplan.windowCleaning', icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.framesAndMoldings', icon: <Maximize className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.bathroomCleaning', icon: <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.cabinetCleaning', icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.kitchenCleaning', icon: <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.applianceCleaning', icon: <Home className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.wallAndCeilingCleaning', icon: <Maximize className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.carpetCleaning', icon: <Brush className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.blindCleaning', icon: <Minimize className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.doorCleaning', icon: <Scan className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.upholsteredFurnitureCleaning', icon: <Scissors className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.dusting', icon: <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.floorVacuuming', icon: <Trash className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> },
    { key: 'workplan.stairCleaning', icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" /> }
  ];

  // Create multiple scroll reveal refs for columns
  const columnRefs = [useScrollReveal(), useScrollReveal()];

  // Split items into two columns
  const column1Items = workItems.slice(0, Math.ceil(workItems.length / 2));
  const column2Items = workItems.slice(Math.ceil(workItems.length / 2));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200 rounded-full opacity-20 -mt-16 sm:-mt-24 md:-mt-32 -mr-16 sm:-mr-24 md:-mr-32"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-200 rounded-full opacity-20 -mb-20 sm:-mb-30 md:-mb-40 -ml-20 sm:-ml-30 md:-ml-40"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 relative z-10">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`max-w-xl sm:max-w-2xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-3 sm:mb-4 px-2 sm:px-0">
            {t('workplan.title')}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2 sm:px-0">
            {t('workplan.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div 
            ref={columnRefs[0].ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              columnRefs[0].isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <ul className="space-y-3 sm:space-y-4">
              {column1Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-sm sm:text-base text-gray-700">{t(item.key)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div 
            ref={columnRefs[1].ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-300 ${
              columnRefs[1].isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <ul className="space-y-3 sm:space-y-4">
              {column2Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-sm sm:text-base text-gray-700">{t(item.key)}</span>
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