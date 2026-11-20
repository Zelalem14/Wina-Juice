import React from 'react';
import { Eye, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenOriginalMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOriginalMenu }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 px-4 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 border border-emerald-600 flex items-center justify-center p-1 text-white font-bold text-lg">
                W
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white font-serif tracking-tight">
                  Wina Juice
                </span>
                <span className="text-lg font-bold text-red-500 ml-2">
                  ዊና ጁስ
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md mb-4">
              Your premier destination for natural fresh juices, handcrafted smoothies, burgers, Italian pizza, traditional Ethiopian favorites, and savory shawarma wraps in Addis Ababa.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Digitized from Official Physical Menu</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
              Popular Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>• Smoothies & Special Juice (ስሙዚ)</li>
              <li>• Seasonal Fresh Juices (ወቅታዊ ጁስ)</li>
              <li>• Burgers & Club Sandwiches (በርገር)</li>
              <li>• Pizza Varieties (ፒዛ)</li>
              <li>• Traditional Dishes (የባህል ምግቦች)</li>
              <li>• Fresh Vegitable Platters (አትክልት)</li>
            </ul>
          </div>

          {/* Actions & Verification */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
              Menu Verification
            </h4>
            <p className="text-xs text-stone-400 mb-3 leading-relaxed">
              Every item, price in ETB, and description on this site is directly copied from the original restaurant menu photograph.
            </p>
            <button
              onClick={onOpenOriginalMenu}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-600 transition-all shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Photo Reference</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Wina Juice (ዊና ጁስ). All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Wina Juice Customers across Addis Ababa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
