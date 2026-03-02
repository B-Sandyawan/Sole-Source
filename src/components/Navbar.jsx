/**
 * Navbar.jsx — Top navigation bar for the Sole Source website.
 *
 * Figma design (1920x1080 viewport):
 * - Single horizontal row, proportional height
 * - Left: Hamburger (bordered box) + "SOLE SOURCE" logo
 * - Center: Nav links "News", "New Items", "Popular Items"
 * - Right: Search bar (bg #ECECEC, rounded-2xl)
 * - Sidebar overlay with About/Contacts/Profile links
 */

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import menuIcon from "../assets/images/menu icon.svg";
import searchIcon from "../assets/images/search icon.svg";
import sidebarCancel from "../assets/images/sidebar cancel.svg";
import sidebarArrow from "../assets/images/sidebar arrow.svg";
import instagramIcon from "../assets/images/instagram icon.svg";
import whatsappIcon from "../assets/images/whatsapp icon.svg";
import xIcon from "../assets/images/x icon.svg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentHash = location.hash;
  const { isDark, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { label: "News", href: "/#news" },
    { label: "New Items", href: "/#new-items" },
    { label: "Popular Items", href: "/#popular-items" },
  ];

  const sidebarPageLinks = [
    { label: "About", to: "/about" },
    { label: "Contacts", to: "/contacts" },
    { label: "Profile", to: "/profile" },
  ];

  return (
    <>
      {/* ========================= MAIN NAV BAR ========================= */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#111]/95 backdrop-blur-md border-b border-[#E8E8E8] dark:border-[#333] transition-shadow duration-300"
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div className="w-full max-w-[1920px] mx-auto h-14 sm:h-16 md:h-[72px] lg:h-20 flex items-center px-10 sm:px-10 md:px-12 lg:px-16 xl:px-20">

          {/* -- Left: Hamburger + Logo -- */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0">
            {/* Animated hamburger icon */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200 shrink-0 group"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[5px] w-[18px] sm:w-[20px]">
                <span className="block h-[2px] bg-[#333] dark:bg-gray-300 rounded-full transition-all duration-300 group-hover:w-full w-full" />
                <span className="block h-[2px] bg-[#333] dark:bg-gray-300 rounded-full transition-all duration-300 group-hover:w-3/4 w-[70%]" />
                <span className="block h-[2px] bg-[#333] dark:bg-gray-300 rounded-full transition-all duration-300 group-hover:w-full w-[85%]" />
              </div>
            </button>

            {/* Brand name */}
            <Link
              to="/"
              className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold tracking-[0.04em] text-[#1A1A1A] dark:text-white no-underline leading-none whitespace-nowrap hover:text-black dark:hover:text-gray-200 transition-colors"
            >
              SOLE SOURCE
            </Link>
          </div>

          {/* -- Center: Desktop navigation links with animated underline -- */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 xl:gap-10 flex-1 mx-4 lg:mx-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm lg:text-[15px] xl:text-base font-medium text-[#444] dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors no-underline whitespace-nowrap py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* -- Right: Search bar with focus animation -- */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center shrink-0 ml-auto md:ml-0"
          >
            <div className="relative group">
              {/* Inline search icon */}
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                className="absolute top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity pointer-events-none"
                style={{ left: "14px" }}
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Products..."
                className="pr-4 py-2.5 sm:py-3 text-[13px] sm:text-sm border border-gray-200 dark:border-gray-600 rounded-full bg-[#F5F5F5] dark:bg-[#1a1a1a] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:bg-white dark:focus:bg-[#222] focus:border-gray-300 dark:focus:border-gray-500 focus:shadow-sm w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64"
                style={{ paddingLeft: "40px" }}
              />
            </div>
          </form>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ml-2 shrink-0"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ======================== MOBILE SIDEBAR ======================== */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white dark:bg-[#111] z-50 transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? "translate-x-0 shadow-[8px_0_30px_rgba(0,0,0,0.12)]" : "-translate-x-full"}`}
      >
        {/* Header — brand + close */}
        <div className="flex items-center justify-between pt-8 pb-6" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          <Link to="/" onClick={() => setIsSidebarOpen(false)}
            className="text-[22px] font-semibold tracking-[0.08em] text-[#1A1A1A] dark:text-white no-underline">
            SOLE SOURCE
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          {/* Browse section */}
          <p className="text-[12px] font-bold text-[#A0A0A0] uppercase tracking-[0.18em] mb-4 mt-2">Browse</p>
          <div className="flex flex-col">
            <button onClick={() => { setIsSidebarOpen(false); navigate('/#news'); }}
              style={currentHash === '#news' ? { borderLeft: '3px solid #555', paddingLeft: '16px' } : { borderLeft: '3px solid transparent', paddingLeft: '16px' }}
              className={`flex items-center gap-4 py-4 text-[16px] font-medium transition-all no-underline w-full text-left ${currentHash === '#news' ? 'text-black' : 'text-[#555] hover:text-black'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8M18 18h-8M18 6h-8v4h8V6z" />
              </svg>
              News
            </button>
            <button onClick={() => { setIsSidebarOpen(false); navigate('/#new-items'); }}
              style={currentHash === '#new-items' ? { borderLeft: '3px solid #555', paddingLeft: '16px' } : { borderLeft: '3px solid transparent', paddingLeft: '16px' }}
              className={`flex items-center gap-4 py-4 text-[16px] font-medium transition-all no-underline w-full text-left ${currentHash === '#new-items' ? 'text-black' : 'text-[#555] hover:text-black'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
              New Items
            </button>
            <button onClick={() => { setIsSidebarOpen(false); navigate('/#popular-items'); }}
              style={currentHash === '#popular-items' ? { borderLeft: '3px solid #555', paddingLeft: '16px' } : { borderLeft: '3px solid transparent', paddingLeft: '16px' }}
              className={`flex items-center gap-4 py-4 text-[16px] font-medium transition-all no-underline w-full text-left ${currentHash === '#popular-items' ? 'text-black' : 'text-[#555] hover:text-black'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Popular Items
            </button>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-100 my-5" />

          {/* Account section */}
          <p className="text-[12px] font-bold text-[#A0A0A0] uppercase tracking-[0.18em] mb-4">Account</p>
          <div className="flex flex-col">
            <Link to="/about" onClick={() => setIsSidebarOpen(false)}
              style={currentPath === '/about' ? { borderLeft: '3px solid #555', paddingLeft: '16px' } : { borderLeft: '3px solid transparent', paddingLeft: '16px' }}
              className={`flex items-center gap-4 py-4 text-[16px] font-medium transition-all no-underline ${currentPath === '/about' ? 'text-black' : 'text-[#555] hover:text-black'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              About
            </Link>
            <Link to="/contacts" onClick={() => setIsSidebarOpen(false)}
              style={currentPath === '/contacts' ? { borderLeft: '3px solid #555', paddingLeft: '16px' } : { borderLeft: '3px solid transparent', paddingLeft: '16px' }}
              className={`flex items-center gap-4 py-4 text-[16px] font-medium transition-all no-underline ${currentPath === '/contacts' ? 'text-black' : 'text-[#555] hover:text-black'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Contacts
            </Link>
            <Link to="/profile" onClick={() => setIsSidebarOpen(false)}
              style={currentPath === '/profile' ? { borderLeft: '3px solid #555', paddingLeft: '16px' } : { borderLeft: '3px solid transparent', paddingLeft: '16px' }}
              className={`flex items-center gap-4 py-4 text-[16px] font-medium transition-all no-underline ${currentPath === '/profile' ? 'text-black' : 'text-[#555] hover:text-black'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              Profile
            </Link>
          </div>
        </div>

        {/* Footer — social + copyright */}
        <div className="pb-7 pt-4" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          <div className="border-t border-gray-100 pt-5">
            <div className="flex items-center gap-5 mb-3">
              <a href="https://www.instagram.com/solesource67?igsh=YnJ4b2FqeGxleHB3" target="_blank" rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <img src={instagramIcon} alt="" className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6283148494413" target="_blank" rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity" aria-label="WhatsApp">
                <img src={whatsappIcon} alt="" className="w-5 h-5" />
              </a>
              <a href="https://x.com/SoleSource6277" target="_blank" rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity" aria-label="X">
                <img src={xIcon} alt="" className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] text-[#AEAEAE]">© 2025 Sole Source. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
