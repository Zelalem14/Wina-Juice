import React from 'react';
import { Link } from 'react-router-dom';
import { categories, menuItems } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Utensils, GlassWater, Leaf, ArrowRight, Clock, Award } from 'lucide-react';
import { BranchContactSection } from '../components/BranchContactSection';

export const HomePage: React.FC = () => {
  const { languageMode } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-16 sm:py-24 px-4">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>
                  {languageMode === 'am'
                    ? 'ትኩስ የተፈጥሮ ጁስና ጣፋጭ ምግቦች'
                    : '100% Pure Natural Juices & Fresh Kitchen'}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif leading-[1.15] text-white mb-4">
                Fresh Flavors, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">
                  Made for You.
                </span>
                <span className="block text-2xl sm:text-3xl font-sans font-bold text-red-400 mt-2">
                  ትኩስ እና የተመረጡ ጣዕሞች ለእርስዎ
                </span>
              </h1>

              {/* Short Introduction */}
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Welcome to <strong>Wina Juice (ዊና ጁስ)</strong> — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
              </p>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 mb-8 text-xs">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-base text-yellow-300">106+</div>
                  <div className="text-emerald-200 text-[11px] font-medium">Menu Items</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-base text-emerald-300">6</div>
                  <div className="text-emerald-200 text-[11px] font-medium">Addis Branches</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-base text-red-300">100%</div>
                  <div className="text-emerald-200 text-[11px] font-medium">Pure Fruit</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-all shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Utensils className="w-5 h-5" />
                  <span>
                    {languageMode === 'am' ? 'ምድቦችን ይመልከቱ' : 'Explore Our Menu'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#branches-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <Clock className="w-4 h-4 text-emerald-300" />
                  <span>Open 7:00 AM – 10:00 PM</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card with Appetizing Juice & Food Imagery */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
                  <img
                    src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80"
                    alt="Wina Juice fresh fruit smoothies"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Signature Specialties
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                      Wina Protein & Spruce Juices
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Layered fresh avocado, mango, papaya, strawberry & natural honey
                    </p>
                  </div>
                </div>

                {/* Floating Food Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-3 max-w-xs">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80"
                    alt="Wina Burger"
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <div className="font-bold text-xs text-stone-900">Wina Burger (ዊና በርገር)</div>
                    <div className="text-[11px] text-stone-500">Fresh Beef Patty & Fries</div>
                    <div className="font-mono text-xs font-extrabold text-red-700 mt-0.5">620 ETB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MENU CATEGORIES SECTION */}
      <section id="categories" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>
              {languageMode === 'am' ? 'የምናሌ ምድቦች' : 'Explore by Category'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
            Select a Category to View Menu
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Click on any category card below to open its dedicated menu page. Browse all products, accurate ingredients, and prices derived directly from our official menu.
          </p>
        </div>

        {/* 11 CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => {
            // Count items belonging to this category
            let count = menuItems.filter((i) => i.categoryId === cat.id).length;
            if (cat.id === 'extra-takeaway') {
              count = 15; // 11 extra items + 4 takeaway packaging items
            }

            // Theme colors
            let badgeBg = 'bg-red-50 text-red-700 border-red-200';
            if (cat.themeColor === 'green') {
              badgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
            } else if (cat.themeColor === 'teal') {
              badgeBg = 'bg-cyan-50 text-cyan-800 border-cyan-200';
            }

            return (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Category Image Container */}
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={cat.image}
                      alt={cat.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Item Count Badge */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {count} items
                    </span>

                    {/* Amharic Title Overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs font-bold text-emerald-300 block drop-shadow">
                        {cat.nameAm}
                      </span>
                      <h3 className="text-xl font-extrabold text-white font-serif tracking-tight drop-shadow">
                        {cat.nameEn}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span className={`px-2 py-0.5 rounded-md border text-[10px] ${badgeBg}`}>
                    {cat.nameAm}
                  </span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. BRAND PILLARS / WHY CHOOSE WINA JUICE */}
      <section className="py-16 bg-emerald-950 text-white px-4 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
              Why Customers Love Wina Juice
            </h2>
            <p className="text-emerald-200 text-sm mt-2">
              Committed to fresh ingredients, authentic Ethiopian flavors, and exceptional quality everyday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700/80 flex items-center justify-center mb-4 text-emerald-200">
                <GlassWater className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Pure Natural Fruit</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                We use strictly fresh avocado, mango, papaya, orange, strawberries, and pineapples with no artificial additives.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700/80 flex items-center justify-center mb-4 text-emerald-200">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fasting (የፆም) Friendly</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Extensive fasting menu featuring authentic fasting firfir, shiro, vegetable platters, and vegan mayonnaise.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700/80 flex items-center justify-center mb-4 text-emerald-200">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">6 Convenient Branches</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Serving you at Summit, Bole, Piazza, Shola, Adisu Gebeya, and Ras Desta with fast dine-in and takeaway packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRANCH LOCATIONS DIRECTORY */}
      <BranchContactSection />
    </div>
  );
};
