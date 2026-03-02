/**
 * CollabCard.jsx — A single collaboration news card.
 *
 * Matching Figma design exactly:
 * - Portrait aspect ratio (tall cards)
 * - Background image with gradient overlay at bottom only
 * - Title, subtitle, and Shop button at bottom-left
 *
 * Props:
 * @param {object} collab - A collab news object from collabNews in products.js.
 */

const CollabCard = ({ collab }) => {
  return (
    <a
      href={collab.link}
      className="relative block overflow-hidden rounded-lg group no-underline"
      style={{ aspectRatio: "3 / 4" }}
    >
      {/* Background image */}
      <img
        src={collab.image}
        alt={collab.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark gradient overlay — bottom only, like Figma */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content at bottom-left */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ padding: "0 0 6% 5%" }}
      >
        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight">
          {collab.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-white/80 mt-0.5 sm:mt-1">
          {collab.subtitle}
        </p>

        {/* Shop button — white pill matching hero style */}
        <button
          className="mt-2 sm:mt-3 inline-flex items-center justify-center bg-white text-black text-[10px] sm:text-xs font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-[0px_2px_6px_rgba(0,0,0,0.2)]"
          style={{ width: "80px", height: "32px" }}
        >
          Shop
        </button>
      </div>
    </a>
  );
};

export default CollabCard;
