import React, { useRef } from 'react';
import {
  GlassWater,
  Citrus,
  Sandwich,
  Pizza,
  Drumstick,
  Utensils,
  Carrot,
  Soup,
  Smile,
  Salad,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';
import { MenuCategory } from '../types';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  itemCounts: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  itemCounts,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
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
      default: return <Utensils className="w-4 h-4" />;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[95px] sm:top-[103px] z-30 bg-[#fbfbf9]/95 backdrop-blur-md border-b border-stone-200 py-3 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto relative flex items-center">
        {/* Left Scroll Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-stone-200 shadow-sm text-stone-600 hover:bg-stone-50 hover:text-stone-900 shrink-0 mr-2"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Categories Horizontal Scroll Bar */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 w-full"
        >
          {/* All Categories Button */}
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              activeCategory === null
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Items</span>
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = itemCounts[cat.id] || 0;

            // Physical menu border colors for category badges
            let activeColorClass = 'bg-emerald-700 text-white shadow-md';
            let borderColorClass = 'border-stone-200 hover:border-emerald-300';

            if (cat.themeColor === 'red') {
              activeColorClass = 'bg-red-700 text-white shadow-md';
              borderColorClass = 'border-stone-200 hover:border-red-300';
            } else if (cat.themeColor === 'teal') {
              activeColorClass = 'bg-teal-700 text-white shadow-md';
              borderColorClass = 'border-stone-200 hover:border-teal-300';
            }

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-medium shrink-0 transition-all ${
                  isActive
                    ? activeColorClass
                    : `bg-white text-stone-700 hover:bg-stone-50 border ${borderColorClass}`
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-stone-500'}>
                  {getIcon(cat.iconName)}
                </span>
                <span className="font-semibold">{cat.nameEn}</span>
                <span className={`text-[11px] ${isActive ? 'text-white/80' : 'text-stone-400'}`}>
                  ({cat.nameAm})
                </span>
                <span
                  className={`ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-stone-200 shadow-sm text-stone-600 hover:bg-stone-50 hover:text-stone-900 shrink-0 ml-2"
          aria-label="Scroll categories right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
