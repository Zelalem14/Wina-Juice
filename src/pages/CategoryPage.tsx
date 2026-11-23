import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categories, menuItems, extraItems, takeAwayItems } from '../data/menuData';
import { MenuItemCard } from '../components/MenuItemCard';
import {
  ArrowLeft,
  Search,
  X,
  ChevronRight,
  PackageCheck,
  PlusCircle,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [inCategorySearch, setInCategorySearch] = useState('');

  // Scroll to top upon opening new category
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setInCategorySearch('');
  }, [categoryId]);

  const currentCategory = useMemo(() => {
    return categories.find((c) => c.id === categoryId) || categories[0];
  }, [categoryId]);

  // Filter items belonging strictly to this category
  const categoryItems = useMemo(() => {
    if (categoryId === 'extra-takeaway') {
      return [];
    }

    return menuItems.filter((item) => {
      if (item.categoryId !== categoryId) return false;

      if (inCategorySearch.trim()) {
        const query = inCategorySearch.toLowerCase().trim();
        const matchEn = item.nameEn.toLowerCase().includes(query);
        const matchAm = item.nameAm.includes(query);
        const matchDescEn = item.descriptionEn?.toLowerCase().includes(query) || false;
        const matchDescAm = item.descriptionAm?.includes(query) || false;
        return matchEn || matchAm || matchDescEn || matchDescAm;
      }

      return true;
    });
  }, [categoryId, inCategorySearch]);

  const isExtraTakeaway = categoryId === 'extra-takeaway';

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 pb-16">
      {/* 1. TOP BREADCRUMB & CONTROLS BAR */}
      <div className="bg-white border-b border-stone-200 sticky top-[80px] sm:top-[88px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <Link to="/" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            <Link to="/menu" className="hover:text-emerald-700 transition-colors">
              Menu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            <span className="font-bold text-stone-900 truncate max-w-[150px] sm:max-w-none">
              {currentCategory.nameEn}
            </span>
          </div>

          {/* Controls: Back Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate('/menu')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY HERO BANNER */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-stone-900 text-white">
        <img
          src={currentCategory.image}
          alt={currentCategory.nameEn}
          className="w-full h-full object-cover opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex flex-col justify-end pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/80 backdrop-blur-sm text-white text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>
                {isExtraTakeaway
                  ? 'Add-ons & Packaging'
                  : `${categoryItems.length} Products Available`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
              {currentCategory.nameEn}
              <span className="text-emerald-400 font-sans font-bold text-2xl sm:text-3xl ml-3">
                / {currentCategory.nameAm}
              </span>
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* Search Filter Within Category (for categories with items) */}
        {!isExtraTakeaway && (
          <div className="mb-8 max-w-md relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={`Filter in ${currentCategory.nameEn}... (ስም ወይም ንጥረ ነገር)`}
              value={inCategorySearch}
              onChange={(e) => setInCategorySearch(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white shadow-xs"
            />
            {inCategorySearch && (
              <button
                onClick={() => setInCategorySearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* REGULAR CATEGORY ITEMS GRID */}
        {!isExtraTakeaway && (
          <>
            {categoryItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    category={currentCategory}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-md mx-auto my-8">
                <UtensilsCrossed className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                <h3 className="font-bold text-base text-stone-800">No items match your filter</h3>
                <p className="text-xs text-stone-500 mt-1 mb-4">
                  No items in &ldquo;{currentCategory.nameEn}&rdquo; match &ldquo;{inCategorySearch}&rdquo;.
                </p>
                <button
                  onClick={() => setInCategorySearch('')}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </>
        )}

        {/* SPECIAL VIEW: EXTRA & TAKEAWAY ITEMS */}
        {isExtraTakeaway && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ተጨማሪ / Extra Items (2 cols) */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-600 shadow-sm">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-emerald-100">
                <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-800">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-emerald-950 font-serif">
                    ተጨማሪ <span className="font-sans font-bold text-emerald-700 text-xl">Extra Add-ons</span>
                  </h2>
                  <p className="text-xs text-stone-500">
                    Custom add-ons and toppings to customize your food and drinks
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {extraItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 hover:bg-emerald-50/50 border border-stone-200 hover:border-emerald-300 transition-all"
                  >
                    <div>
                      <div className="font-bold text-sm text-stone-900">{item.nameAm}</div>
                      <div className="text-xs text-stone-500">{item.nameEn}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono font-extrabold text-emerald-800 text-base">
                        {item.price}
                      </span>
                      <span className="text-[11px] font-bold text-stone-400">ETB</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Take Away / ማሸጊያ (1 col) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-red-600 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-red-100">
                  <div className="p-2.5 rounded-2xl bg-red-100 text-red-800">
                    <PackageCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-red-950 font-serif">
                      Take Away <span className="font-sans font-bold text-stone-700 text-xl">ማሸጊያ</span>
                    </h2>
                    <p className="text-xs text-stone-500">
                      Safe & hygienic takeaway packaging
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {takeAwayItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 hover:bg-red-50/50 border border-stone-200 hover:border-red-300 transition-all"
                    >
                      <div>
                        <div className="font-bold text-sm text-stone-900">{item.nameAm}</div>
                        <div className="text-xs text-stone-500">{item.nameEn}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-mono font-extrabold text-red-800 text-base">
                          {item.price}
                        </span>
                        <span className="text-[11px] font-bold text-stone-400">ETB</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                💡 <strong>Takeaway Note:</strong> Packaging prices apply per take-out order according to container type as printed on the official menu.
              </div>
            </div>
          </div>
        )}

        {/* 4. QUICK CATEGORY JUMP BAR (At bottom of page) */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-stone-800 text-sm uppercase tracking-wider">
              Browse Other Categories
            </h3>
            <Link
              to="/menu"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
            >
              <span>View All Menu</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {categories.map((c) => {
              const isCurrent = c.id === categoryId;
              return (
                <Link
                  key={c.id}
                  to={`/category/${c.id}`}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                    isCurrent
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  <span>{c.nameEn}</span>
                  <span className={`ml-1 text-[11px] ${isCurrent ? 'text-white/80' : 'text-stone-400'}`}>
                    ({c.nameAm})
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
