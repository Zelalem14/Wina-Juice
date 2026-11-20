import React, { useState } from 'react';
import { Phone, Image as ImageIcon, Search, MapPin, X, ChevronDown } from 'lucide-react';
import { branchContacts } from '../data/menuData';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenOriginalMenu: () => void;
  selectedBranch: string;
  setSelectedBranch: (branchId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenOriginalMenu,
  selectedBranch,
  setSelectedBranch,
}) => {
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);
  const currentBranch = branchContacts.find((b) => b.id === selectedBranch) || branchContacts[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      {/* Top Bar with Branch Phone Quick Dial */}
      <div className="bg-emerald-800 text-emerald-50 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="font-semibold text-emerald-200 flex items-center gap-1 shrink-0">
              <MapPin className="w-3.5 h-3.5" /> 6 Branches in Addis Ababa:
            </span>
            <div className="flex items-center gap-3 text-stone-200 shrink-0">
              {branchContacts.map((b) => (
                <a
                  key={b.id}
                  href={b.telUri}
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                  title={`Call ${b.nameEn} Branch (${b.nameAm})`}
                >
                  <span className="text-emerald-300 font-medium">{b.nameAm} / {b.nameEn}:</span>
                  <span className="text-white">{b.phone}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0 pl-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-200">Open Daily • Dine-In & Takeaway</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-500 shadow-inner p-1.5">
              {/* Stylized Wina Juice Logo based on Menu Photo */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                <path d="M 50 12 C 53 6 62 4 66 7 C 64 12 56 16 50 12 Z" fill="#16a34a" />
                <path d="M 46 18 C 48 13 52 11 53 11" stroke="#15803d" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M 28 32 C 22 46 22 68 36 78 C 45 84 55 84 64 78 C 78 68 78 46 72 32 C 67 42 61 58 50 58 C 39 58 33 42 28 32 Z" fill="#15803d" />
                <text x="50" y="52" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">W</text>
              </svg>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-800 font-serif">
                  Wina Juice
                </span>
                <span className="text-base sm:text-lg font-bold text-red-700">
                  ዊና ጁስ
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">
                Digital Menu • 100% Based on Physical Menu
              </p>
            </div>
          </div>

          {/* Search Input for Desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search burgers, pizzas, juices, firfir... (ስጋ, ጁስ, ፒዛ)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-stone-50 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Original Menu Button */}
            <button
              onClick={onOpenOriginalMenu}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 transition-all shadow-sm"
              title="View the physical photographed menu"
            >
              <ImageIcon className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">Original Menu Photo</span>
              <span className="sm:hidden">Photo Menu</span>
            </button>

            {/* Branch Phone Quick Call Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowBranchDropdown(!showBranchDropdown)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-700 text-white hover:bg-red-800 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{currentBranch.nameEn} ({currentBranch.phone})</span>
                <span className="lg:hidden">Call</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              {showBranchDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50">
                  <div className="px-3 py-1.5 border-b border-stone-100 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Select Branch to Call
                  </div>
                  {branchContacts.map((b) => (
                    <a
                      key={b.id}
                      href={b.telUri}
                      onClick={() => {
                        setSelectedBranch(b.id);
                        setShowBranchDropdown(false);
                      }}
                      className="flex items-center justify-between px-3.5 py-2 hover:bg-stone-50 transition-colors text-sm"
                    >
                      <div>
                        <div className="font-semibold text-stone-800">{b.nameEn} ({b.nameAm})</div>
                        <div className="text-xs text-stone-500">{b.location}</div>
                      </div>
                      <span className="font-mono text-xs font-bold text-red-700">{b.phone}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Input for Mobile */}
        <div className="mt-3 md:hidden relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search items or ingredients... (በአማርኛ ወይም English)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-stone-50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
