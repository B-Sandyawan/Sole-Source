/**
 * HeroCarousel.jsx — Full-width hero section shown at the top of the homepage.
 *
 * Figma design (1920x1080):
 * - Hero uses aspect-ratio proportions (not full viewport)
 * - Large product/banner image as background, object-cover
 * - Product title: bold white text (bottom-left)
 * - Subtitle: smaller semibold text
 * - "Shop" button: rounded-2xl with box-shadow
 * - Two circle navigation arrows at bottom-RIGHT
 *
 * Auto-advances every 5 seconds.
 *
 * Props:
 * @param {Array} slides - Array of slide objects from heroSlides in products.js.
 */

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    /* aspect-ratio based height — matches Figma proportions (not full viewport) */
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            {/* Banner image — proper aspect ratio like the Figma */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full aspect-[16/7] sm:aspect-[16/7] md:aspect-[16/6.5] object-cover"
            />

            {/* Text overlay at bottom-left — matching Figma exactly */}
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{ padding: "0 0 6% 4%" }}
            >
              {/* Title — large bold white, exactly like Figma */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-[1.05] whitespace-pre-line">
                {slide.title}
              </h2>

              {/* Subtitle — small text below title */}
              {slide.subtitle && (
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white/80 mt-1 drop-shadow">
                  {slide.subtitle}
                </p>
              )}

              {/* Shop button — wide pill, small text inside */}
              <Link
                to={slide.link}
                className="mt-3 sm:mt-4 inline-flex items-center justify-center bg-white text-black text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors no-underline shadow-[0px_2px_8px_rgba(0,0,0,0.2)]"
                style={{ width: "110px", height: "42px" }}
              >
                Shop
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows at bottom-right */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 flex items-center gap-2 sm:gap-3">
        <button
          onClick={goToPrev}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" className="w-2.5 h-3.5 sm:w-3 sm:h-4 md:w-3.5 md:h-5">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" className="w-2.5 h-3.5 sm:w-3 sm:h-4 md:w-3.5 md:h-5">
            <path d="M2 2L10 10L2 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Slide indicator dots — bottom center */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${idx === currentSlide
              ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-white'
              : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
