/**
 * Footer.jsx — Site-wide footer.
 *
 * Figma design:
 * - Light gray bg with top border for segment separation
 * - Left: Social icons in bordered squares, horizontal row
 * - Right: "SOLE SOURCE" brand + copyright
 */

import instagramIcon from "../assets/images/instagram icon.svg";
import whatsappIcon from "../assets/images/whatsapp icon.svg";
import xIcon from "../assets/images/x icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] dark:bg-[#111] border-t border-gray-200 dark:border-[#333] transition-colors duration-300" style={{ padding: "40px 0" }}>
      <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-10 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Social media icons — horizontal row, bordered squares */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-500 hover:bg-white transition-all"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-500 hover:bg-white transition-all"
            aria-label="WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-500 hover:bg-white transition-all"
            aria-label="X"
          >
            <img src={xIcon} alt="X" className="w-5 h-5" />
          </a>
        </div>

        {/* Brand + copyright — right side */}
        <div className="text-right">
          <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide text-[#707072]">
            SOLE SOURCE
          </p>
          <p className="text-[10px] sm:text-xs text-[#999] mt-1">
            © 2025 SOLE SOURCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
