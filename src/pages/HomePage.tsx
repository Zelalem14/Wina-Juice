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
      className="w-full flex-1 flex flex-col justify-center bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white"
    >
      {/* 1. HERO SECTION (Clear, Large Typography & Focused across Phone, Tablet & Desktop) */}
      <section className="relative flex-1 w-full overflow-hidden text-white py-4 sm:py-6 md:py-8 lg:py-10 px-3.5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center min-h-[calc(100vh-105px)]">
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
          className="absolute top-0 right-0 -mr-24 -mt-24 sm:-mr-16 sm:-mt-16 lg:-mr-10 lg:-mt-10 w-72 sm:w-96 md:w-[32rem] lg:w-[42rem] h-72 sm:h-96 md:h-[32rem] lg:h-[42rem] rounded-full bg-emerald-500/15 blur-3xl lg:blur-[120px] pointer-events-none"
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
          className="absolute bottom-0 left-0 -ml-24 -mb-24 sm:-ml-16 sm:-mb-16 lg:-ml-10 lg:-mb-10 w-72 sm:w-96 md:w-[32rem] lg:w-[42rem] h-72 sm:h-96 md:h-[32rem] lg:h-[42rem] rounded-full bg-red-600/15 blur-3xl lg:blur-[120px] pointer-events-none"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto relative z-10 w-full text-center flex flex-col items-center"
        >
          {/* Brand Logo & Name Badge */}
          <motion.div
            variants={badgeVariants}
            whileHover={{ scale: 1.025, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-3 md:gap-3.5 p-1.5 sm:p-2 md:p-2.5 pr-4 sm:pr-5 md:pr-6 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 mb-2.5 sm:mb-3.5 md:mb-4 shadow-lg transition-colors hover:bg-white/15 cursor-default"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-xl sm:rounded-2xl bg-white p-1 md:p-1.5 shadow-md shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:rotate-2">
              <img
                src="/wina-logo.png"
                alt="Wina Juice Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-base sm:text-xl md:text-2xl font-extrabold text-white font-serif tracking-tight leading-tight">
              Wina Juice <span className="text-emerald-300 font-sans text-sm sm:text-base md:text-lg font-bold ml-1.5">ዊና ጁስ</span>
            </div>
          </motion.div>

          {/* Tagline Badge (Responsive font) */}
          <motion.div
            variants={badgeVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm md:text-base font-semibold mb-2.5 sm:mb-3.5 md:mb-4 backdrop-blur-sm shadow-sm transition-colors hover:bg-emerald-800 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="shrink-0 flex items-center justify-center"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-yellow-300" />
            </motion.div>
            <span>100% Pure Natural Juices • ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች</span>
          </motion.div>

          {/* Headline (Responsive font size for clear readability on mobile, tablet & desktop) */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight font-serif leading-[1.15] text-white mb-2 sm:mb-2.5 md:mb-3"
          >
            Fresh Flavors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">
              Made for You.
            </span>
            <span className="block text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-sans font-extrabold text-red-400 mt-1.5 sm:mt-2 md:mt-2.5">
              ትኩስ እና የተመረጡ ጣዕሞች ለእርስዎ
            </span>
          </motion.h1>

          {/* Short Focused Introduction (Responsive text) */}
          <motion.p
            variants={fadeUpVariants}
            className="text-emerald-100/90 text-xs sm:text-base md:text-base lg:text-lg xl:text-xl leading-relaxed mb-3.5 sm:mb-4.5 md:mb-5 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 md:px-4 font-medium"
          >
            Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
          </motion.p>

          {/* Key Trust Highlights (Responsive stats) */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-3.5 sm:mb-4.5 md:mb-5 text-xs sm:text-sm"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-200 shadow-sm cursor-default"
            >
              <div className="font-black text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-yellow-300">106+</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs md:text-sm font-semibold mt-0.5 md:mt-1">Menu Items (ሜኑ)</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-200 shadow-sm cursor-default"
            >
              <div className="font-black text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-emerald-300">100%</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs md:text-sm font-semibold mt-0.5 md:mt-1">Natural Fresh</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-200 shadow-sm cursor-default"
            >
              <div className="font-black text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-amber-300">Daily</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs md:text-sm font-semibold mt-0.5 md:mt-1">7 AM – 10 PM</div>
            </motion.div>
          </motion.div>

          {/* Primary CTA Action Button */}
          <motion.div
            variants={fadeUpVariants}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center"
          >
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Link
                to="/menu"
                className="inline-flex items-center justify-between gap-3 md:gap-4 px-5 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-2xl md:rounded-3xl text-stone-950 font-bold bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 w-full group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-emerald-950/10 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform duration-200">
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-stone-950" />
                </div>
                <div className="flex flex-col items-center justify-center flex-1 leading-tight">
                  <span className="text-base sm:text-lg md:text-xl font-black tracking-tight">Explore Our Menu</span>
                  <span className="text-xs sm:text-sm md:text-base font-extrabold text-emerald-950 font-sans mt-0.5">ሜኑ ይመልከቱ</span>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-emerald-950/10 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-stone-950 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-1.5 md:gap-2 text-xs sm:text-sm md:text-base text-emerald-200/90 mt-2 sm:mt-2.5 md:mt-3 font-semibold transition-colors hover:text-emerald-100 cursor-default"
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-emerald-300" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};
