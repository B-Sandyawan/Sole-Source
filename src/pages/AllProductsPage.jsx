/**
 * AllProductsPage.jsx — Displays all products in a grid.
 * Route: /products
 */

import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const AllProductsPage = () => {
    return (
        <div className="max-w-[1920px] mx-auto px-10 sm:px-14 md:px-16 lg:px-20 py-8 sm:py-12">
            {/* Back navigation */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white mb-8 no-underline group transition-colors"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </Link>

            {/* Page heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 dark:text-white">
                All Products
            </h1>

            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProductsPage;
