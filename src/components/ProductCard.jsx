import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export default function ProductCard({ product }) {
  const { toggleWishlist, wishlist, addToCart } = useStore();
  const isWished = wishlist.some(item => item.id === product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-ink-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>}
        {product.isSale && <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>}
      </div>

      {/* Wishlist */}
      <button 
        onClick={() => toggleWishlist(product)} 
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-ink-800/80 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
      >
        <Heart size={18} className={isWished ? "fill-red-500 text-red-500" : "text-ink-400"} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative h-64 overflow-hidden bg-surface-100 dark:bg-ink-600">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Quick Add Overlay */}
        <div className="quick-overlay absolute bottom-0 left-0 right-0 bg-ink-600/70 backdrop-blur-sm p-4 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => { e.preventDefault(); addToCart(product); }} 
            className="flex items-center gap-2 text-white font-semibold text-sm bg-primary-500 hover:bg-primary-600 px-6 py-2 rounded-full transition-colors"
          >
            <ShoppingCart size={16} /> Quick Add
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-ink-300 dark:text-surface-300 mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`} className="font-semibold text-ink-700 dark:text-surface-50 hover:text-primary-500 transition-colors line-clamp-1">
          {product.name}
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-ink-800 dark:text-white">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-ink-300 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}