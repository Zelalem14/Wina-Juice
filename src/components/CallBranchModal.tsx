import React, { useEffect } from 'react';
import { Phone, X, MapPin, Clock } from 'lucide-react';
import { branchContacts } from '../data/menuData';

interface CallBranchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallBranchModal: React.FC<CallBranchModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog / Mobile Bottom Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="call-modal-title"
        className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-stone-200 animate-slide-up"
      >
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-stone-300 rounded-full" />
        </div>

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 flex items-start justify-between bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600/90 text-white flex items-center justify-center shadow-md shrink-0">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 id="call-modal-title" className="text-base sm:text-lg font-bold font-serif leading-tight">
                Call a Branch <span className="text-emerald-300 font-sans text-xs sm:text-sm font-semibold ml-1">ቅርንጫፍ ይደውሉ</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-0.5">
                Select your nearest branch to open your phone dialer:
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close branch call list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Branch List Items */}
        <div className="p-3 sm:p-5 overflow-y-auto space-y-2.5 max-h-[60vh]">
          {branchContacts.map((branch) => (
            <a
              key={branch.id}
              href={branch.telUri}
              onClick={onClose}
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#fbfbf9] hover:bg-emerald-50/70 border border-stone-200/90 hover:border-emerald-300 transition-all shadow-2xs group active:scale-[0.99]"
            >
              {/* Branch Name & Location */}
              <div className="min-w-0 pr-3">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-stone-900 text-sm sm:text-base group-hover:text-emerald-900 transition-colors">
                    {branch.nameEn}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                    {branch.nameAm}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-500 mt-1 truncate">
                  <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate">{branch.location}</span>
                </div>
              </div>

              {/* Call Action Button Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-xs shrink-0 group-hover:shadow-md transition-all">
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span className="font-mono text-xs sm:text-sm font-bold tracking-tight">
                  {branch.phone}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open Daily: 7:00 AM – 10:00 PM</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-stone-200 hover:bg-stone-300 text-stone-800 transition-colors"
          >
            Close (ዝጋ)
          </button>
        </div>
      </div>
    </div>
  );
};
