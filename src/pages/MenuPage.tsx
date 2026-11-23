import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories, menuItems, extraItems, takeAwayItems } from '../data/menuData';
import { MenuItemCard } from '../components/MenuItemCard';
import {
  Utensils,
  Search,
  X,
  Layers,
  ArrowLeft,
  PackageCheck,
  PlusCircle,
  GlassWater,
  Citrus,
  Sandwich,
  Pizza,
  Drumstick,
  Salad,
  Carrot,
  Soup,
  Smile,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync category state with search params if changed
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleSelectCategory = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GlassWater': return <GlassWater className="w-4 h-4" />;
      case 'Citrus': return <Citrus className="w-4 h-4" />;
      case 'Sandwich': return <Sandwich className="w-4 h-4" />;
      case 'Pizza': return <Pizza className="w-4 h-4" />;
      case 'Drumstick': return <Drumstick className="w-4 h-4" />;
      case 'Salad': return <Salad className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'Carrot': return <Carrot className="w-4 h-4" />;
      case 'Soup': return <Soup className="w-4 h-4" />;
      case 'Smile': return <Smile className="w-4 h-4" />;
      case 'PackageCheck': return <PackageCheck className="w-4 h-4" />;
      default: return <Utensils className="w-4 h-4" />;
    }
  };

  // Filter items based on search query
  const filteredMenuItems = useMemo(() => {
    if (!searchQuery.trim()) return menuItems;
    const query = searchQuery.toLowerCase().trim();
    return menuItems.filter((item) => {
      const matchEn = item.nameEn.toLowerCase().includes(query);
      const matchAm = item.nameAm.includes(query);
      const matchDescEn = item.descriptionEn?.toLowerCase().includes(query) || false;
      const matchDescAm = item.descriptionAm?.includes(query) || false;
      return matchEn || matchAm || matchDescEn || matchDescAm;
    });
  }, [searchQuery]);

  // Categories to display
  const activeCategories = useMemo(() => {
    if (selectedCategory) {
      return categories.filter((c) => c.id === selectedCategory);
    }
    return categories;
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 pb-20">
      {/* 1. TOP HEADER BANNER */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Official Digital Menu • 100% Verified Prices</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-white mb-3">
            Wina Juice Menu <span className="text-red-400">|</span> <span className="text-emerald-300 font-sans">የዊና ጁስ ምናሌ</span>
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            Explore our complete selection of freshly pressed tropical juices, fruit smoothies, stone-baked pizzas, gourmet burgers, traditional fasting dishes, and takeaway packages.
          </p>

          {/* Quick Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search food, juices, burgers, pizza... / ምግቦችን ይፈልጉ"
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white text-stone-900 placeholder:text-stone-400 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-white/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS BAR */}
      <div className="sticky top-[80px] sm:top-[88px] z-30 bg-[#fbfbf9]/95 backdrop-blur-md border-b border-stone-200 py-3 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {/* All Categories Button */}
          <button
            onClick={() => handleSelectCategory(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              selectedCategory === null
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Items ({menuItems.length + extraItems.length + takeAwayItems.length})</span>
          </button>

          {/* Category Buttons */}
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            let count = menuItems.filter((i) => i.categoryId === cat.id).length;
            if (cat.id === 'extra-takeaway') {
              count = extraItems.length + takeAwayItems.length;
            }

            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.nameEn}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-stone-100 text-stone-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MENU CONTENT SECTIONS */}
      <main className="max-w-7xl mx-auto px-4 pt-10">
        {/* Back Link if single category selected */}
        {selectedCategory && (
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => handleSelectCategory(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Show All Categories</span>
            </button>
            <span className="text-xs text-stone-500">
              Showing single category view
            </span>
          </div>
        )}

        {/* Categories Loop */}
        <div className="space-y-16">
          {activeCategories.map((cat) => {
            if (cat.id === 'extra-takeaway') {
              // Special Extra & Takeaway Display
              return (
                <section key={cat.id} id={cat.id} className="scroll-mt-36">
                  {/* Category Header */}
                  <div className="flex flex-wrap items-end justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                        {getCategoryIcon(cat.iconName)}
                        <span>{cat.nameAm}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                        {cat.nameEn}
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-xl">
                        {cat.description}
                      </p>
                    </div>

                    <Link
                      to={`/category/${cat.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      <span>Dedicated {cat.nameEn} Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Extra & Takeaway 2-column layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Extra Add-ons (2 cols) */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                            <PlusCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-stone-900">
                              ተጨማሪ (Extra Items)
                            </h3>
                            <p className="text-xs text-stone-500">Add-ons & toppings</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                          {extraItems.length} items
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {extraItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-300 transition-all"
                          >
                            <div>
                              <div className="font-bold text-sm text-stone-900">{item.nameAm}</div>
                              <div className="text-xs text-stone-500">{item.nameEn}</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-mono font-extrabold text-emerald-800 text-sm">
                                {item.price}
                              </span>
                              <span className="text-[10px] font-bold text-stone-400">ETB</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Takeaway Packaging (1 col) */}
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-stone-100">
                          <div className="p-2 rounded-xl bg-red-100 text-red-800">
                            <PackageCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-stone-900">
                              ማሸጊያ (Take Away)
                            </h3>
                            <p className="text-xs text-stone-500">Hygienic packaging</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {takeAwayItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-red-300 transition-all"
                            >
                              <div>
                                <div className="font-bold text-sm text-stone-900">{item.nameAm}</div>
                                <div className="text-xs text-stone-500">{item.nameEn}</div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="font-mono font-extrabold text-red-800 text-sm">
                                  {item.price}
                                </span>
                                <span className="text-[10px] font-bold text-stone-400">ETB</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-[11px] text-stone-600">
                        💡 Container prices apply per take-out order according to container type.
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            // Normal Category Section
            const items = filteredMenuItems.filter((i) => i.categoryId === cat.id);
            if (items.length === 0 && searchQuery) {
              return null; // Skip empty category during search
            }

            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-36">
                {/* Category Header Banner */}
                <div className="flex flex-wrap items-end justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                      {getCategoryIcon(cat.iconName)}
                      <span>{cat.nameAm}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                      {cat.nameEn}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-xl">
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                      {items.length} items
                    </span>
                    <Link
                      to={`/category/${cat.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      <span>Dedicated Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      category={cat}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Empty Search Result Fallback */}
        {filteredMenuItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto my-8">
            <Utensils className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No menu items match your search</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              Try searching with different keywords like &quot;Burger&quot;, &quot;Juice&quot;, &quot;Firfir&quot;, or &quot;Pizza&quot;.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
