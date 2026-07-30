import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Mappoint from "../assets/Mappoint.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-ink-400 dark:text-surface-300 max-w-xl mx-auto">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: Mail,
            title: "Email Us",
            detail: "gauravndeveloper90@gmail.com",
            sub: "We reply within 24 hours",
          },
          {
            icon: Phone,
            title: "Call Us",
            detail: "+91 70178 08671",
            sub: "Mon-Fri, 10am to 6pm EST",
          },
          {
            icon: MapPin,
            title: "Visit Us",
            detail: "123 Design Blvd, NYC",
            sub: "Open for walkthroughs",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-primary-50 dark:bg-ink-600 rounded-full flex items-center justify-center mb-4">
              <card.icon size={24} className="text-primary-500" />
            </div>
            <h3 className="font-bold dark:text-white mb-1">{card.title}</h3>
            <p className="text-primary-500 font-semibold text-sm mb-1">
              {card.detail}
            </p>
            <p className="text-xs text-ink-400 dark:text-surface-300">
              {card.sub}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <div className="bg-surface-100 dark:bg-ink-700 rounded-xl h-80 md:h-auto flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 dark:opacity-20"
            style={{
              backgroundImage: `url(${Mappoint})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="relative text-center">
            <MapPin size={48} className="mx-auto text-primary-500 mb-2" />
            <p className="font-semibold dark:text-white">New Delhi, India</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-ink-700 p-8 rounded-xl shadow-sm">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Send size={28} className="text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-ink-400 dark:text-surface-300">
                We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
