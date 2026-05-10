import { Link } from "react-router-dom";
import { Share2, MessageCircle, Globe } from "lucide-react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-ink-600 dark:bg-ink-900 text-surface-200 mt-4">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary-400 mb-4">
            MODA
          </h3>
          <p className="text-surface-300 text-sm leading-relaxed">
            Curating the finest lifestyle products for the modern individual.
            Quality, sustainability, and design.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-surface-300">
            <li>
              <Link
                to="/shop"
                className="hover:text-primary-400 transition-colors"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-primary-400 transition-colors"
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-primary-400 transition-colors"
              >
                Sale
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-surface-300">
            <li>
              <Link
                to="/about"
                className="hover:text-primary-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/gaurav-singh-negi-3b9616324/"
              className="hover:text-primary-400 transition-colors"
            >
              <Icon icon="skill-icons:linkedin" width={32} height={32} />
            </a>
            <a
              href="mailto:gauravndeveloper90@gmail.com"
              className="hover:text-primary-400 transition-colors"
            >
              <Icon icon="skill-icons:gmail-light" width={32} height={32} />
            </a>
            <a
              href="https://github.com/BabyPotato70/moda-store"
              className="hover:text-primary-400 transition-colors"
            >
              <Icon icon="skill-icons:github-light" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-500 py-6 text-center text-surface-400 text-sm">
        © 2026 MODA. All rights reserved.
      </div>
    </footer>
  );
}
