/**
 * ProductCard.jsx — Reusable card displaying a single product.
 *
 * Figma design:
 * - Square product image area with rounded corners
 * - Product name: semibold
 * - Short desc: gray, smaller text
 * - Price: with optional original price + discount badge
 *
 * Props:
 * @param {object} product - A product object from products array in products.js.
 */

import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl bg-white dark:bg-[#1a1a1a] hover:shadow-lg transition-shadow duration-300 no-underline"
    >
      {/* Product image container — square aspect, rounded top */}
      <div className="bg-[#F0F0F0] dark:bg-[#222] flex items-center justify-center aspect-square overflow-hidden">
        <img
          src={product.itemImage || product.image}
          alt={product.name}
          className="max-h-[75%] max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product info */}
      <div className="p-3 sm:p-4">
        {/* Product name */}
        <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white truncate leading-snug">
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-[11px] sm:text-xs md:text-sm text-[#707072] mt-1">
          {product.shortDesc}
        </p>

        {/* Price row */}
        <div className="mt-2 sm:mt-2.5 flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-sm sm:text-base font-bold text-black dark:text-white">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span className="text-[10px] sm:text-xs text-[#999] line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}

          {product.discount && (
            <span className="text-[10px] sm:text-xs text-red-500 font-semibold">
              {product.discount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
