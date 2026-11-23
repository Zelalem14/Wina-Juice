import React from 'react';
import { Link } from 'react-router-dom';
import { branchContacts } from '../data/menuData';
import {
  Sparkles,
  Utensils,
  GlassWater,
  Leaf,
  ArrowRight,
  Clock,
  Award,
  MapPin
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-12 sm:py-20 lg:py-24 px-4">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                <span>
                  100% Pure Natural Juices • ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች
                </span>
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

              {/* Short Introduction */}
              <p className="text-emerald-100/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
              </p>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8 text-xs">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm sm:text-base text-yellow-300">106+</div>
                  <div className="text-emerald-200 text-[10px] sm:text-[11px] font-medium">Menu Items</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm sm:text-base text-emerald-300">6</div>
                  <div className="text-emerald-200 text-[10px] sm:text-[11px] font-medium">Addis Branches</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm sm:text-base text-red-300">100%</div>
                  <div className="text-emerald-200 text-[10px] sm:text-[11px] font-medium">Pure Fruit</div>
                </div>
              </div>

              {/* CTA Buttons - Full Width on Mobile for Thumb Tapping */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-all shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/branches"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
                  <span>Open 7:00 AM – 10:00 PM</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card with Appetizing Juice & Food Imagery */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 group">
                  <img
                    src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80"
                    alt="Wina Juice fresh fruit smoothies"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Signature Specialties
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold font-serif text-white">
                      Wina Protein & Spruce Juices
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-300 mt-1">
                      Layered fresh avocado, mango, papaya, strawberry & natural honey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIMPLIFIED MENU SECTION (Mobile-Optimized Padding & Cards) */}
      <section id="menu-overview" className="py-12 sm:py-20 lg:py-24 px-4 max-w-5xl mx-auto text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-3 sm:mb-4">
          <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700" />
          <span>Our Complete Menu • የእኛ ሙሉ ምናሌ</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          Handcrafted Juices, Smoothies & Fresh Kitchen
        </h2>

        {/* Short Attractive Description */}
        <p className="text-stone-600 text-xs sm:text-sm lg:text-base mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
          From cold-pressed tropical juices and creamy smoothies to gourmet grilled burgers, stone-baked pizzas, shawarma wraps, and authentic Ethiopian fasting dishes — view our full digital menu with complete ingredients and official prices.
        </p>

        {/* Category Feature Highlights (Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-3xl mx-auto mt-6 sm:mt-8 mb-8 sm:mb-10 text-[11px] sm:text-xs">
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🥑 Fresh Juices & Smoothies
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🍔 Gourmet Burgers & Sandwiches
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🍕 Stone-Baked Pizza
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🍗 Crispy Fried Chicken
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🌯 Shawarma Wraps
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🍲 Traditional Ethiopian Dishes
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🥗 Vegetarian & Fasting (የፆም)
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs font-medium">
            🍝 Spaghetti & Rice
          </span>
        </div>

        {/* Functional "Explore Our Menu" Action Button */}
        <div>
          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base lg:text-lg font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100 group-hover:rotate-12 transition-transform" />
            <span>Explore Our Menu</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="text-[11px] sm:text-xs text-stone-400 font-medium mt-2.5">
            106+ items • Exact physical menu pricing & ingredients
          </div>
        </div>
      </section>

      {/* 3. BRAND PILLARS / WHY CHOOSE WINA JUICE */}
      <section className="py-12 sm:py-16 bg-emerald-950 text-white px-4 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif">
              Why Customers Love Wina Juice
            </h2>
            <p className="text-emerald-200 text-xs sm:text-sm mt-1.5 sm:mt-2">
              Committed to fresh ingredients, authentic Ethiopian flavors, and exceptional quality everyday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-700/80 flex items-center justify-center mb-3 sm:mb-4 text-emerald-200">
                <GlassWater className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">100% Pure Natural Fruit</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                We use strictly fresh avocado, mango, papaya, orange, strawberries, and pineapples with no artificial additives.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-700/80 flex items-center justify-center mb-3 sm:mb-4 text-emerald-200">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Fasting (የፆም) Friendly</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Extensive fasting menu featuring authentic fasting firfir, shiro, vegetable platters, and vegan mayonnaise.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-700/80 flex items-center justify-center mb-3 sm:mb-4 text-emerald-200">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">6 Convenient Branches</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Serving you at Summit, Bole, Piazza, Shola, Adisu Gebeya, and Ras Desta with fast dine-in and takeaway packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM BRANCHES BAR (Mobile-Friendly Grid & Tap Targets) */}
      <section id="branches-section" className="py-10 sm:py-12 px-3 sm:px-4 bg-stone-100/80 border-t border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="text-center md:text-left w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Addis Ababa Locations</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
                6 Locations Across Addis Ababa
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Open daily 7:00 AM – 10:00 PM for dine-in and fast takeaway orders
              </p>

              {/* Small Branch Icons (2-col grid on phones, flex on larger screens) */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 mt-4">
                {branchContacts.map((b) => (
                  <div
                    key={b.id}
                    className="inline-flex items-center justify-center sm:justify-start gap-1 px-2.5 py-1.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] sm:text-xs text-stone-700 font-medium"
                    title={`${b.nameEn} Branch (${b.nameAm})`}
                  >
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{b.nameEn}</span>
                    <span className="text-stone-400 text-[10px] sm:text-[11px]">({b.nameAm})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View All 6 Branches Button (Full width on mobile) */}
            <div className="w-full sm:w-auto shrink-0">
              <Link
                to="/branches"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-md hover:shadow-emerald-700/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MapPin className="w-4 h-4" />
                <span>View All 6 Branches</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
