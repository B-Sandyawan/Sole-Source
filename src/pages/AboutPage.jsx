/**
 * AboutPage.jsx — "About Us" page for Sole Source.
 *
 * Figma design (id: 1:42):
 * - "About Us" heading
 * - Company description paragraph
 * - Office/team image
 *
 * Route: /about
 */

import { Link } from "react-router-dom";
import sidebarArrow from "../assets/images/sidebar arrow.svg";
import officeImage from "../assets/images/sole source office.svg";

const AboutPage = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-10 sm:px-14 md:px-16 lg:px-20 py-8 sm:py-12">
      {/* Back navigation */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-black mb-8 no-underline group transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>

      {/* Page heading */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 dark:text-white">
        About Us
      </h1>

      {/* Two-column layout: text + image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex flex-col justify-center">
          <p className="text-base sm:text-lg md:text-xl text-[#707072] leading-relaxed">
            Sole Source is your ultimate destination for premium sneakers from
            the world's most coveted brands. We curate the finest footwear from
            Nike, Adidas, Jordan, and exclusive collaboration releases — making
            it easy for sneaker enthusiasts to discover, compare, and purchase
            their next pair.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#707072] leading-relaxed mt-6">
            Founded with a passion for sneaker culture, our mission is to bridge
            the gap between global and local markets, providing access to both
            international retailers and Indonesian e-commerce platforms. Whether
            you're a seasoned collector or just starting your journey, Sole
            Source has you covered.
          </p>
        </div>

        {/* Office/team image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={officeImage}
            alt="Sole Source Office"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
