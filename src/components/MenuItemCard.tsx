import React from 'react';
import { MenuItem, MenuCategory } from '../types';
import { Sparkles, Leaf, Fish } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  category?: MenuCategory;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, category }) => {
  const theme = category?.themeColor || 'red';

  // Physical menu border colors
  let cardBorderClass = 'border-red-200 hover:border-red-500 hover:shadow-red-50';
  let badgeColorClass = 'bg-red-50 text-red-700 border-red-200';
  let priceBgClass = 'bg-red-50 text-red-800';

  if (theme === 'green') {
    cardBorderClass = 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-50';
    badgeColorClass = 'bg-emerald-50 text-emerald-800 border-emerald-200';
    priceBgClass = 'bg-emerald-50 text-emerald-800';
  } else if (theme === 'teal') {
    cardBorderClass = 'border-cyan-200 hover:border-cyan-500 hover:shadow-cyan-50';
    badgeColorClass = 'bg-cyan-50 text-cyan-800 border-cyan-200';
    priceBgClass = 'bg-cyan-50 text-cyan-800';
  }

  const isFasting = item.dietary?.includes('fasting');
  const isFish = item.dietary?.includes('fish');

  return (
    <div
      className={`relative bg-white rounded-2xl p-4 sm:p-5 border ${cardBorderClass} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group`}
    >
      {/* Top Section: Title, Dot Leader, Price */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          {/* Item Names */}
          <div className="flex-1 min-w-0">
            {/* Amharic Name (from original menu) */}
            <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
              <span>{item.nameAm}</span>
              {item.featured && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                  House Special
                </span>
              )}
            </div>

            {/* English Name (from original menu) */}
            <h3 className="text-base sm:text-lg font-extrabold text-stone-800 tracking-tight leading-snug">
              {item.nameEn}
            </h3>
          </div>

          {/* Price Badge */}
          <div className="shrink-0 text-right">
            <div className={`px-2.5 py-1 rounded-xl font-mono font-extrabold text-base sm:text-lg ${priceBgClass} border border-stone-200/60 shadow-sm`}>
              {item.price} <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-stone-500">ETB</span>
            </div>
            {item.priceNote && (
              <span className="text-[10px] text-amber-600 block mt-0.5 font-medium max-w-[120px] leading-tight" title={item.priceNote}>
                *Note: {item.priceNote}
              </span>
            )}
          </div>
        </div>

        {/* Dot Leader Visual Divider (Physical menu style) */}
        <div className="w-full border-b border-dashed border-stone-200 my-2" />

        {/* Amharic Ingredients / Description */}
        {item.descriptionAm && (
          <p className="text-xs sm:text-[13px] text-stone-600 font-medium leading-relaxed mb-1">
            {item.descriptionAm}
          </p>
        )}

        {/* English Description */}
        {item.descriptionEn && (
          <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed italic mb-3">
            {item.descriptionEn}
          </p>
        )}
      </div>

      {/* Bottom Dietary & Category Tags */}
      <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] mt-auto border-t border-stone-100">
        {category && (
          <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] border ${badgeColorClass}`}>
            {category.nameEn}
          </span>
        )}

        {isFasting && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100/70 text-emerald-800 text-[10px] font-bold border border-emerald-300">
            <Leaf className="w-2.5 h-2.5 text-emerald-600" />
            የፆም / Fasting
          </span>
        )}

        {isFish && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-200">
            <Fish className="w-2.5 h-2.5 text-blue-500" />
            Fish / ቱና
          </span>
        )}

        {item.dietary?.includes('chicken') && (
          <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[10px] font-medium border border-amber-200">
            Chicken / ዶሮ
          </span>
        )}

        {item.dietary?.includes('beef') && (
          <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-[10px] font-medium border border-stone-200">
            Beef / ስጋ
          </span>
        )}
      </div>
    </div>
  );
};
