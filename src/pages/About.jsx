import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Leaf } from 'lucide-react';

const stats = [
  { value: '15K+', label: 'Happy Customers' },
  { value: '150+', label: 'Curated Products' },
  { value: '12', label: 'Global Brands' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const timeline = [
  { year: '2018', title: 'The Beginning', desc: 'Started as a small passion project in a garage.' },
  { year: '2019', title: 'First Milestone', desc: 'Reached 1,000 customers and launched our first exclusive line.' },
  { year: '2021', title: 'Going Global', desc: 'Expanded shipping to over 30 countries worldwide.' },
  { year: '2023', title: 'Sustainability Pledge', desc: 'Committed to 100% eco-friendly packaging.' },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-ink-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/about/1920/1080')" }}>
          <div className="absolute inset-0 bg-ink-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-7xl text-white font-bold mb-4">Our Story</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-surface-200 max-w-2xl mx-auto">Redefining modern living through thoughtful design and curated experiences.</motion.p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To make high-quality, beautifully designed products accessible to everyone, without compromising on ethics.' },
            { icon: Eye, title: 'Our Vision', desc: 'A world where every home reflects the unique personality and values of its inhabitants.' },
            { icon: Heart, title: 'Our Values', desc: 'Sustainability, craftsmanship, and community are at the core of every decision we make.' }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white dark:bg-ink-700 p-8 rounded-xl shadow-sm text-center border border-surface-100 dark:border-ink-600">
              <div className="w-16 h-16 bg-primary-50 dark:bg-ink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-primary-500" />
              </div>
              <h3 className="font-display text-xl font-bold dark:text-white mb-3">{item.title}</h3>
              <p className="text-ink-400 dark:text-surface-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-500 py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold dark:text-white mb-4">Meet The Team</h2>
          <p className="text-ink-400 dark:text-surface-300 max-w-xl mx-auto">The passionate people behind your favorite pieces.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Founder', 'Lead Designer', 'Head of Ops', 'Art Director'].map((role, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-xl overflow-hidden h-80">
              <img src={`https://picsum.photos/seed/team${i+1}/400/500`} alt={role} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 to-transparent flex items-end p-6">
                <div>
                  <h4 className="font-display text-xl text-white font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{role}</h4>
                  <p className="text-primary-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Joined in {2018 + i}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-100 dark:bg-ink-700/30 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-4xl font-bold dark:text-white mb-12 text-center">Our Journey</h2>
          <div className="relative border-l-2 border-primary-500 ml-6 space-y-12">
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="absolute -left-[9px] w-4 h-4 bg-primary-500 rounded-full border-4 border-surface-100 dark:border-ink-700"></div>
                <div className="ml-8">
                  <span className="font-display text-2xl font-bold text-primary-500">{item.year}</span>
                  <h3 className="font-bold text-xl dark:text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-ink-400 dark:text-surface-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}