import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, RefreshCw, Shield, Headphones } from "lucide-react";
import ProductCard from "../components/ProductCard";

// Mock Data
const featuredCategories = [
  { name: "Furniture", img: "https://picsum.photos/seed/furn/400/400" },
  { name: "Lighting", img: "https://picsum.photos/seed/light/400/400" },
  { name: "Textiles", img: "https://picsum.photos/seed/text/400/400" },
  { name: "Decor", img: "https://picsum.photos/seed/decor/400/400" },
];

const newArrivals = [
  {
    id: 1,
    name: "Ceramic Vase",
    price: 45,
    image: "https://picsum.photos/seed/vase/500/500",
    category: "Decor",
    isNew: true,
  },
  {
    id: 2,
    name: "Oak Side Table",
    price: 120,
    image: "https://picsum.photos/seed/table/500/500",
    category: "Furniture",
    isNew: true,
  },
  {
    id: 3,
    name: "Linen Throw",
    price: 65,
    image: "https://picsum.photos/seed/linen/500/500",
    category: "Textiles",
    isNew: true,
  },
  {
    id: 4,
    name: "Pendant Lamp",
    price: 89,
    image: "https://picsum.photos/seed/lamp/500/500",
    category: "Lighting",
    isNew: true,
  },
];

const bestSellers = [
  {
    id: 5,
    name: "Wool Area Rug",
    price: 250,
    originalPrice: 300,
    image: "https://picsum.photos/seed/rug/500/500",
    category: "Textiles",
    isSale: true,
  },
  {
    id: 6,
    name: "Modular Sofa",
    price: 850,
    image: "https://picsum.photos/seed/sofa/500/500",
    category: "Furniture",
  },
  {
    id: 7,
    name: "Abstract Canvas",
    price: 150,
    image: "https://picsum.photos/seed/art/500/500",
    category: "Decor",
  },
  {
    id: 8,
    name: "Floor Lamp",
    price: 110,
    originalPrice: 140,
    image: "https://picsum.photos/seed/flamp/500/500",
    category: "Lighting",
    isSale: true,
  },
];

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: RefreshCw, title: "Easy Returns", desc: "30 day return policy" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-ink-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/modahero/1920/1080')",
          }}
        >
          <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 font-semibold tracking-widest uppercase mb-4"
          >
            New Collection 2024
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-white font-bold leading-tight mb-6"
          >
            Elevate Your <br />
            Living Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-surface-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Discover curated pieces that blend timeless design with modern
            functionality. Crafted for the minimalist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/shop"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-md transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-primary-500 text-white py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="font-bold text-sm tracking-widest uppercase">
                Free Shipping Worldwide
              </span>
              <span className="mx-8 text-primary-200">✦</span>
              <span className="font-bold text-sm tracking-widest uppercase">
                New Season Arrivals
              </span>
              <span className="mx-8 text-primary-200">✦</span>
              <span className="font-bold text-sm tracking-widest uppercase">
                30% Off Selected Items
              </span>
              <span className="mx-8 text-primary-200">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-ink-700 dark:text-surface-50 mb-4">
            Shop by Category
          </h2>
          <p className="text-ink-400 dark:text-surface-300 max-w-xl mx-auto">
            Find exactly what you need. Explore our carefully curated categories
            designed to inspire.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/shop"
                className="cat-card relative block h-64 rounded-2xl overflow-hidden group"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent flex items-end p-6">
                  <h3 className="font-display text-2xl text-white font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-surface-100 dark:bg-ink-700/30 py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold text-ink-700 dark:text-surface-50 mb-4">
                New Arrivals
              </h2>
              <p className="text-ink-400 dark:text-surface-300">
                Just landed this week.
              </p>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center text-primary-500 font-semibold hover:gap-3 gap-2 transition-all"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative h-[500px] flex items-center bg-accent-500 my-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/promo/1920/600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-accent-500/85"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Summer Sale
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Up to 40% off on selected home essentials.
          </p>
          <Link
            to="/shop"
            className="bg-ink-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-ink-800 transition-colors"
          >
            Shop The Sale
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-ink-700 dark:text-surface-50 mb-4">
            Best Sellers
          </h2>
          <p className="text-ink-400 dark:text-surface-300 max-w-xl mx-auto">
            Our most loved products by customers worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="bg-ink-600 dark:bg-ink-900 py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-surface-200">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-ink-500 dark:bg-ink-800 p-4 rounded-full mb-4">
                <feat.icon size={24} className="text-primary-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">{feat.title}</h4>
              <p className="text-sm text-surface-300">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary-50 dark:bg-ink-700 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 dark:bg-ink-600 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-700 dark:text-surface-50 mb-4">
              Join The Club
            </h2>
            <p className="text-ink-400 dark:text-surface-300 mb-8 max-w-md mx-auto">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-full border border-surface-200 dark:border-ink-500 focus:outline-none focus:border-primary-500 bg-white dark:bg-ink-800 text-ink-600 dark:text-surface-50"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>``
      </section>
    </div>
  );
}
