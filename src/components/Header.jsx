import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Sun, Moon, Search, Menu } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useState } from 'react';

export default function Header() {
  const { darkMode, toggleDarkMode, cart, wishlist } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-50/80 dark:bg-ink-800/80 backdrop-blur-md border-b border-surface-200 dark:border-ink-700 transition-colors">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-3xl font-bold text-primary-500 tracking-tight">
          MODA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-ink-500 dark:text-surface-200">
          <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-primary-500 transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-primary-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center bg-surface-100 dark:bg-ink-700 rounded-full px-4 py-2 text-sm text-ink-400 hover:bg-surface-200 dark:hover:bg-ink-600 transition-colors">
            <Search size={16} className="mr-2" /> Search...
          </button>
          <button onClick={toggleDarkMode} className="p-2 hover:bg-surface-100 dark:hover:bg-ink-700 rounded-full transition-colors">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/wishlist" className="p-2 relative hover:bg-surface-100 dark:hover:bg-ink-700 rounded-full transition-colors">
            <Heart size={20} />
            {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="p-2 relative hover:bg-surface-100 dark:hover:bg-ink-700 rounded-full transition-colors">
            <ShoppingCart size={20} />
            {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cart.length}</span>}
          </Link>
          <Link to="/profile" className="hidden md:block p-2 hover:bg-surface-100 dark:hover:bg-ink-700 rounded-full transition-colors">
            <User size={20} />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-50 dark:bg-ink-800 border-t border-surface-200 dark:border-ink-700 px-4 py-4 space-y-4">
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="block py-2" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}