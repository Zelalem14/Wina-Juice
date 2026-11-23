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
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800">
      {/* 1. HERO SECTION (Mobile-First, Focused, and Direct) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-4 sm:py-10 lg:py-16 px-3 sm:px-4 min-h-[calc(100dvh-110px)] md:min-h-[calc(100vh-68px)] flex items-center justify-center">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 w-full text-center flex flex-col items-center">
          {/* Brand Logo & Subtitle Badge */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 p-1.5 sm:p-2.5 pr-3.5 sm:pr-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-3 sm:mb-5 shadow-lg">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/wina-logo.png"
                alt="Wina Juice Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-lg font-extrabold text-white font-serif tracking-tight leading-tight">
                Wina Juice <span className="text-emerald-300 font-sans text-xs sm:text-sm font-bold ml-1">ዊና ጁስ</span>
              </div>
              <div className="text-amber-200 text-[10px] sm:text-xs font-medium tracking-wide">
                Artisan Coffee & Fresh Cuisine
              </div>
            </div>
          </div>

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-300 shrink-0" />
            <span>100% Pure Natural Juices • ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif leading-[1.15] text-white mb-2 sm:mb-3">
            Fresh Flavors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">
              Made for You.
            </span>
            <span className="block text-base sm:text-2xl lg:text-3xl font-sans font-bold text-red-400 mt-1 sm:mt-1.5">
              ትኩስ እና የተመረጡ ጣዕሞች ለእርስዎ
            </span>
          </h1>

          {/* Short Focused Introduction */}
          <p className="text-emerald-100/90 text-[11px] sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-5 max-w-lg mx-auto px-2">
            Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
          </p>

          {/* Key Trust Highlights (Compact Stat Row) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full max-w-md mx-auto mb-4 sm:mb-6 text-xs">
            <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div className="font-extrabold text-sm sm:text-base text-yellow-300">106+</div>
              <div className="text-emerald-200 text-[9px] sm:text-[11px] font-medium">Menu Items (ሜኑ)</div>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div className="font-extrabold text-sm sm:text-base text-emerald-300">100%</div>
              <div className="text-emerald-200 text-[9px] sm:text-[11px] font-medium">Natural Fresh</div>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div className="font-extrabold text-sm sm:text-base text-amber-300">Daily</div>
              <div className="text-emerald-200 text-[9px] sm:text-[11px] font-medium">7 AM – 10 PM</div>
            </div>
          </div>

          {/* Primary CTA Action Button */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-between gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-stone-950 font-bold bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] transition-all shadow-xl hover:shadow-emerald-500/30 w-full group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-950/10 flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4 text-stone-950" />
              </div>
              <div className="flex flex-col items-center justify-center flex-1 leading-tight">
                <span className="text-sm sm:text-base font-extrabold tracking-tight">Explore Our Menu</span>
                <span className="text-[11px] sm:text-xs font-bold text-emerald-950/80 font-sans">ሜኑ ይመልከቱ</span>
              </div>
              <div className="w-8 h-8 rounded-xl bg-emerald-950/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-stone-950 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-emerald-200/80 mt-2.5 sm:mt-3 font-medium">
              <Clock className="w-3 h-3 text-emerald-300" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
