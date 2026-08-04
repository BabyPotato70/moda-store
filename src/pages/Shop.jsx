import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Allproduct1 from "../assets/Allproduct1.jpg";
import Allproduct2 from "../assets/Allproduct2.jpg";
import Allproduct3 from "../assets/Allproduct3.jpg";
import Allproduct4 from "../assets/Allproduct4.webp";
import Allproduct5 from "../assets/Allproduct5.webp";
import Allproduct6 from "../assets/Allproduct6.webp";
import Allproduct7 from "../assets/Allproduct7.jpg";
import Allproduct8 from "../assets/Allproduct8.jpg";
import Allproduct9 from "../assets/Allproduct9.webp";
import Allproduct10 from "../assets/Allproduct10.jpg";
import Allproduct11 from "../assets/Allproduct11.avif";
import Allproduct12 from "../assets/Allproduct12.jpg";

const allProducts = [
  {
    id: 100,
    name: "Ceramic Vase",
    price: 45,
    originalPrice: 120,
    image: `${Allproduct1}`,
    category: "Decor",
    isNew: true,
    isSale: true,
  },
  {
    id: 101,
    name: "Oak Table",
    price: 70,
    originalPrice: null,
    image: `${Allproduct2}`,
    category: "Furnitures",
    isNew: false,
    isSale: false,
  },
  {
    id: 102,
    name: "Linen Throw",
    price: 95,
    originalPrice: null,
    image: `${Allproduct3}`,
    category: "Textiles",
    isNew: false,
    isSale: false,
  },
  {
    id: 103,
    name: "Pendant Lamp",
    price: 120,
    originalPrice: null,
    image: `${Allproduct4}`,
    category: "Lightings",
    isNew: false,
    isSale: false,
  },
  {
    id: 104,
    name: "Wool Rug",
    price: 145,
    originalPrice: 200,
    image: `${Allproduct5}`,
    category: "Decors",
    isNew: true,
    isSale: true,
  },
  {
    id: 105,
    name: "Abstract Art",
    price: 170,
    originalPrice: null,
    image: `${Allproduct6}`,
    category: "Furniture",
    isNew: false,
    isSale: false,
  },
  {
    id: 106,
    name: "Leather Chairs",
    price: 195,
    originalPrice: null,
    image: `${Allproduct7}`,
    category: "Textiles",
    isNew: false,
    isSale: false,
  },
  {
    id: 107,
    name: "Brass Clocks",
    price: 220,
    originalPrice: 300,
    image: `${Allproduct8}`,
    category: "Lighting",
    isNew: false,
    isSale: true,
  },
  {
    id: 108,
    name: "Silk Cushion",
    price: 245,
    originalPrice: null,
    image: `${Allproduct9}`,
    category: "Decor",
    isNew: true,
    isSale: false,
  },
  {
    id: 109,
    name: "Glass Decanter",
    price: 270,
    originalPrice: null,
    image: `${Allproduct10}`,
    category: "Furniture",
    isNew: false,
    isSale: false,
  },
  {
    id: 110,
    name: "Marble Bookend",
    price: 295,
    originalPrice: 380,
    image: `${Allproduct11}`,
    category: "Textiles",
    isNew: false,
    isSale: true,
  },
  {
    id: 111,
    name: "Cedar Frames",
    price: 320,
    originalPrice: null,
    image: `${Allproduct12}`,
    category: "Lighting",
    isNew: true,
    isSale: false,
  },
];

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Furniture", "Lighting", "Textiles", "Decor"];

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-3xl font-bold dark:text-white">
          All Products
        </h1>
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden flex items-center gap-2 bg-surface-100 dark:bg-ink-700 px-4 py-2 rounded-lg"
        >
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>

      <div className="flex gap-8">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-ink-700 p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg dark:text-white">Filters</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <X size={24} className="dark:text-white" />
                </button>
              </div>
              <SidebarContent
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="font-bold mb-4 dark:text-white">Categories</h3>
            <SidebarContent
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-ink-400">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarContent({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="space-y-2 text-sm text-ink-400 dark:text-surface-300">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === cat ? "bg-primary-50 dark:bg-ink-600 text-primary-500 font-semibold" : "hover:bg-surface-100 dark:hover:bg-ink-600"}`}
        >
          {cat}
        </button>
      ))}

      <div className="border-t dark:border-ink-600 my-4"></div>

      <h3 className="font-bold mb-3 dark:text-white text-ink-700">
        Price Range
      </h3>
      <input
        type="range"
        min="0"
        max="500"
        className="w-full accent-primary-500"
      />
      <div className="flex justify-between text-xs mt-1">
        <span>$0</span>
        <span>$500</span>
      </div>
    </div>
  );
}
