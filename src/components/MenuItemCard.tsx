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
  let priceBgClass = 'bg-red-50 text-red-800 border-red-200';

  if (theme === 'green') {
    cardBorderClass = 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-50';
    priceBgClass = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  } else if (theme === 'teal') {
    cardBorderClass = 'border-cyan-200 hover:border-cyan-500 hover:shadow-cyan-50';
    priceBgClass = 'bg-cyan-50 text-cyan-800 border-cyan-200';
  }

  const isFasting = item.dietary?.includes('fasting');
  const isFish = item.dietary?.includes('fish');

  return (
    <div
      className={`bg-white rounded-3xl p-5 sm:p-6 border-2 ${cardBorderClass} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group`}
    >
      <div>
        {/* Top Header: Title, Special Badge, Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            {/* Naturally displayed Amharic & English names */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-emerald-800">
                {item.nameAm}
              </span>
              {item.featured && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                  Special
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-emerald-700 transition-colors tracking-tight mt-0.5">
              {item.nameEn}
            </h3>
          </div>

          {/* Price Badge in ETB */}
          <div className="shrink-0 text-right">
            <div className={`px-3 py-1.5 rounded-2xl font-mono font-extrabold text-base sm:text-lg ${priceBgClass} border shadow-sm`}>
              {item.price} <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-stone-500">ETB</span>
            </div>
            {item.priceNote && (
              <span className="text-[10px] text-amber-600 block mt-1 font-medium max-w-[120px] leading-tight" title={item.priceNote}>
                *{item.priceNote}
              </span>
            )}
          </div>
        </div>

        {/* Dot Leader Visual Divider */}
        <div className="w-full border-b border-dashed border-stone-200 my-2.5" />

        {/* Naturally displayed English & Amharic descriptions */}
        <div className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed mb-4">
          {item.descriptionEn && (
            <p className="text-stone-600 font-normal">
              {item.descriptionEn}
            </p>
          )}

          {item.descriptionAm && (
            <p className="text-stone-800 font-medium text-xs sm:text-[13px]">
              <span className="text-stone-400 font-normal mr-1">•</span>
              {item.descriptionAm}
            </p>
          )}
        </div>
      </div>

      {/* Dietary Tags Bottom Row */}
      <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-1.5 text-[11px] mt-auto">
        {isFasting && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-100/80 text-emerald-800 text-[11px] font-bold border border-emerald-300">
            <Leaf className="w-3 h-3 text-emerald-600" />
            የፆም / Fasting
          </span>
        )}

        {isFish && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-semibold border border-blue-200">
            <Fish className="w-3 h-3 text-blue-500" />
            Fish / አሳ
          </span>
        )}

        {item.dietary?.includes('chicken') && (
          <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 text-[11px] font-medium border border-amber-200">
            Chicken / ዶሮ
          </span>
        )}

        {item.dietary?.includes('beef') && (
          <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 text-stone-700 text-[11px] font-medium border border-stone-200">
            Beef / ስጋ
          </span>
        )}

        {item.dietary?.includes('juice') && (
          <span className="px-2.5 py-0.5 rounded-lg bg-purple-50 text-purple-700 text-[11px] font-medium border border-purple-200">
            100% Fresh
          </span>
        )}
      </div>
    </div>
  );
};
