import React, { useEffect } from 'react';
import { BranchContactSection } from '../components/BranchContactSection';
import { MapPin, Clock, Phone, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BranchesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 pb-20">
      {/* 1. TOP HERO BANNER */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-8 sm:py-14 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            <span>6 Addis Ababa Branches • ስድስት ቅርንጫፎች</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white mb-2 sm:mb-3">
            Find Your Nearest Wina Juice Branch
          </h1>

          <p className="text-emerald-100/90 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed mb-5 sm:mb-6 px-2">
            Serving you fresh tropical juices, fruit smoothies, gourmet burgers, and traditional dishes across Summit, Bole, Piazza, Shola, Adisu Gebeya, and Ras Desta.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-emerald-200 border border-white/15 text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>7:00 AM – 10:00 PM Daily</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-emerald-200 border border-white/15 text-[11px] sm:text-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>Fast Takeaway Orders</span>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 text-stone-950 font-bold hover:bg-emerald-400 transition-colors text-[11px] sm:text-xs"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Browse Menu First (ሜኑ ይመልከቱ)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FULL BRANCH DIRECTORY SECTION (Has id="branches-section") */}
      <BranchContactSection />
    </div>
  );
};
