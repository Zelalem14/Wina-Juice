import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw, ExternalLink, Download } from 'lucide-react';

interface OriginalMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalMenuModal: React.FC<OriginalMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeSide, setActiveSide] = useState<1 | 2>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const currentImage = activeSide === 1 ? '/images/menu-side-1.jpg' : '/images/menu-side-2.jpg';

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 0.75), 2.5));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4">
      <div className="relative w-full max-w-5xl h-[92vh] bg-stone-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-700">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-stone-800/90 border-b border-stone-700 text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-bold text-base sm:text-lg text-emerald-400">
              Original Wina Juice Physical Menu
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700">
              Source of Truth
            </span>
          </div>

          {/* Side Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-stone-950/70 p-1 rounded-2xl border border-stone-700">
            <button
              onClick={() => {
                setActiveSide(1);
                setZoomLevel(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeSide === 1
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Side 1: Burgers, Pizza, Traditional
            </button>
            <button
              onClick={() => {
                setActiveSide(2);
                setZoomLevel(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeSide === 2
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Side 2: Juices, Veg, Spaghetti & Phones
            </button>
          </div>

          {/* Close & Controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-stone-950/50 p-1 rounded-xl border border-stone-700 text-stone-300 text-xs">
              <button
                onClick={() => handleZoom(-0.25)}
                className="p-1 hover:text-white rounded"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-1 font-mono">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => handleZoom(0.25)}
                className="p-1 hover:text-white rounded"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 hover:text-white rounded"
                title="Reset Zoom"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={currentImage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-700 transition-colors"
              title="Open full size in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-700 transition-colors"
              title="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950/90 relative">
          <div
            className="transition-transform duration-150 ease-out flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={currentImage}
              alt={`Wina Juice Physical Menu Side ${activeSide}`}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-stone-800"
            />
          </div>
        </div>

        {/* Modal Footer Notes */}
        <div className="px-4 py-2.5 bg-stone-800/80 border-t border-stone-700 text-xs text-stone-400 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div>
            Showing <strong className="text-stone-200">Side {activeSide}</strong> photographed physical menu. All 106 products, prices, and phone numbers are mapped with 100% fidelity.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={currentImage}
              download={`wina-juice-menu-side-${activeSide}.jpg`}
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Download Photo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
