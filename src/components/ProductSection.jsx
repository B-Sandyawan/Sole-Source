/**
 * ProductSection.jsx — A grid of ProductCards with pagination arrows.
 *
 * Props:
 * @param {string} id       - HTML id for anchor linking (e.g. "new-items").
 * @param {string} title    - Section heading text (e.g. "New Items").
 * @param {Array}  products - Filtered array of products to display.
 */

import { useState } from "react";
import ProductCard from "./ProductCard";
import useScrollReveal from "../hooks/useScrollReveal";

const ProductSection = ({ id, title, products }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const sectionRef = useScrollReveal();

  const visibleProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const goToPrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id={id} className="bg-[#FAFAFA] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div
        ref={sectionRef}
        className="section-reveal w-full max-w-[1920px] mx-auto px-10 sm:px-10 md:px-12 lg:px-16 xl:px-20"
        style={{ paddingTop: "48px", paddingBottom: "48px" }}
      >
        {/* Header: title left, arrows right */}
        <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-black tracking-tight">
            {title}
          </h2>

          {/* Page indicator + Navigation arrows */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm text-[#999] font-medium">
              {page + 1} / {totalPages}
            </span>
            <div className="flex gap-2 sm:gap-2.5">
              <button
                onClick={goToPrev}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 hover:border-gray-400 flex items-center justify-center transition-colors text-gray-600 hover:text-black"
                aria-label={`Previous ${title}`}
              >
                <svg width="16" height="26" viewBox="0 0 16 26" fill="none" className="w-2.5 h-4 sm:w-3 sm:h-5">
                  <path d="M14 2L3 13L14 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 hover:border-gray-400 flex items-center justify-center transition-colors text-gray-600 hover:text-black"
                aria-label={`Next ${title}`}
              >
                <svg width="16" height="26" viewBox="0 0 16 26" fill="none" className="w-2.5 h-4 sm:w-3 sm:h-5">
                  <path d="M2 2L13 13L2 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {visibleProducts.map((product, index) => (
            <div
              key={`${page}-${product.id}`}
              style={{
                animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
