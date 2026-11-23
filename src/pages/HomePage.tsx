import React from 'react';
import { Link } from 'react-router-dom';
import { branchContacts } from '../data/menuData';
import {
  Sparkles,
  Utensils,
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800">
      {/* 1. HERO SECTION (Minimal, Focused, and Direct) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-16 lg:py-20 px-4 min-h-[calc(100vh-68px)] flex items-center">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Brand Logo & Subtitle Badge (Matching Reference Screenshot) */}
              <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-5 sm:mb-6 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wina-logo.png"
                    alt="Wina Juice Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg font-extrabold text-white font-serif tracking-tight leading-tight">
                    Wina Juice <span className="text-emerald-300 font-sans text-xs sm:text-sm font-bold ml-1">ዊና ጁስ</span>
                  </div>
                  <div className="text-amber-200 text-[11px] sm:text-xs font-medium tracking-wide">
                    Artisan Coffee & Fresh Cuisine
                  </div>
                </div>
              </div>

              {/* Tagline Badge */}
              <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[11px] sm:text-xs font-semibold backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                  <span>100% Pure Natural Juices • ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-[1.15] text-white mb-3 sm:mb-4">
                Fresh Flavors, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">
                  Made for You.
                </span>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-red-400 mt-1.5 sm:mt-2">
                  ትኩስ እና የተመረጡ ጣዕሞች ለእርስዎ
                </span>
              </h1>

              {/* Short Focused Introduction */}
              <p className="text-emerald-100/90 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0">
                Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
              </p>

              {/* Key Trust Highlights (Compact Stat Row) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0 mb-5 sm:mb-6 text-xs">
                <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm sm:text-base text-yellow-300">106+</div>
                  <div className="text-emerald-200 text-[10px] sm:text-[11px] font-medium">Menu Items (ሜኑ)</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm sm:text-base text-emerald-300">6</div>
                  <div className="text-emerald-200 text-[10px] sm:text-[11px] font-medium">Addis Branches</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm sm:text-base text-red-300">100%</div>
                  <div className="text-emerald-200 text-[10px] sm:text-[11px] font-medium">Pure Fruit</div>
                </div>
              </div>

              {/* Small Branch Location Pills (Subtle badges without addresses or lists) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-1.5 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                <span className="text-[11px] sm:text-xs text-emerald-300 font-semibold flex items-center gap-1 mr-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Branches:</span>
                </span>
                {branchContacts.map((b) => (
                  <span
                    key={b.id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] text-emerald-100 font-medium"
                  >
                    <span>{b.nameEn}</span>
                    <span className="text-emerald-300 text-[9px] sm:text-[10px]">({b.nameAm})</span>
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-all shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Utensils className="w-5 h-5 text-stone-950" />
                  <span>Explore Our Menu (ሜኑ ይመልከቱ)</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/branches"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
                  <span>Open Daily 7:00 AM – 10:00 PM</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Main Hero Card with Appetizing Juice Imagery */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 group">
                  <img
                    src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80"
                    alt="Wina Juice fresh fruit smoothies"
                    className="w-full h-64 sm:h-80 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Signature Specialties
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold font-serif text-white">
                      Wina Protein & Spruce Juices
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-300 mt-1">
                      Layered fresh avocado, mango, papaya, strawberry & natural honey
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
                      <span className="text-[11px] text-emerald-200 font-medium">
                        100% Pure Natural Fruit
                      </span>
                      <Link
                        to="/menu"
                        className="inline-flex items-center gap-1 text-xs font-bold text-yellow-300 hover:text-yellow-200"
                      >
                        <span>View Menu (ሜኑ)</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
