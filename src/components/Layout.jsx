/**
 * Layout.jsx — Shared layout wrapper used by every page.
 *
 * Structure:
 *   <Navbar />
 *   <main>{ page content }</main>
 *   <Footer />
 *
 * This component uses React Router's <Outlet /> to render
 * the current route's element inside the main content area.
 *
 * Props: None — children are injected via <Outlet />.
 */

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    // min-h-screen ensures the footer stays at the bottom even on short pages
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Sticky top navigation */}
      <Navbar />

      {/* Main content area — flex-1 expands to fill space. Pages handle their own padding. */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Site-wide footer */}
      <Footer />
    </div>
  );
};

export default Layout;
