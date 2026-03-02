/**
 * App.jsx — Root application component.
 *
 * Sets up React Router with routes for:
 * 1. "/"            → HomePage (landing page with carousel, collabs, products)
 * 2. "/product/:id" → ProductDetailPage (individual product view)
 * 3. "/about"       → AboutPage (company info)
 * 4. "/contacts"    → ContactsPage (email contacts)
 * 5. "/profile"     → ProfilePage (team members)
 *
 * All routes share a common Layout wrapper (Navbar + Footer).
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import ProfilePage from "./pages/ProfilePage";
import AllProductsPage from "./pages/AllProductsPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
