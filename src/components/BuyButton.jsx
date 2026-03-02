/**
 * BuyButton.jsx — A pill-shaped purchase link button.
 *
 * Figma design:
 * - Pill shape: border-radius 40px
 * - Two styles:
 *   - "filled"  = black bg, white text (for brand/Shopee)
 *   - "outlined" = white bg, black border, black text (for Amazon/Tokopedia)
 *
 * Props:
 * @param {string} label   - Button text (e.g. "Nike", "Amazon").
 * @param {string} url     - External purchase URL. If null, button is disabled.
 * @param {string} style   - "filled" | "outlined" — controls the visual style.
 */

const BuyButton = ({ label, url, style = "filled" }) => {
  // Figma-matching pill button styles
  const baseClasses =
    "inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-[40px] font-semibold text-sm sm:text-base md:text-[22px] transition-colors no-underline tracking-tight";

  const filledClasses = "bg-black text-white hover:bg-gray-800";
  const outlinedClasses =
    "bg-white text-black border-2 border-black hover:bg-gray-50";

  const styleClasses = style === "outlined" ? outlinedClasses : filledClasses;

  // If no URL is provided, render a disabled button
  if (!url) {
    return (
      <button
        disabled
        className={`${baseClasses} ${styleClasses} opacity-40 cursor-not-allowed`}
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${styleClasses}`}
    >
      {label}
    </a>
  );
};

export default BuyButton;
