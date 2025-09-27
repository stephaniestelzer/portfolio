"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  // Video specific properties
  videoId?: string; // For YouTube/Vimeo IDs
  platform?: 'youtube' | 'vimeo';
  srcSet?: string; // Responsive images
  sizes?: string;  // Responsive images
}

interface SwiperGalleryProps {
  items: GalleryItem[];
}

// Helper functions for video embeds
const getYouTubeEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
};

const getVimeoEmbedUrl = (videoId: string) => {
  return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
};

const extractYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const extractVimeoId = (url: string) => {
  const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|(album\/\d+\/video\/)|(video\/)|(watch\/)|(videos\/))?([0-9]+)/;
  const match = url.match(regExp);
  return match ? match[9] : null;
};

export default function SwiperGallery({
  items,
}: SwiperGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Calculate the tallest image height (in px, based on a base width)
  const baseWidth = 400; // px, matches max slide width
  const maxHeight = items.reduce((max, item) => {
    if (item.type === 'image' && item.width && item.height) {
      const h = baseWidth / (item.width / item.height);
      return Math.max(max, h);
    }
    return max;
  }, 280); // fallback to 280px if no dimensions

  const openLightbox = (item: GalleryItem) => {
    console.log('Opening lightbox for item:', item);
    if (item.type === 'image') {
      setLightboxItem(item);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxItem(null);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  console.log('Lightbox state:', { lightboxOpen, lightboxItem });

  return (
    <div className="relative w-full bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Keyboard]}
          spaceBetween={24}
          slidesPerView="auto"
          centeredSlides={false}
          grabCursor={true}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          breakpoints={{
            320: {
              spaceBetween: 16,
            },
            768: {
              spaceBetween: 24,
            },
            1024: {
              spaceBetween: 32,
            },
          }}
          className="swiper-gallery"
        >
          {items.map((item) => {
            // Calculate dimensions based on aspect ratio or provided dimensions
            const aspectRatio = item.width && item.height ? item.width / item.height : 1;
            const calculatedWidth = Math.round(maxHeight * aspectRatio);
            const finalWidth = Math.max(200, Math.min(400, calculatedWidth)); // Min 200px, max 400px
            
            // Handle video embeds
            let embedUrl = '';
            if (item.type === 'video' && item.videoId) {
              if (item.platform === 'youtube') {
                embedUrl = getYouTubeEmbedUrl(item.videoId);
              } else if (item.platform === 'vimeo') {
                embedUrl = getVimeoEmbedUrl(item.videoId);
              }
            }
            
            return (
              <SwiperSlide key={item.id} className="!w-auto">
                <div className="relative group cursor-pointer flex flex-col items-center" style={{height: `${maxHeight}px`}}>
                  {/* Media Container */}
                  <div 
                    className="relative overflow-hidden w-full flex flex-col items-center"
                    style={{
                      width: `${finalWidth}px`,
                      height: 'auto', // let content dictate height
                      alignItems: 'flex-start',
                    }}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        srcSet={item.srcSet}
                        sizes={item.sizes}
                        alt={item.alt}
                        className="w-full h-auto max-h-[70vh] object-contain mt-0 self-start transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openLightbox(item);
                        }}
                      />
                    ) : (
                      <iframe
                        src={embedUrl}
                        title={item.alt}
                        className="w-full h-auto max-h-[70vh] mt-0 self-start"
                        style={{ aspectRatio: aspectRatio }}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  {/* Caption */}
                  <div className="w-full flex-col items-start">
                    <div className="text-black">
                      <h3 className="text-sm font-semibold mt-1 line-clamp-2">
                        {item.caption}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-6 right-6 z-10 flex space-x-2">
          <div className="swiper-button-prev-custom p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg transition-all duration-200 cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-custom p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg transition-all duration-200 cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxItem && (
        <div 
          className="lightbox-backdrop fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          style={{ display: 'flex' }}
        >
          <div className="lightbox-content relative max-w-7xl max-h-[90vh] mx-4">
            {/* Debug text */}
            <div className="absolute top-4 left-4 text-white text-lg font-bold z-20">
              LIGHTBOX IS OPEN
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={lightboxItem?.src || ''}
                srcSet={lightboxItem?.srcSet}
                sizes={lightboxItem?.sizes}
                alt={lightboxItem?.alt || ''}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 ">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mt-2">
                    {lightboxItem?.caption}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .swiper-gallery {
          padding: 0 80px;
          overflow: visible;
          transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        
        .swiper-gallery .swiper-wrapper {
          align-items: center;
        }
        
        .swiper-gallery .swiper-slide {
          width: auto !important;
        }
        
        .swiper-button-prev-custom.swiper-button-disabled,
        .swiper-button-next-custom.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .swiper-button-prev-custom:not(.swiper-button-disabled):hover,
        .swiper-button-next-custom:not(.swiper-button-disabled):hover {
          transform: scale(1.1);
        }
        
        /* Lightbox animations */
        .lightbox-backdrop {
          animation: fadeIn 0.3s ease-out;
        }
        
        .lightbox-content {
          animation: zoomIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
