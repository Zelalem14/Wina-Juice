import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Utensils, MapPin, QrCode, Phone } from 'lucide-react';
import { branchContacts } from '../data/menuData';

interface MobileBottomNavProps {
  onOpenQRCode: () => void;
  selectedBranch: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenQRCode,
  selectedBranch,
}) => {
  const location = useLocation();
  const currentBranch = branchContacts.find((b) => b.id === selectedBranch) || branchContacts[0];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 py-1.5 px-3 shadow-lg flex items-center justify-around safe-bottom"
    >
      {/* 1. Home */}
      <Link
        to="/"
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
          location.pathname === '/'
            ? 'text-emerald-700 font-bold scale-105'
            : 'text-stone-500 hover:text-stone-800'
        }`}
      >
        <Home className={`w-5 h-5 ${location.pathname === '/' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">Home</span>
      </Link>

      {/* 2. Menu */}
      <Link
        to="/menu"
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
          location.pathname === '/menu' || location.pathname.startsWith('/category')
            ? 'text-emerald-700 font-bold scale-105'
            : 'text-stone-500 hover:text-stone-800'
        }`}
      >
        <Utensils className={`w-5 h-5 ${location.pathname === '/menu' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">Menu</span>
      </Link>

      {/* 3. Branches */}
      <Link
        to="/branches"
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
          location.pathname === '/branches'
            ? 'text-emerald-700 font-bold scale-105'
            : 'text-stone-500 hover:text-stone-800'
        }`}
      >
        <MapPin className={`w-5 h-5 ${location.pathname === '/branches' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">Branches</span>
      </Link>

      {/* 4. Table QR */}
      <button
        onClick={onOpenQRCode}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-stone-500 hover:text-stone-800 transition-all"
        title="View Table Stand QR Code"
      >
        <QrCode className="w-5 h-5 text-emerald-600" />
        <span className="text-[10px] mt-0.5">Table QR</span>
      </button>

      {/* 5. Direct Call */}
      <a
        href={currentBranch.telUri}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-red-700 hover:text-red-800 transition-all font-semibold"
        title={`Call ${currentBranch.nameEn} Branch (${currentBranch.phone})`}
      >
        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
          <Phone className="w-3 h-3 text-red-700" />
        </div>
        <span className="text-[10px] mt-0.5">Call</span>
      </a>
    </nav>
  );
};
