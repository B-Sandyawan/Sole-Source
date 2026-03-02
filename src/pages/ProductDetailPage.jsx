/**
 * ProductDetailPage.jsx — Full product detail view.
 *
 * Route: /product/:id
 *
 * Premium redesign:
 * - Two-column layout: large product image (left), info (right)
 * - Dynamic buy buttons — only shows links that exist (non-null)
 * - Organized into "Official" and "Marketplace" store groups
 * - Clean specs section with icon indicators
 * - Breadcrumb navigation
 */

import { useParams, Link, useNavigate } from "react-router-dom";
import { products, formatPrice } from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  // ---- Product not found ----
  if (!product) {
    return (
      <div className="max-w-[1920px] mx-auto px-6 md:px-20 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-[#707072] mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-black font-medium no-underline hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Build buy links array from product.links — only non-null entries
  const storeConfig = {
    nike: { label: "Nike", icon: "🏪", group: "official" },
    adidas: { label: "Adidas", icon: "🏪", group: "official" },
    kith: { label: "KITH", icon: "🏪", group: "official" },
    amazon: { label: "Amazon", icon: "🌐", group: "global" },
    shopee: { label: "Shopee", icon: "🛒", group: "marketplace" },
    tokopedia: { label: "Tokopedia", icon: "🛒", group: "marketplace" },
  };

  const availableLinks = Object.entries(product.links)
    .filter(([, url]) => url !== null && url !== undefined)
    .map(([key, url]) => ({
      key,
      url,
      ...(storeConfig[key] || { label: key, icon: "🔗", group: "other" }),
    }));

  const officialLinks = availableLinks.filter((l) => l.group === "official");
  const globalLinks = availableLinks.filter((l) => l.group === "global");
  const marketplaceLinks = availableLinks.filter((l) => l.group === "marketplace");

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-10 sm:px-14 md:px-20 lg:px-24 py-8 sm:py-12">

        {/* ==================== BACK BUTTON ==================== */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white mb-8 no-underline group transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {/* ==================== TWO-COLUMN LAYOUT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* ---- LEFT: Product Image ---- */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl flex items-center justify-center aspect-square overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-[85%] max-h-[85%] object-contain"
            />
          </div>

          {/* ---- RIGHT: Product Info ---- */}
          <div className="flex flex-col">

            {/* Brand tag */}
            <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-[#555] dark:text-gray-300 uppercase tracking-wider mb-3">
              {product.brand}
            </span>

            {/* Product name */}
            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-black dark:text-white tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Short description */}
            <p className="text-base sm:text-lg text-[#777] mt-1.5">
              {product.shortDesc}
            </p>

            {/* Price block */}
            <div className="mt-5 sm:mt-6 flex items-baseline gap-3 flex-wrap">
              <span className="text-2xl sm:text-3xl font-bold text-black">
                {formatPrice(product.price)}
              </span>

              {product.originalPrice && (
                <span className="text-base text-[#AAA] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}

              {product.discount && (
                <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-500 text-sm font-semibold">
                  {product.discount}
                </span>
              )}
            </div>

            {/* ---- Divider ---- */}
            <div className="border-t border-gray-200 my-6 sm:my-8" />

            {/* ---- Buy Section ---- */}
            <div>
              <h3 className="text-lg font-bold text-black mb-5">Where to Buy</h3>

              {/* All buy links as clean minimalist pill buttons */}
              <div className="flex flex-col gap-3">

                {/* Official Store links — dark gray prominent pill */}
                {officialLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-[54px] bg-[#666666] text-white font-semibold text-[15px] rounded-full hover:bg-[#555] transition-colors duration-200 no-underline"
                  >
                    Buy at {link.label}
                  </a>
                ))}

                {/* Global links — white outlined pill */}
                {globalLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-[54px] bg-white text-black font-semibold text-[15px] rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200 no-underline"
                  >
                    Buy at {link.label}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </a>
                ))}

                {/* Marketplace links — white outlined pill */}
                {marketplaceLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-[54px] bg-white text-black font-semibold text-[15px] rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200 no-underline"
                  >
                    Buy at {link.label}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                  </a>
                ))}

              </div>
            </div>

            {/* ---- Divider ---- */}
            <div className="border-t border-gray-200 my-6 sm:my-8" />

            {/* ---- Description ---- */}
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Description</h3>
              <p className="text-sm sm:text-base text-[#666] leading-relaxed">
                {product.longDesc}
              </p>
            </div>

            {/* ---- Specs ---- */}
            <div className="mt-6 sm:mt-8 bg-white rounded-xl p-4 sm:p-5 border border-gray-100">
              <h3 className="text-sm font-bold text-black mb-3 uppercase tracking-wider">Product Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-0.5">Colour</p>
                  <p className="text-sm font-medium text-black">{product.color}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-0.5">Style</p>
                  <p className="text-sm font-medium text-black">{product.style}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-0.5">Origin</p>
                  <p className="text-sm font-medium text-black">{product.country}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
