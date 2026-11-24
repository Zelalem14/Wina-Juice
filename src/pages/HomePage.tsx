import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Utensils,
  ArrowRight,
  Clock
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white">
      {/* 1. HERO SECTION (Clear, Large Typography & Focused) */}
      <section className="relative flex-1 w-full overflow-hidden text-white py-4 sm:py-10 lg:py-16 px-3.5 sm:px-4 flex items-center justify-center">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 w-full text-center flex flex-col items-center">
          {/* Brand Logo & Name Badge */}
          <div className="inline-flex items-center gap-3 p-1.5 sm:p-2 pr-4 sm:pr-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-3 sm:mb-5 shadow-lg">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/wina-logo.png"
                alt="Wina Juice Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-base sm:text-xl font-extrabold text-white font-serif tracking-tight leading-tight">
              Wina Juice <span className="text-emerald-300 font-sans text-sm sm:text-base font-bold ml-1.5">ዊና ጁስ</span>
            </div>
          </div>

          {/* Tagline Badge (Larger, clearer font) */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 shrink-0" />
            <span>100% Pure Natural Juices • ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች</span>
          </div>

          {/* Headline (Larger font size for clear readability) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-[1.15] text-white mb-2 sm:mb-3">
            Fresh Flavors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">
              Made for You.
            </span>
            <span className="block text-lg sm:text-2xl lg:text-3xl font-sans font-extrabold text-red-400 mt-1.5 sm:mt-2">
              ትኩስ እና የተመረጡ ጣዕሞች ለእርስዎ
            </span>
          </h1>

          {/* Short Focused Introduction (Larger, more readable text) */}
          <p className="text-emerald-100/90 text-xs sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-xl mx-auto px-2 font-medium">
            Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
          </p>

          {/* Key Trust Highlights (Larger font stats) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full max-w-md mx-auto mb-4 sm:mb-6 text-xs">
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div className="font-black text-base sm:text-xl lg:text-2xl text-yellow-300">106+</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs font-semibold mt-0.5">Menu Items (ሜኑ)</div>
            </div>
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div className="font-black text-base sm:text-xl lg:text-2xl text-emerald-300">100%</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs font-semibold mt-0.5">Natural Fresh</div>
            </div>
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div className="font-black text-base sm:text-xl lg:text-2xl text-amber-300">Daily</div>
              <div className="text-emerald-200 text-[10px] sm:text-xs font-semibold mt-0.5">7 AM – 10 PM</div>
            </div>
          </div>

          {/* Primary CTA Action Button (Larger, high-visibility font) */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-between gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-stone-950 font-bold bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] transition-all shadow-xl hover:shadow-emerald-500/30 w-full group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/10 flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950" />
              </div>
              <div className="flex flex-col items-center justify-center flex-1 leading-tight">
                <span className="text-base sm:text-lg font-black tracking-tight">Explore Our Menu</span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-950 font-sans mt-0.5">ሜኑ ይመልከቱ</span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-emerald-200/90 mt-2.5 sm:mt-3 font-semibold">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
