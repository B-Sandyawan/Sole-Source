/**
 * products.js — Central data store for all products on Sole Source.
 *
 * HOW TO ADD A NEW PRODUCT:
 * 1. Copy one of the existing objects below.
 * 2. Give it a unique `id` (increment the last one).
 * 3. Fill in name, brand, category, prices, description, and links.
 * 4. Import the product image at the top and reference it in `image` / `itemImage`.
 *
 * FIELD REFERENCE:
 * - id            : Unique numeric identifier.
 * - name          : Display name shown on cards and detail page.
 * - brand         : Brand name (Nike, Adidas, etc.).
 * - category      : "new" | "popular" | "both" — controls which section(s) show the product.
 * - price         : Current selling price (number, in Rp).
 * - originalPrice : Original price before discount (number, in Rp). Null if no discount.
 * - discount      : Discount label string (e.g. "15% off"). Null if no discount.
 * - shortDesc     : One-line subtitle shown on cards.
 * - longDesc      : Detailed paragraph shown on the product detail page.
 * - color         : Color info string.
 * - style         : Style/SKU code string.
 * - country       : Country/Region of origin.
 * - image         : Large image used for the detail page & cards.
 * - itemImage     : Smaller thumbnail used for grid items (if different from main image).
 * - links         : Object with purchase URLs for Nike, Amazon, Laced, Stockx, Tokopedia.
 */

// ----- Image Imports -----
// We import SVGs so Vite can resolve them as proper asset URLs at build time.
import nikeAlphafly2 from "../assets/images/Nike Alphafly 2.svg";
import nikeAlphafly2Item from "../assets/images/Nike Alphafly 2 item.svg";
import kithPredator from "../assets/images/Kith for Adidas Football Predator Sala.svg";
import kithPredatorItem from "../assets/images/Kith for Adidas Football Predator Sala-1.svg";
import nikeAirMaxPlus from "../assets/images/Nike Air Max Plus.svg";
import nikeAirMaxPlusItem from "../assets/images/Nike Air Max Plus item.svg";
import nikeAirMax95 from "../assets/images/Nike Air Max 95.svg";
import gazelleLoPro from "../assets/images/GAZELLE LO PRO.svg";
import gazelleLoProItem from "../assets/images/GAZELLE LO PRO item.svg";
import jordanHeir from "../assets/images/Jordan Heir Series 2 PF.svg";
import jordanHeirItem from "../assets/images/Jordan Heir Series 2 PF-1.svg";

// ----- Banner / Hero Images -----
import alphaflyBanner from "../assets/images/ALPHAFLY 2.0 banner.svg";
import airMax95Banner from "../assets/images/Air Max 95 banner.svg";

// ----- Collab Section Images -----
import kithXAdidas from "../assets/images/KITH X ADIDAS model.svg";
import dirtbagXNike from "../assets/images/DIRTBAG X NIKE model.svg";
import adidasXGucci from "../assets/images/ADIDAS X GUCCI GAZELLE model.svg";

// =====================================================================
// HERO / CAROUSEL SLIDES
// These are the full-width banners shown in the homepage hero section.
// =====================================================================
export const heroSlides = [
  {
    id: 1,
    title: "ALPHAFLY 2.0",
    subtitle: "Men's Road Racing Shoes",
    image: alphaflyBanner,
    // The link navigates to the product detail page for this shoe
    link: "/product/1",
  },
  {
    id: 2,
    title: "AIR MAX 95",
    subtitle: "Women's Shoe",
    image: airMax95Banner,
    link: "/product/5",
  },
  {
    id: 3,
    title: "JORDAN HEIR\nSERIES 2 PF",
    subtitle: "Men's Basketball Shoes",
    image: jordanHeir,
    link: "/product/6",
  },
];

// =====================================================================
// COLLAB NEWS
// Featured collaboration stories shown below the hero carousel.
// =====================================================================
export const collabNews = [
  {
    id: 1,
    title: "KITH X ADIDAS",
    subtitle: "KITH X ADIDAS FOOTBALL FALL 2025",
    image: kithXAdidas,
    color: "#CAFFD9", // green accent bar from Figma
    link: "https://kith.com/products/aaih4557?srsltid=AfmBOoqS0qG-jndq9zjuQajpH_oAq3laapeSCWgL9o4v-9FLFMreWajq",
  },
  {
    id: 2,
    title: "DIRTBAG X NIKE",
    subtitle: "DIRTBAG X NIKE FALL SUMMER 2024",
    image: dirtbagXNike,
    color: "#FF9496", // pink accent bar from Figma
    link: "https://www.nike.com/id/t/air-max-plus-shoes-tjC2tH",
  },
  {
    id: 3,
    title: "ADIDAS X GUCCI\nGAZELLE",
    subtitle: "ADIDAS X GUCCI GAZELLE SUMMER 2022",
    image: adidasXGucci,
    color: "#FFDEA0", // gold accent bar from Figma
    link: "https://www.goat.com/collections/adidas-gucci",
  },
];

// =====================================================================
// PRODUCTS
// Main product catalog. Every shoe card, detail page, and listing
// pulls its data from this single array.
// =====================================================================
export const products = [
  {
    id: 1,
    name: "Nike Alphafly 2",
    brand: "Nike",
    category: "both",
    price: 3478000,
    originalPrice: 4089000,
    discount: "15% off",
    shortDesc: "Men's Road Racing Shoes",
    longDesc:
      "The Nike Alphafly 2 builds on previous innovations with a redesigned upper for a smooth transition to the toe. ZoomX foam and a full‑length carbon‑fibre plate deliver energy return and responsiveness over the full distance. A thick, lightweight midsole cushions each step with this new colourway for additional flair.",
    color: "Hyper Pink/Laser Orange/White",
    style: "DN3555-100",
    country: "China",
    image: nikeAlphafly2,
    itemImage: nikeAlphafly2Item,
    links: {
      nike: "https://www.nike.com/id/t/alphafly-2-road-racing-shoes-cVPHCD",
      amazon: null,
      shopee: "https://shopee.co.id/Nike-Air-Zoom-Alphafly-Next-2-Hyper-Pink-Laser-Orange-i.1091715757.27060725444",
      tokopedia: "https://www.tokopedia.com/promoit-1/nike-air-zoom-alphafly-next-2-hyper-pink-orange-100-authentic-12-06443",
    },
  },
  {
    id: 2,
    name: "Kith for Adidas Football Predator Sala",
    brand: "Adidas",
    category: "both",
    price: 2249000,
    originalPrice: null,
    discount: null,
    shortDesc: "Multi-ground Football Boot",
    longDesc:
      "A collaboration between Kith and Adidas, the Football Predator Sala combines classic indoor football performance with premium streetwear aesthetics. Features a textured upper for enhanced ball control and a non‑marking rubber outsole for superior grip on indoor surfaces.",
    color: "White/Crystal White",
    style: "IF3658",
    country: "Vietnam",
    image: kithPredator,
    itemImage: kithPredatorItem,
    links: {
      kith: "https://kith.com/products/aaih4557",
      amazon: null,
      shopee: null,
      tokopedia: null,
    },
  },
  {
    id: 3,
    name: "Nike Air Max Plus",
    brand: "Nike",
    category: "both",
    price: 1991200,
    originalPrice: 2489000,
    discount: "20% off",
    shortDesc: "Men's Shoes",
    longDesc:
      "Originally released in 1998, the Nike Air Max Plus delivers iconic Tuned Air cushioning with a bold, aggressive design inspired by ocean waves and palm trees. The gradient upper and plastic overlays provide a unique look that has remained a streetwear staple for over two decades.",
    color: "Black/Volt/Total Orange",
    style: "AJ2029-001",
    country: "Vietnam",
    image: nikeAirMaxPlus,
    itemImage: nikeAirMaxPlusItem,
    links: {
      nike: "https://www.nike.com/id/t/air-max-plus-shoes-04K813/DM0032-701",
      amazon: "https://www.amazon.com/Nike-Shoes-DX0755-001-Black-Chamois/dp/B0DVWQLC1H",
      shopee: "https://shopee.co.id/Air-Max-Plus-TN-sunset-orange-size-43-i.113842095.28292295406",
      tokopedia: "https://www.tokopedia.com/sepatu--jkt99/sepatu-lari-nike-air-max-plus-tn-sunset-orange-original-sunset-black-40-a9367",
    },
  },
  {
    id: 4,
    name: "Adidas Gazelle Lo Pro",
    brand: "Adidas",
    category: "popular",
    price: 1700000,
    originalPrice: null,
    discount: null,
    shortDesc: "Women's Shoe",
    longDesc:
      "The Adidas Gazelle Lo Pro is a reimagined classic featuring a low-profile silhouette with premium suede upper. Its clean lines and understated design make it a versatile choice for everyday wear, pairing effortlessly with any outfit.",
    color: "Core Black/White/Gum",
    style: "BB5476",
    country: "Indonesia",
    image: gazelleLoPro,
    itemImage: gazelleLoProItem,
    links: {
      adidas: "https://www.adidas.co.id/en/gazelle-lo-pro-shoes/IH1930.html",
      amazon: "https://www.amazon.com/adidas-Gazelle-Indoor-Supplier-Charcoal/dp/B0FLKZ4B5P",
      shopee: "https://shopee.co.id/ADIDAS-GAZELLE-LO-PRO-WOMEN-SAND-STRATA-CLOUD-ADIJR8889-i.39941861.54853977502",
      tokopedia: "https://www.tokopedia.com/willgoodsid/adidas-gazelle-lo-pro-sand-strata-gum-women-original-resmi-1731736556684347357",
    },
  },
  {
    id: 5,
    name: "Nike Air Max 95",
    brand: "Nike",
    category: "popular",
    price: 3049000,
    originalPrice: null,
    discount: null,
    shortDesc: "Women's Shoe",
    longDesc:
      "The Nike Air Max 95 features gradient panels inspired by the human anatomy, with visible Air units in the heel and forefoot for incredible cushioning. The design, originally created by Sergio Lozano, remains one of Nike's most iconic silhouettes.",
    color: "Black/Neon/Medium Ash",
    style: "AT2865-002",
    country: "China",
    image: nikeAirMax95,
    itemImage: nikeAirMax95,
    links: {
      nike: "https://www.nike.com/id/u/custom-nike-air-max-95-by-you-10001041/5568803190",
      amazon: "https://www.amazon.com/Nike-Air-Max-95-OG/dp/B0F68M1Z9Y",
      shopee: "https://shopee.co.id/NIKE-Air-Max-95-Anatomy-Sepatu-Sneakers-Wanita-DZ4710200-i.28956117.44172767407",
      tokopedia: "https://www.tokopedia.com/razansply/nike-air-max-95-og-neon-2020-100-authentic-original",
    },
  },
  {
    id: 6,
    name: "Jordan Heir Series 2 PF",
    brand: "Jordan",
    category: "new",
    price: 1729000,
    originalPrice: null,
    discount: null,
    shortDesc: "Men's Basketball Shoes",
    longDesc:
      "The Jordan Heir Series 2 PF is designed for the next generation of basketball players. It features a lightweight mesh upper for breathability, a responsive foam midsole for court-ready cushioning, and a durable rubber outsole with a multi-directional traction pattern.",
    color: "White/University Red/Black",
    style: "DV1188-106",
    country: "China",
    image: jordanHeir,
    itemImage: jordanHeirItem,
    links: {
      nike: "https://www.nike.com/id/t/jordan-heir-series-2-pf-basketball-shoes-OFMeFoy6/HV4419-101",
      amazon: "https://www.amazon.com/Jordan-Basketball-FQ3858-800-Crimson-Electro/dp/B0DLCXMGDJ",
      shopee: "https://shopee.co.id/Sepatu-Basket-Wanita-Nike-Jordan-Heir-Series-2-PF-HV4419-101-i.157869011.51706274396",
      tokopedia: "https://www.tokopedia.com/homecourtofficial/sepatu-basket-pria-jordan-heir-pf-infrared-fq3859-006-1732073565474227372",
    },
  },
];

/**
 * Helper: format a number as Indonesian Rupiah.
 * Example: 4418000 → "Rp 4.418.000"
 *
 * @param {number} amount - The price in Rp (integer)
 * @returns {string} Formatted currency string
 */
export const formatPrice = (amount) => {
  // Intl.NumberFormat handles locale-specific thousand separators automatically
  return `Rp ${new Intl.NumberFormat("id-ID").format(amount)}`;
};
