# Sole Source — Static Sneaker Showcase

A static sneaker showcase website built with **React.js (Vite)** and **Tailwind CSS v4**. All product data lives in a single JavaScript file — no backend or database required.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [Folder Structure](#folder-structure)
3. [How to Add / Edit Products](#how-to-add--edit-products)
4. [Data Flow Architecture](#data-flow-architecture)
5. [Available Scripts](#available-scripts)

---

## Project Setup

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone or download the project
cd sole-source

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be running at **http://localhost:5173**.

### Production Build

```bash
npm run build    # Outputs to /dist
npm run preview  # Preview the production build locally
```

---

## Folder Structure

```
sole-source/
├── public/                         # Static public assets
├── src/
│   ├── assets/
│   │   └── images/                 # All SVG images (shoes, icons, banners)
│   ├── components/                 # Reusable UI components
│   │   ├── BuyButton.jsx           #   Styled external purchase link button
│   │   ├── CollabCard.jsx          #   Single collaboration news card
│   │   ├── CollabSection.jsx       #   "COLLAB NEWS!!" grid section
│   │   ├── Footer.jsx              #   Site footer with socials & copyright
│   │   ├── HeroCarousel.jsx        #   Full-width auto-advancing image slider
│   │   ├── Layout.jsx              #   Shared Navbar + Footer wrapper
│   │   ├── Navbar.jsx              #   Top navigation bar (desktop + mobile)
│   │   ├── ProductCard.jsx         #   Individual product thumbnail card
│   │   └── ProductSection.jsx      #   Horizontally scrollable product row
│   ├── data/
│   │   └── products.js             #   ** ALL product data lives here **
│   ├── pages/
│   │   ├── HomePage.jsx            #   Main landing page assembly
│   │   └── ProductDetailPage.jsx   #   Full product detail view
│   ├── App.jsx                     #   Router configuration
│   ├── index.css                   #   Tailwind CSS imports + custom styles
│   └── main.jsx                    #   React entry point
├── index.html                      #   HTML shell
├── package.json
├── vite.config.js                  #   Vite + Tailwind plugin config
└── README.md                       #   This file
```

---

## How to Add / Edit Products

All product data is stored in **`src/data/products.js`**. No database is involved — the file is a plain JavaScript module exporting arrays of objects.

### Adding a New Product

1. **Import the image** at the top of `products.js`:
   ```js
   import myNewShoe from "../assets/images/My New Shoe.svg";
   ```

2. **Add an object** to the `products` array:
   ```js
   {
     id: 7,                              // Unique numeric ID (increment last one)
     name: "My New Shoe",
     brand: "Nike",
     category: "new",                    // "new" | "popular" | "both"
     price: 2500000,                     // Price in Rp (integer)
     originalPrice: 3000000,             // null if no discount
     discount: "17% off",               // null if no discount
     shortDesc: "Men's Running Shoes",
     longDesc: "Detailed description paragraph...",
     color: "Red/White",
     style: "ABC123-001",
     country: "Vietnam",
     image: myNewShoe,                   // Large image (detail page)
     itemImage: myNewShoe,               // Thumbnail (cards) — can be same
     links: {
       nike: "https://nike.com/...",
       amazon: "https://amazon.com/...",
       laced: "https://laced.com/...",
       stockx: "https://stockx.com/...",
       tokopedia: "https://tokopedia.com/...",
     },
   },
   ```

3. **Save the file.** The dev server hot-reloads automatically.

### Adding a New Hero Slide

Add an object to the `heroSlides` array:
```js
{
  id: 3,
  title: "MY NEW BANNER",
  image: myBannerImage,    // Import the banner SVG at the top
  link: "/product/7",      // Link to the product detail page
},
```

### Adding a New Collab Card

Add an object to the `collabNews` array:
```js
{
  id: 4,
  title: "BRAND X BRAND",
  subtitle: "Description text",
  image: myCollabImage,
  link: "#",
},
```

### Category System

| Value       | Appears in          |
|-------------|---------------------|
| `"new"`     | New Items only      |
| `"popular"` | Popular Items only  |
| `"both"`    | Both sections       |

---

## Data Flow Architecture

```
src/data/products.js          ← Single source of truth
        │
        ├──→ HomePage.jsx
        │       ├─ heroSlides  ──→  HeroCarousel
        │       ├─ collabNews  ──→  CollabSection  ──→  CollabCard
        │       ├─ products (filtered "new"/"both")  ──→  ProductSection  ──→  ProductCard
        │       └─ products (filtered "popular"/"both")  ──→  ProductSection  ──→  ProductCard
        │
        └──→ ProductDetailPage.jsx
                ├─ product (found by URL :id)  ──→  renders detail view
                └─ product.links  ──→  BuyButton (×5 retailers)
```

### Key Concepts

| Concept | Explanation |
|---------|-------------|
| **Props drilling** | Parent components pass data down to children via props. E.g., `HomePage` passes a filtered products array to `ProductSection`, which maps over it to render `ProductCard` instances. |
| **Dynamic routing** | `ProductDetailPage` reads `:id` from the URL using React Router's `useParams()` hook, then looks up the matching product in the data array. |
| **Search filtering** | The Navbar writes search queries to the URL (`?search=...`). `HomePage` reads the query via `useSearchParams()` and filters products by name/brand. |
| **Category filtering** | Products have a `category` field. The homepage filters with `.filter()` to separate "New Items" from "Popular Items". |
| **Asset resolution** | SVG images are imported as ES modules. Vite resolves them to hashed URLs at build time for efficient caching. |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build in `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## Tech Stack

- **React 19** — Component-based UI library
- **Vite 7** — Fast build tool with HMR
- **Tailwind CSS v4** — Utility-first CSS framework
- **React Router v7** — Client-side routing

---

*Built for Sole Source © 2026*

{
  "servers": {
    "Framelink Figma MCP": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=YOUR_REAL_API_KEY", "--stdio"]
    }
  }
}
