import React, { useState, useEffect, useRef } from 'react';
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
  const isHomePage = location.pathname === '/';
  const currentBranch = branchContacts.find((b) => b.id === selectedBranch) || branchContacts[0];

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowBranchDropdown(false);
  };

  // 1. Auto-close hamburger menu on navigation / route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // 2. Auto-close hamburger menu when tapping or clicking outside, or on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all duration-300">
      {/* 1. TOP TICKER: 6 Addis Ababa Branches */}
      <div className="bg-emerald-900 text-emerald-100 text-[10px] sm:text-[11px] lg:text-xs py-1.5 px-3 sm:px-4 md:px-6 lg:px-8 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto">
            <span className="font-semibold text-emerald-300 flex items-center gap-1 shrink-0">
              <MapPin className="w-3.5 h-3.5" /> 6 Branches:
            </span>
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 text-stone-200 shrink-0">
              {branchContacts.map((b) => (
                <a
                  key={b.id}
                  href={b.telUri}
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-[10px] sm:text-[11px] lg:text-xs shrink-0"
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
            <span className="text-emerald-200 text-[11px] sm:text-xs font-medium">7:00 AM – 10:00 PM Daily</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-stone-200 group-hover:scale-105 group-active:scale-95 transition-transform duration-300 bg-white">
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
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base font-semibold text-stone-700">
            <Link
              to="/"
              className={`hover:text-emerald-700 transition-all duration-200 py-1 ${
                location.pathname === '/' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`hover:text-emerald-700 transition-all duration-200 py-1 ${
                location.pathname === '/menu' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              Menu (ሜኑ)
            </Link>
            <Link
              to="/about"
              className={`hover:text-emerald-700 transition-all duration-200 py-1 ${
                location.pathname === '/about' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/branches"
              className={`hover:text-emerald-700 transition-all duration-200 py-1 ${
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
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-700 text-white hover:bg-red-800 active:scale-95 transition-all duration-200 shadow-2xs hover:shadow-xs"
                title="Call a Wina Juice Branch"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden lg:inline">{currentBranch.nameEn} ({currentBranch.phone})</span>
                <span className="lg:hidden text-xs sm:text-sm">Call</span>
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

            {/* Three-line Hamburger Menu Button (☰) & Drawer */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-xl text-stone-900 hover:text-emerald-700 active:scale-90 transition-all duration-200 bg-transparent border-0 outline-none shadow-none focus:outline-none focus:ring-0 active:bg-transparent"
                aria-label="Toggle navigation menu"
                title="Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[2.75] text-stone-900 drop-shadow-xs" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[2.75] text-stone-900 drop-shadow-xs" />
                )}
              </button>

              {/* HAMBURGER MENU DRAWER (Contains ONLY About & QR Code) */}
              {mobileMenuOpen && (
                <div
                  ref={menuRef}
                  className={`absolute right-0 top-full mt-2 w-[50vw] sm:w-64 md:w-72 min-w-[200px] max-w-xs sm:max-w-sm rounded-2xl p-2.5 sm:p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50 ${
                    isHomePage
                      ? 'bg-emerald-950/85 backdrop-blur-xl border border-emerald-400/25 shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
                      : 'bg-white/95 backdrop-blur-xl border border-stone-200 shadow-xl'
                  }`}
                >
                  {/* Header Title */}
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider px-1 pb-1 border-b border-white/10">
                    <span className={isHomePage ? 'text-emerald-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-stone-500'}>
                      Menu Options
                    </span>
                    <span className={isHomePage ? 'text-emerald-200/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-stone-500'}>
                      Wina Juice
                    </span>
                  </div>

                  {/* 1. About Section */}
                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between px-2.5 py-2 rounded-xl bg-white text-black hover:bg-stone-100 active:scale-[0.98] transition-all duration-200 group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 flex items-center justify-center shrink-0 bg-transparent text-emerald-700 group-hover:scale-110 transition-transform">
                        <Info className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm text-black transition-colors truncate">
                        About Wina Juice
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 stroke-[2.5] text-stone-500 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </Link>

                  {/* 2. QR Code Section */}
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      onOpenQRCode();
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl bg-white text-black hover:bg-stone-100 active:scale-[0.98] transition-all duration-200 text-left group shadow-sm"
                    title="View & Download Digital QR Code"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 flex items-center justify-center shrink-0 bg-transparent text-emerald-700 group-hover:scale-110 transition-transform">
                        <QrCode className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm text-black transition-colors truncate">
                        Digital QR Code
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 stroke-[2.5] text-stone-500 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
