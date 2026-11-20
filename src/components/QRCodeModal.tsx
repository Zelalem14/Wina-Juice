import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, Download, Printer, Check, Copy, Sparkles, Smartphone, ExternalLink } from 'lucide-react';
import { branchContacts } from '../data/menuData';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  // Determine default public deployed URL
  const defaultUrl = 'https://wina-juice.vercel.app';
  const [targetUrl, setTargetUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      if (origin && !origin.includes('localhost') && !origin.includes('127.0.0.1') && !origin.includes('192.168.')) {
        return origin;
      }
    }
    return defaultUrl;
  });

  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'qr-only' | 'table-card'>('table-card');
  const printRef = useRef<HTMLDivElement>(null);

  // Generate QR Code data URL whenever targetUrl changes
  useEffect(() => {
    if (!targetUrl) return;

    QRCode.toDataURL(targetUrl, {
      width: 1200,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#14532d', // Wina signature deep forest green
        light: '#ffffff'
      }
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Failed to generate QR code:', err));
  }, [targetUrl]);

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPNG = async (resolution: number = 2048) => {
    try {
      const highResUrl = await QRCode.toDataURL(targetUrl, {
        width: resolution,
        margin: 3,
        errorCorrectionLevel: 'H',
        color: {
          dark: '#14532d',
          light: '#ffffff'
        }
      });

      const link = document.createElement('a');
      link.download = `wina-juice-menu-qr-${resolution}px.png`;
      link.href = highResUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-5 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto max-h-[95vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                Wina Juice Digital Menu QR Code
              </h3>
              <p className="text-xs text-stone-500">
                Print-ready scannable QR code & table tent cards
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-xl hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Target Permanent URL Input */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Target Public Menu Website URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://wina-juice.vercel.app"
                className="flex-1 px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              />
              <button
                onClick={handleCopyUrl}
                className="px-3.5 py-2 text-xs font-bold bg-white text-stone-700 border border-stone-300 rounded-xl hover:bg-stone-100 transition-colors flex items-center gap-1.5 shrink-0"
                title="Copy link to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-500 hover:text-emerald-700 rounded-xl hover:bg-stone-200/60 transition-colors"
                title="Open live website in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-stone-500 mt-2">
              ✅ Points directly to your live public Vercel production domain. Works on any iPhone & Android camera.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setViewMode('table-card')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'table-card'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Printable Table Card
            </button>
            <button
              onClick={() => setViewMode('qr-only')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'qr-only'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              QR Code Only
            </button>
          </div>

          {/* Preview Container */}
          <div className="flex justify-center">
            {viewMode === 'table-card' ? (
              /* Printable Branded Table Tent Card */
              <div
                ref={printRef}
                id="printable-card"
                className="w-full max-w-sm bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white p-6 rounded-3xl shadow-xl border-4 border-emerald-600 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Decorative Top Leaf */}
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center p-2 mb-3 shadow-inner">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M 50 12 C 53 6 62 4 66 7 C 64 12 56 16 50 12 Z" fill="#4ade80" />
                    <path d="M 28 32 C 22 46 22 68 36 78 C 45 84 55 84 64 78 C 78 68 78 46 72 32 C 67 42 61 58 50 58 C 39 58 33 42 28 32 Z" fill="#22c55e" />
                    <text x="50" y="52" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">W</text>
                  </svg>
                </div>

                <h4 className="text-2xl font-extrabold font-serif text-white tracking-tight">
                  Wina Juice <span className="text-red-400">|</span> <span className="text-emerald-300">ዊና ጁስ</span>
                </h4>
                <p className="text-xs text-emerald-200 mt-1 font-medium">
                  Scan to View Digital Menu • በስልክዎ ስካን ያድርጉ
                </p>

                {/* QR Code Container with High-Contrast White Background */}
                <div className="bg-white p-3.5 rounded-2xl shadow-2xl my-4 border-2 border-emerald-400">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="Wina Juice Menu QR Code"
                      className="w-48 h-48 object-contain rounded-lg"
                    />
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center text-xs text-stone-400">
                      Generating...
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-emerald-100 font-semibold mb-3 flex items-center gap-1.5 justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                  <span>Fresh Juices • Burgers • Pizza • Traditional</span>
                </div>

                {/* 6 Branches Quick Phone Numbers */}
                <div className="w-full pt-3 border-t border-emerald-700/60 text-[10px] text-emerald-200/90 grid grid-cols-2 gap-x-2 gap-y-1 text-left">
                  {branchContacts.map((b) => (
                    <div key={b.id} className="truncate">
                      <span className="font-bold text-white">{b.nameAm}:</span> {b.phone}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* QR Code Only Display */
              <div className="bg-white p-6 rounded-3xl shadow-xl border-2 border-stone-200 flex flex-col items-center">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="Wina Juice QR Code"
                    className="w-64 h-64 object-contain rounded-xl"
                  />
                ) : (
                  <div className="w-64 h-64 flex items-center justify-center text-stone-400">
                    Generating...
                  </div>
                )}
                <span className="text-xs text-stone-500 font-mono mt-3 text-center truncate max-w-xs">
                  {targetUrl}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-500">
            High-DPI 2048x2048 PNG &bull; Crisp error-correction Level H
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDownloadPNG(2048)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-all flex items-center gap-1.5 shadow-sm"
              title="Download high-resolution 2048px PNG file"
            >
              <Download className="w-4 h-4" />
              <span>Download PNG (2048px)</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-stone-800 border border-stone-300 hover:bg-stone-100 transition-all flex items-center gap-1.5 shadow-sm"
              title="Print table card"
            >
              <Printer className="w-4 h-4" />
              <span>Print Table Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
