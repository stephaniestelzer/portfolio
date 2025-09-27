"use client";

import { useState, useEffect, useRef } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface SimpleImageGalleryProps {
  images: GalleryImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  imagesPerSlide?: number;
}

export default function SimpleImageGallery({
  images,
  autoPlay = false,
  autoPlayInterval = 4000,
  imagesPerSlide = 6,
}: SimpleImageGalleryProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Group images into slides
  const slides = [];
  for (let i = 0; i < images.length; i += imagesPerSlide) {
    slides.push(images.slice(i, i + imagesPerSlide));
  }

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlideIndex, autoPlay, autoPlayInterval]);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && slides.length > 1) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }
  };

  if (!images.length) return null;

  const currentSlide = slides[currentSlideIndex];

  return (
    <div 
      className="relative w-full bg-gray-100 py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentSlide.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white">
                    {image.category && (
                      <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                        {image.category}
                      </span>
                    )}
                    <h3 className="text-sm font-semibold mt-1 line-clamp-2">
                      {image.caption}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Right Side */}
      {slides.length > 1 && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-10">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg transition-all duration-200"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Slide Counter */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-10">
          {currentSlideIndex + 1} / {slides.length}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
          <div 
            className="h-full bg-gray-600 transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % autoPlayInterval) / autoPlayInterval) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
}
