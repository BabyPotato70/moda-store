import React, { Suspense, lazy, useEffect, Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/SkeletonLoader";
import { useStore } from "./store/useStore";

// 1. Add Error Boundary to catch rendering crashes
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center mt-20">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Something went wrong.
          </h1>
          <pre className="bg-red-50 p-4 rounded text-left text-sm overflow-auto max-w-3xl mx-auto border border-red-200 text-red-800">
            {this.state.error?.message}
          </pre>
          <p className="mt-4 text-gray-500">
            Please check your browser console (F12) for more details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Profile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  const darkMode = useStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen bg-surface-50 dark:bg-ink-800 transition-colors duration-300">
      <ErrorBoundary>
        <Header />
        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<SkeletonLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
