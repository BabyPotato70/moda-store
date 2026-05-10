import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Minus,
  Plus,
  Heart,
  ShoppingCart,
  Star,
  Truck,
  RefreshCw,
  Shield,
} from "lucide-react";
import { useStore } from "../store/useStore";
import ProductCard from "../components/ProductCard";
import ArtisanCeramicVase1 from "../assets/ArtisanCeramicVase1.jpg";
import ArtisanCeramicVase2 from "../assets/ArtisanCeramicVase2.jpg";
import ArtisanCeramicVase3 from "../assets/ArtisanCeramicVase3.jpg";
import ArtisanCeramicVase4 from "../assets/ArtisanCeramicVase4.avif";
import ArtisanCeramicVase5 from "../assets/ArtisanCeramicVase5.jpg";
import ArtisanCeramicVase6 from "../assets/ArtisanCeramicVase6.jpg";
import ArtisanCeramicVase7 from "../assets/ArtisanCeramicVase7.avif";

const mockProduct = {
  id: 1,
  name: "Artisan Ceramic Vase",
  brand: "MODA Home",
  price: 45.0,
  rating: 4.8,
  reviews: 124,
  description:
    "Hand-crafted by local artisans, this ceramic vase brings an organic, modern touch to any living space. Its neutral tones blend seamlessly with any decor style.",
  images: [
    `${ArtisanCeramicVase1}`,
    `${ArtisanCeramicVase2}`,
    `${ArtisanCeramicVase3}`,
  ],
  colors: ["Slate Gray", "Terracotta", "Ivory"],
  sizes: ["Small", "Medium", "Large"],
};

const relatedProducts = [
  {
    id: 51,
    name: "Related Item 1",
    price: 60,
    image: `${ArtisanCeramicVase4}`,
    category: "Decor",
  },
  {
    id: 52,
    name: "Related Item 2",
    price: 80,
    image: `${ArtisanCeramicVase5}`,
    category: "Decor",
  },
  {
    id: 53,
    name: "Related Item 3",
    price: 100,
    image: `${ArtisanCeramicVase6}`,
    category: "Decor",
  },
  {
    id: 54,
    name: "Related Item 4",
    price: 120,
    image: `${ArtisanCeramicVase7}`,
    category: "Decor",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [activeTab, setActiveTab] = useState("desc");

  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWished = wishlist.some((item) => item.id === mockProduct.id);

  const handleAddToCart = () => {
    addToCart(
      {
        ...mockProduct,
        image: mockProduct.images[selectedImage],
        selectedSize,
        selectedColor,
      },
      quantity,
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {mockProduct.images.map((img, i) => (
              <button
                key={i}
                onMouseEnter={() => setSelectedImage(i)}
                className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === i ? "border-primary-500" : "border-transparent"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-grow bg-surface-100 dark:bg-ink-700 rounded-2xl overflow-hidden aspect-square relative group">
            <img
              src={mockProduct.images[selectedImage]}
              alt={mockProduct.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            {mockProduct.brand}
          </span>
          <h1 className="font-display text-4xl font-bold dark:text-white mt-2 mb-4">
            {mockProduct.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-accent-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-ink-400 dark:text-surface-300">
              ({mockProduct.reviews} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-ink-800 dark:text-white mb-8">
            ${mockProduct.price.toFixed(2)}
          </p>
          <p className="text-ink-400 dark:text-surface-300 mb-8 leading-relaxed">
            {mockProduct.description}
          </p>

          {/* Variants */}
          <div className="mb-6">
            <h4 className="font-semibold text-sm text-ink-600 dark:text-surface-100 mb-3">
              Color: {selectedColor}
            </h4>
            <div className="flex gap-2">
              {mockProduct.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${selectedColor === c ? "bg-ink-600 text-white dark:bg-primary-500 border-ink-600 dark:border-primary-500" : "border-surface-200 dark:border-ink-500 hover:border-ink-400"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold text-sm text-ink-600 dark:text-surface-100 mb-3">
              Size: {selectedSize}
            </h4>
            <div className="flex gap-2">
              {mockProduct.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`h-12 w-12 rounded-lg text-sm font-semibold border transition-colors ${selectedSize === s ? "bg-ink-600 text-white dark:bg-primary-500 border-ink-600 dark:border-primary-500" : "border-surface-200 dark:border-ink-500 hover:border-ink-400"}`}
                >
                  {s[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-surface-200 dark:border-ink-500 rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-surface-100 dark:hover:bg-ink-600 rounded-l-full transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-semibold dark:text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-surface-100 dark:hover:bg-ink-600 rounded-r-full transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-grow bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(mockProduct)}
              className="p-4 border border-surface-200 dark:border-ink-500 rounded-full hover:bg-red-50 dark:hover:bg-ink-600 transition-colors"
            >
              <Heart
                size={20}
                className={isWished ? "fill-red-500 text-red-500" : ""}
              />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 border-t dark:border-ink-600 pt-8">
            <div className="flex flex-col items-center text-center text-xs text-ink-400">
              <Truck size={20} className="mb-2 text-primary-500" /> Free
              Shipping
            </div>
            <div className="flex flex-col items-center text-center text-xs text-ink-400">
              <RefreshCw size={20} className="mb-2 text-primary-500" /> 30-Day
              Returns
            </div>
            <div className="flex flex-col items-center text-center text-xs text-ink-400">
              <Shield size={20} className="mb-2 text-primary-500" /> 2-Year
              Warranty
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-20">
        <div className="flex border-b dark:border-ink-600 mb-8">
          {["desc", "specs", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold capitalize border-b-2 transition-colors ${activeTab === tab ? "border-primary-500 text-primary-500" : "border-transparent text-ink-400 hover:text-ink-600 dark:hover:text-white"}`}
            >
              {tab === "desc"
                ? "Description"
                : tab === "specs"
                  ? "Specifications"
                  : `Reviews (${mockProduct.reviews})`}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-ink-500 dark:text-surface-300 leading-relaxed">
            {activeTab === "desc" && (
              <p>
                The artisan ceramic vase is made from high-quality, sustainably
                sourced clay. Each piece is hand-thrown and finished with a
                unique glaze, ensuring no two vases are exactly alike. Perfect
                for dried arrangements or as a standalone sculptural piece.
              </p>
            )}
            {activeTab === "specs" && (
              <ul className="list-disc pl-5 space-y-2">
                <li>Material: Stoneware Ceramic</li>
                <li>Dimensions: 8" x 8" x 12"</li>
                <li>Weight: 3.5 lbs</li>
                <li>Care: Wipe with damp cloth</li>
              </ul>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex gap-4">
                  <img
                    src="https://picsum.photos/seed/user1/40/40"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold dark:text-white">
                        Jane D.
                      </span>
                      <span className="text-accent-500 text-xs">★★★★★</span>
                    </div>
                    <p className="text-sm mt-1">
                      Absolutely beautiful! The glaze is stunning in person.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img
                    src="https://picsum.photos/seed/user2/40/40"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold dark:text-white">
                        Mark T.
                      </span>
                      <span className="text-accent-500 text-xs">★★★★☆</span>
                    </div>
                    <p className="text-sm mt-1">
                      Great quality, but it was slightly smaller than I
                      expected.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="bg-surface-100 dark:bg-ink-700 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-ink-800 dark:text-white">
                {mockProduct.rating}
              </div>
              <div className="flex justify-center text-accent-500 my-2">
                ★★★★★
              </div>
              <p className="text-sm text-ink-400">
                {mockProduct.reviews} reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-display text-2xl font-bold dark:text-white mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
