import { useEffect, useState } from 'react';
import { Brush as CleaningBrush } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Preloader = () => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Progress animation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = prevProgress < 60 ? 2 : prevProgress < 80 ? 1 : 0.5;
        const newProgress = prevProgress + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 35);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#ffffff_20%,_#ffffff_40%,_transparent_40%,_transparent_60%,_#ffffff_60%,_#ffffff_80%,_transparent_80%)]"
          style={{
            backgroundSize: '48px 48px',
            animation: 'moveBackground 8s linear infinite'
          }}
        />
      </div>

      <div className={`transition-all duration-1000 transform ${
        showLogo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative">
          <div className="absolute -inset-4 bg-white/20 rounded-full blur-lg animate-pulse" />
          <div className="relative flex items-center justify-center gap-4 mb-8">
            <CleaningBrush size={60} className="text-white animate-bounce" />
            <img src="/logo1.png" alt="CleanPro Logo" className="h-45 w-auto" />
          </div>
        </div>
      </div>
      
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mt-8">
        <div 
          className="h-full bg-white rounded-full transition-all duration-300 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Animated shine effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            style={{
              animation: 'shine 1.5s linear infinite',
              backgroundSize: '200% 100%'
            }}
          />
        </div>
      </div>
      
      <p className="mt-4 text-white/90 font-medium">
        {progress < 100 ? t('preloader.loading') : t('preloader.welcome')}
      </p>

      <style jsx>{`
        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 48px 48px;
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;