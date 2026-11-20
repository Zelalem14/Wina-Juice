import React from 'react';
import { extraItems, takeAwayItems } from '../data/menuData';
import { PlusCircle, PackageCheck } from 'lucide-react';

export const ExtraAndTakeawaySection: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ተጨማሪ / Extra Section (Takes 2 cols on lg) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-600 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                <PlusCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-900 font-serif">
                  ተጨማሪ <span className="text-emerald-700 font-sans font-bold">Extra Add-ons</span>
                </h3>
                <p className="text-xs text-stone-500">
                  Custom add-ons and toppings available to complement any dish
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              {extraItems.length} Options
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {extraItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-emerald-50/50 border border-stone-200 hover:border-emerald-300 transition-all"
              >
                <div>
                  <div className="font-bold text-sm text-stone-800">{item.nameAm}</div>
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

        {/* Take Away / ማሸጊያ Section (Takes 1 col on lg) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-red-600 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-red-100">
              <div className="p-2 rounded-xl bg-red-100 text-red-800">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-red-900 font-serif">
                  Take Away <span className="text-stone-700 font-sans font-bold text-base">ማሸጊያ</span>
                </h3>
                <p className="text-xs text-stone-500">
                  Hygienic takeaway packaging
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {takeAwayItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-red-50/50 border border-stone-200 hover:border-red-300 transition-all"
                >
                  <div>
                    <div className="font-bold text-sm text-stone-800">{item.nameAm}</div>
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

          <div className="mt-6 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            💡 <strong>Takeaway Note:</strong> Packaging prices apply per take-out order according to container type as listed on the official menu.
          </div>
        </div>
      </div>
    </section>
  );
};
