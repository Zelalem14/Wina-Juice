import React, { useEffect } from 'react';
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Leaf,
  GlassWater,
  Utensils,
  Award
} from 'lucide-react';
import { categories } from '../data/menuData';

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
              <h3 className="font-bold text-stone-900 text-sm mb-1">Customer Satisfaction</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Dedicated hospitality, fast takeaway preparation, and premium natural flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR FOOD & BEVERAGES (Plain Text Food Names, Non-Clickable) */}
      <section className="py-12 px-4 bg-stone-100/80 border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>Popular Categories • ተወዳጅ ምግቦች</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Our Fresh Food & Drink Selection
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.slice(0, 8).map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs flex flex-col"
              >
                <div className="h-28 sm:h-36 overflow-hidden relative bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.nameEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    {cat.nameAm}
                  </span>
                </div>

                <div className="p-3 flex items-center justify-between gap-2 flex-1">
                  <span className="text-xs sm:text-sm font-bold text-stone-800 truncate">
                    {cat.nameEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPENING HOURS SCHEDULE */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-red-600/15 blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-300" />
            <span>Working Schedule • የስራ ሰዓት</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mb-2">
            Opening Hours
          </h3>

          <p className="text-xs sm:text-sm text-emerald-200/90 mb-6 max-w-md mx-auto leading-relaxed">
            We are open daily for dine-in, takeaway, and fresh orders.
          </p>

          <div className="w-full max-w-md bg-emerald-900/60 rounded-2xl p-4 sm:p-5 border border-emerald-800/80">
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span className="text-emerald-200 font-medium">Monday – Sunday:</span>
              <span className="font-bold text-yellow-300 font-mono text-base sm:text-lg">7:00 AM – 10:00 PM</span>
            </div>
            <div className="pt-2.5 mt-2.5 border-t border-emerald-800/60 flex items-center justify-center gap-2 text-xs text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open 7 days a week, including holidays</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
