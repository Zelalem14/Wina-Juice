import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  Sparkles,
  Utensils,
  ArrowRight,
  Clock
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="w-full flex-1 flex flex-col bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white"
    >
      {/* 1. HERO SECTION (Clear, Large Typography & Focused) */}
      <section className="relative flex-1 w-full overflow-hidden text-white py-4 sm:py-10 lg:py-16 px-3.5 sm:px-4 flex items-center justify-center">
        {/* Ambient Glows with Subtle Breathing Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.12, 0.18, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.12, 0.2, 0.12],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto relative z-10 w-full text-center flex flex-col items-center"
        >
          {/* Brand Logo & Name Badge */}
          <motion.div
            variants={badgeVariants}
            whileHover={{ scale: 1.025, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-3 p-1.5 sm:p-2 pr-4 sm:pr-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-3 sm:mb-5 shadow-lg transition-colors hover:bg-white/15 cursor-default"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:rotate-2">
              <img
                src="/wina-logo.png"
                alt="Wina Juice Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-base sm:text-xl font-extrabold text-white font-serif tracking-tight leading-tight">
              Wina Juice <span className="text-emerald-300 font-sans text-sm sm:text-base font-bold ml-1.5">ዊና ጁስ</span>
            </div>
          </motion.div>

          {/* Tagline Badge (Larger, clearer font) */}
          <motion.div
            variants={badgeVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm shadow-sm transition-colors hover:bg-emerald-800 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="shrink-0 flex items-center justify-center"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
            </motion.div>
            <span>100% Pure Natural Juices • ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች</span>
          </motion.div>

          {/* Headline (Larger font size for clear readability) */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-[1.15] text-white mb-2 sm:mb-3"
          >
            Fresh Flavors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">
              Made for You.
            </span>
            <span className="block text-lg sm:text-2xl lg:text-3xl font-sans font-extrabold text-red-400 mt-1.5 sm:mt-2">
              ትኩስ እና የተመረጡ ጣዕሞች ለእርስዎ
            </span>
          </motion.h1>

          {/* Short Focused Introduction (Larger, more readable text) */}
          <motion.p
            variants={fadeUpVariants}
            className="text-emerald-100/90 text-xs sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-xl mx-auto px-2 font-medium"
          >
            Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
          </motion.p>

          {/* Key Trust Highlights (Larger font stats) */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full max-w-md mx-auto mb-4 sm:mb-6 text-xs"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-200 shadow-sm cursor-default"
            >
              <div className="font-black text-base sm:text-xl lg:text-2xl text-yellow-300">106+</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs font-semibold mt-0.5">Menu Items (ሜኑ)</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-200 shadow-sm cursor-default"
            >
              <div className="font-black text-base sm:text-xl lg:text-2xl text-emerald-300">100%</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs font-semibold mt-0.5">Natural Fresh</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-200 shadow-sm cursor-default"
            >
              <div className="font-black text-base sm:text-xl lg:text-2xl text-amber-300">Daily</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs font-semibold mt-0.5">7 AM – 10 PM</div>
            </motion.div>
          </motion.div>

          {/* Primary CTA Action Button (Larger, high-visibility font) */}
          <motion.div
            variants={fadeUpVariants}
            className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center"
          >
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Link
                to="/menu"
                className="inline-flex items-center justify-between gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-stone-950 font-bold bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 w-full group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/10 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform duration-200">
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950" />
                </div>
                <div className="flex flex-col items-center justify-center flex-1 leading-tight">
                  <span className="text-base sm:text-lg font-black tracking-tight">Explore Our Menu</span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-950 font-sans mt-0.5">ሜኑ ይመልከቱ</span>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/10 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-emerald-200/90 mt-2.5 sm:mt-3 font-semibold transition-colors hover:text-emerald-100 cursor-default"
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};
