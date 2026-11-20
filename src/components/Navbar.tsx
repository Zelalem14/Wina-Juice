import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, ChevronDown, QrCode } from 'lucide-react';
import { branchContacts } from '../data/menuData';

interface NavbarProps {
  onOpenQRCode: () => void;
  selectedBranch: string;
  setSelectedBranch: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQRCode,
  selectedBranch,
  setSelectedBranch,
}) => {
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);
  const location = useLocation();
  const currentBranch = branchContacts.find((b) => b.id === selectedBranch) || branchContacts[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      {/* Top Ticker: 6 Addis Ababa Branches */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="font-semibold text-emerald-300 flex items-center gap-1 shrink-0">
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
                  <span className="text-emerald-400 font-bold">{b.nameAm} / {b.nameEn}:</span>
                  <span className="text-white font-mono">{b.phone}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 shrink-0 pl-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-200 text-[11px]">Open 7:00 AM – 10:00 PM Daily</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 group-hover:scale-105 transition-transform bg-white">
              <img
                src="/wina-logo.png"
                alt="Wina Juice Official Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-2xl font-extrabold tracking-tight text-emerald-900 font-serif">
                  Wina Juice
                </span>
                <span className="text-base sm:text-lg font-bold text-red-700">
                  ዊና ጁስ
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium hidden sm:block">
                Fresh Flavors, Made for You
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <Link
              to="/"
              className={`hover:text-emerald-700 transition-colors ${
                location.pathname === '/' ? 'text-emerald-700 font-bold' : ''
              }`}
            >
              Home
            </Link>
            <a
              href="/#categories"
              className="hover:text-emerald-700 transition-colors"
            >
              Menu Categories
            </a>
            <a
              href="#branches-section"
              className="hover:text-emerald-700 transition-colors"
            >
              Branches
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Table QR Button */}
            <button
              onClick={onOpenQRCode}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 transition-all shadow-sm"
              title="View & Download Table QR Code"
            >
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">Table QR</span>
            </button>

            {/* Branch Phone Quick Call Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowBranchDropdown(!showBranchDropdown)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-700 text-white hover:bg-red-800 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{currentBranch.nameEn} ({currentBranch.phone})</span>
                <span className="lg:hidden">Call</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              {showBranchDropdown && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50">
                  <div className="px-3.5 py-1.5 border-b border-stone-100 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Select Branch to Direct Call
                  </div>
                  {branchContacts.map((b) => (
                    <a
                      key={b.id}
                      href={b.telUri}
                      onClick={() => {
                        setSelectedBranch(b.id);
                        setShowBranchDropdown(false);
                      }}
                      className="flex items-center justify-between px-3.5 py-2.5 hover:bg-stone-50 transition-colors text-sm"
                    >
                      <div>
                        <div className="font-bold text-stone-800">{b.nameEn} ({b.nameAm})</div>
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
      </div>
    </header>
  );
};
