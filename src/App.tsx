import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { MenuItemCard } from './components/MenuItemCard';
import { ExtraAndTakeawaySection } from './components/ExtraAndTakeawaySection';
import { BranchContactSection } from './components/BranchContactSection';
import { Footer } from './components/Footer';
import { QRCodeModal } from './components/QRCodeModal';
import { categories, menuItems, branchContacts } from './data/menuData';
import { ArrowUp, UtensilsCrossed, Sparkles } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDietaryFilter, setActiveDietaryFilter] = useState<'fasting' | 'vegetarian' | 'chicken' | 'beef' | 'fish' | 'juice' | null>(null);
  const [selectedBranch, setSelectedBranch] = useState(branchContacts[0].id);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  // Compute item count per category for badges
  const itemCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of categories) {
      counts[cat.id] = menuItems.filter((i) => i.categoryId === cat.id).length;
    }
    return counts;
  }, []);

  // Filter items based on search, category, and dietary filters
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchEn = item.nameEn.toLowerCase().includes(query);
        const matchAm = item.nameAm.includes(query);
        const matchDescEn = item.descriptionEn?.toLowerCase().includes(query) || false;
        const matchDescAm = item.descriptionAm?.includes(query) || false;
        if (!matchEn && !matchAm && !matchDescEn && !matchDescAm) {
          return false;
        }
      }

      // Category filter
      if (activeCategory && item.categoryId !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (activeDietaryFilter) {
        if (!item.dietary || !item.dietary.includes(activeDietaryFilter)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, activeCategory, activeDietaryFilter]);

  // Group filtered items by category for structured display
  const groupedItems = useMemo(() => {
    const groups: { category: typeof categories[0]; items: typeof menuItems }[] = [];

    // Filter relevant categories
    const targetCategories = activeCategory
      ? categories.filter((c) => c.id === activeCategory)
      : categories;

    for (const cat of targetCategories) {
      const items = filteredItems.filter((item) => item.categoryId === cat.id);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    }

    return groups;
  }, [filteredItems, activeCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] text-stone-800">
      {/* Top Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        onOpenQRCode={() => setIsQRModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        activeDietaryFilter={activeDietaryFilter}
        setActiveDietaryFilter={setActiveDietaryFilter}
        itemCount={menuItems.length}
      />

      {/* Sticky Category Navigation */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        itemCounts={itemCounts}
      />

      {/* Main Menu Area */}
      <main id="menu-section" className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {/* Active Filters / Status Banner */}
        {(searchQuery || activeCategory || activeDietaryFilter) && (
          <div className="mb-6 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-stone-500">Showing results for:</span>
              {searchQuery && (
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  Search: &ldquo;{searchQuery}&rdquo;
                </span>
              )}
              {activeCategory && (
                <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-800 font-bold border border-red-200">
                  Category: {categories.find((c) => c.id === activeCategory)?.nameEn}
                </span>
              )}
              {activeDietaryFilter && (
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 font-bold border border-amber-200">
                  Diet: {activeDietaryFilter.toUpperCase()}
                </span>
              )}
              <span className="text-xs text-stone-400">
                ({filteredItems.length} items found)
              </span>
            </div>

            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory(null);
                setActiveDietaryFilter(null);
              }}
              className="text-xs font-bold text-red-700 hover:text-red-900 underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Empty State */}
        {groupedItems.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-md mx-auto my-10">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-1">No Menu Items Found</h3>
            <p className="text-stone-500 text-xs mb-4">
              We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo; with your selected filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory(null);
                setActiveDietaryFilter(null);
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
            >
              Show Full Menu
            </button>
          </div>
        )}

        {/* Grouped Category Sections */}
        <div className="space-y-12">
          {groupedItems.map(({ category, items }) => {
            // Theme colors matching physical menu
            let headerThemeClass = 'border-l-4 border-red-600';
            let titleColorClass = 'text-red-900';
            let badgeBg = 'bg-red-50 text-red-700 border-red-200';

            if (category.themeColor === 'green') {
              headerThemeClass = 'border-l-4 border-emerald-600';
              titleColorClass = 'text-emerald-950';
              badgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
            } else if (category.themeColor === 'teal') {
              headerThemeClass = 'border-l-4 border-cyan-600';
              titleColorClass = 'text-cyan-950';
              badgeBg = 'bg-cyan-50 text-cyan-800 border-cyan-200';
            }

            return (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                {/* Section Header */}
                <div className={`pl-3.5 mb-5 ${headerThemeClass}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <h2 className={`text-2xl sm:text-3xl font-extrabold font-serif tracking-tight ${titleColorClass}`}>
                        {category.nameEn}
                      </h2>
                      <span className="text-lg sm:text-xl font-bold text-stone-600 font-sans">
                        / {category.nameAm}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${badgeBg}`}>
                      {items.length} {items.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                  {category.description && (
                    <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} category={category} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Extra Toppings & Takeaway Packaging Section */}
        <ExtraAndTakeawaySection />

        {/* Quality Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-red-50 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-700 text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 font-serif">
                Fresh Natural Quality at Wina Juice
              </h3>
              <p className="text-xs text-stone-600">
                All 106 juices, smoothies, burgers, pizzas, and traditional dishes are freshly prepared daily across our 6 Addis Ababa branches.
              </p>
            </div>
          </div>
          <a
            href="#branches-section"
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-sm shrink-0"
          >
            Call / Order from Nearest Branch
          </a>
        </div>
      </main>

      {/* 6 Branch Contacts Section */}
      <BranchContactSection />

      {/* Footer */}
      <Footer onOpenQRCode={() => setIsQRModalOpen(true)} />

      {/* QR Code & Printable Table Card Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      {/* Back to top floating button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-700 text-white shadow-xl hover:bg-emerald-800 transition-all hover:-translate-y-1 z-30"
        title="Back to Top"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;
