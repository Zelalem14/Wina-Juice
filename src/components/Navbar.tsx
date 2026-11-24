import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ChevronDown,
  QrCode,
  Menu,
  X,
  Info,
  ChevronRight
} from 'lucide-react';
import { branchContacts } from '../data/menuData';

interface NavbarProps {
  onOpenQRCode: () => void;
  selectedBranch: string;
  setSelectedBranch: (id: string) => void;
  onOpenCallModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQRCode,
  selectedBranch,
  setSelectedBranch,
  onOpenCallModal,
}) => {
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentBranch = branchContacts.find((b) => b.id === selectedBranch) || branchContacts[0];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowBranchDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
      {/* 1. TOP TICKER: 6 Addis Ababa Branches */}
      <div className="bg-emerald-900 text-emerald-100 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto">
            <span className="font-semibold text-emerald-300 flex items-center gap-1 shrink-0">
              <MapPin className="w-3.5 h-3.5" /> 6 Branches:
            </span>
            <div className="flex items-center gap-2.5 sm:gap-3 text-stone-200 shrink-0">
              {branchContacts.map((b) => (
                <a
                  key={b.id}
                  href={b.telUri}
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-[11px]"
                  title={`Call ${b.nameEn} Branch (${b.nameAm})`}
                >
                  <span className="text-emerald-400 font-bold">{b.nameAm}:</span>
                  <span className="text-white font-mono">{b.phone}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 shrink-0 pl-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-200 text-[11px]">7:00 AM – 10:00 PM Daily</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-stone-200 group-hover:scale-105 transition-transform bg-white">
              <img
                src="/wina-logo.png"
                alt="Wina Juice Official Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-emerald-900 font-serif">
                  Wina Juice
                </span>
                <span className="text-sm sm:text-base font-bold text-red-700">
                  ዊና ጁስ
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium hidden sm:block">
                Fresh Flavors, Made for You
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <Link
              to="/"
              className={`hover:text-emerald-700 transition-colors py-1 ${
                location.pathname === '/' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`hover:text-emerald-700 transition-colors py-1 ${
                location.pathname === '/menu' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              Menu (ሜኑ)
            </Link>
            <Link
              to="/about"
              className={`hover:text-emerald-700 transition-colors py-1 ${
                location.pathname === '/about' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/branches"
              className={`hover:text-emerald-700 transition-colors py-1 ${
                location.pathname === '/branches' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              Branches
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Branch Phone Quick Call Dropdown / Modal Trigger */}
            <div className="relative">
              <button
                onClick={() => {
                  if (onOpenCallModal) {
                    onOpenCallModal();
                  } else {
                    setShowBranchDropdown(!showBranchDropdown);
                  }
                }}
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-700 text-white hover:bg-red-800 transition-all shadow-2xs"
                title="Call a Wina Juice Branch"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden lg:inline">{currentBranch.nameEn} ({currentBranch.phone})</span>
                <span className="lg:hidden text-xs">Call</span>
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80" />
              </button>

              {showBranchDropdown && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50">
                  <div className="px-3.5 py-1.5 border-b border-stone-100 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Direct Call Addis Branch
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
                        <div className="font-bold text-stone-800 text-xs sm:text-sm">{b.nameEn} ({b.nameAm})</div>
                        <div className="text-[11px] text-stone-500">{b.location}</div>
                      </div>
                      <span className="font-mono text-xs font-bold text-red-700">{b.phone}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Three-line Hamburger Menu Button (☰) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-emerald-800 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
              title="Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-stone-800" />
              ) : (
                <Menu className="w-5 h-5 text-stone-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. HAMBURGER MENU DRAWER (Contains ONLY About & QR Code) */}
      {mobileMenuOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-xl mx-auto space-y-2.5">
            {/* Header Title */}
            <div className="flex items-center justify-between text-xs font-bold text-stone-400 uppercase tracking-wider px-1">
              <span>Menu Options • አማራጮች</span>
              <span className="text-[11px] font-normal text-stone-400">Wina Juice</span>
            </div>

            {/* 1. About Section */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:bg-emerald-50 hover:border-emerald-300 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Info className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="font-extrabold text-stone-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                    About Wina Juice <span className="text-xs text-emerald-700 font-sans font-bold ml-1.5">(ስለ እኛ)</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Our restaurant story, 100% natural ingredients, hours & commitment
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>

            {/* 2. QR Code Section */}
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenQRCode();
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:bg-emerald-50 hover:border-emerald-300 transition-all text-left group"
              title="View & Download Digital Menu QR Code"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <QrCode className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="font-extrabold text-stone-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                    Digital Menu QR Code <span className="text-xs text-emerald-700 font-sans font-bold ml-1.5">(QR ኮድ)</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    View & download scannable digital menu QR code
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-lg hidden sm:inline shadow-2xs">
                  View & Download
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
