/**
 * HomePage.jsx — The main landing page of Sole Source.
 *
 * Assembles multiple sections in order:
 * 1. HeroCarousel    — Full-width image slider with featured shoes.
 * 2. CollabSection   — "COLLAB NEWS!!" grid of collaboration cards.
 * 3. ProductSection   — "New Items" product grid.
 * 4. ProductSection   — "Popular Items" product grid.
 *
 * Data flow:
 *   products.js  →  import here  →  filter by category  →  pass as props to children
 *
 * Search:
 *   Reads `?search=` from the URL query string and filters products accordingly.
 *   If a search is active, only matching products are shown in a simple grid.
 */

import { useSearchParams, Link } from "react-router-dom";
import { products, heroSlides, collabNews } from "../data/products";
import HeroCarousel from "../components/HeroCarousel";
import CollabSection from "../components/CollabSection";
import ProductSection from "../components/ProductSection";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  // Read URL search params — used for the search feature
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // ---- Filter products by category ----
  const newItems = products.filter(
    (p) => p.category === "new" || p.category === "both"
  );

  const popularItems = products.filter(
    (p) => p.category === "popular" || p.category === "both"
  );

  // ---- Search filtering ----
  const searchResults = searchQuery
    ? products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.brand.toLowerCase().includes(searchQuery)
    )
    : null;

  // If the user is searching, show search results instead of normal homepage
  if (searchResults) {
    return (
      <div className="w-full px-10 sm:px-10 md:px-12 lg:px-16 xl:px-20" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 dark:text-white">
          Search results for &ldquo;{searchQuery}&rdquo;
        </h2>

        {searchResults.length === 0 ? (
          <p className="text-gray-500 text-sm">No products found matching your search.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // ---- Default homepage (no search active) ----
  return (
    <div>
      {/* Hero carousel with featured banners */}
      <HeroCarousel slides={heroSlides} />

      {/* Collab news section — white bg */}
      <CollabSection collabs={collabNews} />

      {/* New Items product section — light gray bg */}
      <ProductSection id="new-items" title="New Items" products={newItems} />

      {/* Popular Items product section — white bg for alternation */}
      <ProductSection id="popular-items" title="Popular Items" products={popularItems} />

      {/* View All Products link */}
      <div className="w-full max-w-[1920px] mx-auto px-10 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-12">
        <Link
          to="/products"
          className="flex items-center justify-center gap-2 w-full py-4 border border-gray-300 dark:border-gray-600 rounded-full text-[15px] font-semibold text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
        >
          View All Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
