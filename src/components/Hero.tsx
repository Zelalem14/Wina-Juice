import React from 'react';
import { Sparkles, Utensils, GlassWater, Leaf, Eye, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenOriginalMenu: () => void;
  activeDietaryFilter: string | null;
  setActiveDietaryFilter: (tag: any) => void;
  itemCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenOriginalMenu,
  activeDietaryFilter,
  setActiveDietaryFilter,
  itemCount,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white py-10 sm:py-14 px-4 shadow-md">
      {/* Background Decorative Rings/Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Main Hero Text */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Official Digital Menu • 100% Faithful to Physical Menu</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif leading-tight text-white mb-2">
              Wina Juice <span className="text-red-400">|</span> <span className="font-sans font-bold text-emerald-300">ዊና ጁስ</span>
            </h1>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
              Welcome to Wina Juice digital menu. Explore our full selection of freshly squeezed juices, layered smoothies, signature burgers, oven-baked pizzas, traditional Ethiopian dishes (ፍርፍር እና ሽሮ), and shawarma wraps.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-6 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/50 text-emerald-200 font-semibold flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-yellow-400" />
                {itemCount} Menu Items
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/50 text-emerald-200 font-semibold flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                Fasting (የፆም) Available
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/50 text-emerald-200 font-semibold flex items-center gap-1.5">
                <GlassWater className="w-3.5 h-3.5 text-cyan-400" />
                100% Pure Natural Fruit
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={onOpenOriginalMenu}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white text-emerald-900 hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <Eye className="w-4 h-4 text-emerald-700" />
                Inspect Original Menu Photo
              </button>
              <a
                href="#branches-section"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-700/60 hover:bg-emerald-700 text-white border border-emerald-500/50 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-300" />
                Branches & Takeaway
              </a>
            </div>
          </div>

          {/* Quick Dietary Filters Pill Container */}
          <div className="w-full md:w-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 shrink-0">
            <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider mb-3 text-center md:text-left">
              Quick Filter By Diet / Category
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setActiveDietaryFilter(null)}
                className={`px-3 py-2 rounded-xl text-left font-semibold transition-all ${
                  activeDietaryFilter === null
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/15 text-stone-200'
                }`}
              >
                ✨ Show All ({itemCount})
              </button>
              <button
                onClick={() => setActiveDietaryFilter(activeDietaryFilter === 'fasting' ? null : 'fasting')}
                className={`px-3 py-2 rounded-xl text-left font-semibold transition-all ${
                  activeDietaryFilter === 'fasting'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/15 text-stone-200'
                }`}
              >
                🌱 Fasting (የፆም)
              </button>
              <button
                onClick={() => setActiveDietaryFilter(activeDietaryFilter === 'juice' ? null : 'juice')}
                className={`px-3 py-2 rounded-xl text-left font-semibold transition-all ${
                  activeDietaryFilter === 'juice'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/15 text-stone-200'
                }`}
              >
                🍹 Juices & Mojitos
              </button>
              <button
                onClick={() => setActiveDietaryFilter(activeDietaryFilter === 'beef' ? null : 'beef')}
                className={`px-3 py-2 rounded-xl text-left font-semibold transition-all ${
                  activeDietaryFilter === 'beef'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/15 text-stone-200'
                }`}
              >
                🥩 Beef / ስጋ
              </button>
              <button
                onClick={() => setActiveDietaryFilter(activeDietaryFilter === 'chicken' ? null : 'chicken')}
                className={`px-3 py-2 rounded-xl text-left font-semibold transition-all ${
                  activeDietaryFilter === 'chicken'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/15 text-stone-200'
                }`}
              >
                🍗 Chicken / ዶሮ
              </button>
              <button
                onClick={() => setActiveDietaryFilter(activeDietaryFilter === 'fish' ? null : 'fish')}
                className={`px-3 py-2 rounded-xl text-left font-semibold transition-all ${
                  activeDietaryFilter === 'fish'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/15 text-stone-200'
                }`}
              >
                🐟 Fish & Tuna / አሳ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
