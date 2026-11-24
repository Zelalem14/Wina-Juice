import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Utensils,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Leaf,
  GlassWater,
  Award,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { branchContacts, categories } from '../data/menuData';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-16 px-4 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Breadcrumb / Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>About Wina Juice • ስለ ዊና ጁስ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white mb-3">
            Fresh Flavors, Pure Natural Quality
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to Wina Juice (ዊና ጁስ) — Addis Ababa&apos;s premier destination for naturally pressed tropical juices, nutritious smoothies, handcrafted burgers, stone-baked pizzas, shawarma wraps, and traditional Ethiopian dishes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 text-emerald-200 border border-white/15">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>7:00 AM – 10:00 PM Daily</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 text-emerald-200 border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>6 Addis Ababa Branches</span>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-500 text-stone-950 font-bold hover:bg-emerald-400 transition-colors shadow-sm"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>View Menu (ሜኑ)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. RESTAURANT STORY & COMMITMENT */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Our Passion & Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif tracking-tight mb-4">
              Pure Ingredients, Handcrafted with Care
            </h2>
            <div className="space-y-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>Wina Juice (ዊና ጁስ)</strong>, we believe real food and pure natural juices belong together. We strictly select fresh, ripe avocado, mango, papaya, orange, strawberries, and pineapples sourced from Ethiopia&apos;s rich agricultural regions.
              </p>
              <p>
                Whether you are stopping by for a refreshing morning power juice, enjoying a hearty lunch with friends, or ordering takeaway for your family, our team prepares every juice, smoothie, burger, and fasting platter fresh to order.
              </p>
            </div>
          </div>

          {/* Core Quality Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-2.5">
                <GlassWater className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">100% Pure Fruit</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Cold-pressed juices and power smoothies with no artificial additives or preservatives.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-2.5">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">Fasting (የፆም) Friendly</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Authentic fasting firfir, shiro, vegetable platters, and vegan mayonnaise.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-2.5">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">Gourmet Kitchen</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Handcrafted burgers, oven-baked Italian pizzas, crispy chicken & shawarma wraps.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-2.5">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">6 Addis Branches</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Summit, Bole, Piazza, Shola, Adisu Gebeya, and Ras Desta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR CATEGORIES */}
      <section className="py-12 px-4 bg-stone-100/80 border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <Utensils className="w-3.5 h-3.5" />
                <span>Popular Categories • ተወዳጅ ምግቦች</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                Explore Our Food & Drink Selection
              </h2>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>Explore Full Menu (ሙሉ ሜኑ ይመልከቱ)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col"
              >
                <div className="h-28 sm:h-36 overflow-hidden relative bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    {cat.nameAm}
                  </span>
                </div>

                <div className="p-3 flex items-center justify-between gap-2 flex-1">
                  <span className="text-xs sm:text-sm font-bold text-stone-800 group-hover:text-emerald-700 transition-colors truncate">
                    {cat.nameEn}
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPENING HOURS & BRANCH INFORMATION */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Opening Hours Card */}
          <div className="lg:col-span-5 bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>Working Schedule</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mb-2">
              Opening Hours
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 mb-6 leading-relaxed">
              We are open daily across all 6 branches for dine-in, takeaway, and call-ahead orders.
            </p>

            <div className="space-y-3 bg-emerald-900/60 rounded-2xl p-4 border border-emerald-800/80 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-200 font-medium">Monday – Sunday:</span>
                <span className="font-bold text-yellow-300 font-mono">7:00 AM – 10:00 PM</span>
              </div>
              <div className="pt-2 border-t border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open 7 days a week, including holidays</span>
              </div>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-all shadow-md"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Branch Directory Preview */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Addis Ababa Locations</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
                  6 Branches Across the City
                </h3>
              </div>

              <Link
                to="/branches"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-600 transition-all shadow-xs"
              >
                <span>View All Branches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {branchContacts.map((b) => (
                <div
                  key={b.id}
                  className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-emerald-300 transition-all flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-stone-900 text-sm">{b.nameEn}</span>
                      <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                        {b.nameAm}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 truncate mt-0.5">
                      {b.location}
                    </div>
                  </div>

                  <a
                    href={b.telUri}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 font-mono text-xs font-bold border border-red-200 transition-colors shrink-0"
                    title={`Call ${b.nameEn} Branch`}
                  >
                    <Phone className="w-3 h-3 fill-red-700" />
                    <span>{b.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:hidden">
              <Link
                to="/branches"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-600 transition-all shadow-xs"
              >
                <span>View All 6 Branches & Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
