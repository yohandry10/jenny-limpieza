import { useState, useRef, useEffect, useMemo } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Image as ImageIcon, Film, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import useScrollReveal from '../hooks/useScrollReveal';

interface MediaItem {
  id: string;
  src: string;
  type: 'image' | 'video';
  alt: string;
}

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');
  const [animateItems, setAnimateItems] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isVisible } = useScrollReveal();
  const titleRef = useScrollReveal();
  const filterRef = useScrollReveal();

  // Generar array de imágenes (image1.jpeg a image13.jpeg)
  const images: MediaItem[] = Array.from({ length: 13 }, (_, i) => ({
    id: `image-${i + 1}`,
    src: `/image${i + 1}.jpeg`,
    type: 'image' as const,
    alt: `Imagen de limpieza ${i + 1}`
  }));

  // Generar array de videos (video1.mp4 a video7.mp4)
  const videos: MediaItem[] = Array.from({ length: 7 }, (_, i) => ({
    id: `video-${i + 1}`,
    src: `/video${i + 1}.mp4`,
    type: 'video' as const,
    alt: `Video de limpieza ${i + 1}`
  }));

  const allMedia = [...images, ...videos];
  
  // Get filtered media based on current filter using useMemo
  const filteredMedia = useMemo(() => {
    if (filter === 'all') return allMedia;
    return filter === 'images' ? images : videos;
  }, [allMedia, filter, images, videos]);
      
  useEffect(() => {
    // Añadir un pequeño retraso para la animación de los elementos
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimateItems(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
    setIsVideoPlaying(false);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Esta función se utiliza indirectamente a través de los eventos onPlay y onPause del video
  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return;
    
    const currentIndex = filteredMedia.findIndex(media => media.id === selectedMedia.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredMedia.length - 1;
    } else {
      newIndex = currentIndex < filteredMedia.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedMedia(filteredMedia[newIndex]);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateMedia('prev');
    } else if (e.key === 'ArrowRight') {
      navigateMedia('next');
    }
  };
  
  // Efecto para manejar eventos de teclado a nivel global cuando el modal está abierto
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateMedia('prev');
      } else if (e.key === 'ArrowRight') {
        navigateMedia('next');
      }
    };
    
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [selectedMedia]);

  return (
    <section 
      id="gallery" 
      ref={ref}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4">
        {/* Header */}
        <div 
          ref={titleRef.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-all duration-1000 ${
            titleRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-4 px-2 sm:px-0">
            {t('gallery.title')}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-gray-700 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        {/* Filter Controls */}
        <div 
          ref={filterRef.ref as React.RefObject<HTMLDivElement>}
          className={`flex justify-center mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0 transition-all duration-700 ${
            filterRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex bg-white shadow-md rounded-full p-0.5 sm:p-1">
            <button 
              onClick={() => setFilter('all')}
              className={`flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">{t('gallery.all')}</span>
            </button>
            <button 
              onClick={() => setFilter('images')}
              className={`flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === 'images' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">{t('gallery.images')}</span>
            </button>
            <button 
              onClick={() => setFilter('videos')}
              className={`flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === 'videos' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Film className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">{t('gallery.videos')}</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {filteredMedia.map((media, index) => (
            <div
              key={media.id}
              className={`group relative aspect-square bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-105 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openModal(media)}
            >
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={media.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 ml-0.5 sm:ml-1" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-2 sm:p-3 md:p-4">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-1 sm:mb-2">
                    {media.type === 'video' ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium hidden sm:block">{media.type === 'image' ? t('gallery.viewImage') : t('gallery.playVideo')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div 
              className="relative max-w-4xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-blue-400 transition-colors z-10 p-1 sm:p-2"
                aria-label="Cerrar galería"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateMedia('prev')}
                className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10 bg-black/30 p-1.5 sm:p-2 rounded-full hover:bg-black/50"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} className="sm:w-8 sm:h-8" />
              </button>
              
              <button
                onClick={() => navigateMedia('next')}
                className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10 bg-black/30 p-1.5 sm:p-2 rounded-full hover:bg-black/50"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={20} className="sm:w-8 sm:h-8" />
              </button>

              {/* Media Content */}
              <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
                  />
                ) : (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={selectedMedia.src}
                      className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
                      controls
                      autoPlay={isVideoPlaying}
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />
                  </div>
                )}
              </div>

              {/* Media Counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm bg-black/60 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                {filteredMedia.findIndex(media => media.id === selectedMedia.id) + 1} / {filteredMedia.length}
                <span className="ml-1 sm:ml-2 text-blue-400">
                  {selectedMedia.type === 'image' ? <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 inline" /> : <Film className="w-3 h-3 sm:w-4 sm:h-4 inline" />}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
