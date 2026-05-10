import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const allProducts = Array.from({ length: 12 }, (_, i) => ({
  id: 100 + i, 
  name: [`Ceramic Vase`, `Oak Table`, `Linen Throw`, `Pendant Lamp`, `Wool Rug`, `Abstract Art`, `Leather Chair`, `Brass Clock`, `Silk Cushion`, `Glass Decanter`, `Marble Bookend`, `Cedar Frame`][i], 
  price: 45 + i * 25, 
  originalPrice: i % 3 === 0 ? 120 + i * 20 : null,
  image: `https://picsum.photos/seed/shop${i}/500/500`, 
  category: ['Decor', 'Furniture', 'Textiles', 'Lighting'][i % 4],
  isNew: i % 4 === 0,
  isSale: i % 3 === 0
}));

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Furniture', 'Lighting', 'Textiles', 'Decor'];
  
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-3xl font-bold dark:text-white">All Products</h1>
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
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)}>
            <div className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-ink-700 p-6 shadow-xl" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg dark:text-white">Filters</h2>
                <button onClick={() => setSidebarOpen(false)}><X size={24} className="dark:text-white" /></button>
              </div>
              <SidebarContent categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="font-bold mb-4 dark:text-white">Categories</h3>
            <SidebarContent categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold dark:text-white mb-2">No products found</h3>
              <p className="text-ink-400">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
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
      {categories.map(cat => (
        <button 
          key={cat} 
          onClick={() => setActiveCategory(cat)}
          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === cat ? 'bg-primary-50 dark:bg-ink-600 text-primary-500 font-semibold' : 'hover:bg-surface-100 dark:hover:bg-ink-600'}`}
        >
          {cat}
        </button>
      ))}
      
      <div className="border-t dark:border-ink-600 my-4"></div>
      
      <h3 className="font-bold mb-3 dark:text-white text-ink-700">Price Range</h3>
      <input type="range" min="0" max="500" className="w-full accent-primary-500" />
      <div className="flex justify-between text-xs mt-1">
        <span>$0</span>
        <span>$500</span>
      </div>
    </div>
  );
}