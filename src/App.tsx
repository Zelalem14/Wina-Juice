import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QRCodeModal } from './components/QRCodeModal';
import { CallBranchModal } from './components/CallBranchModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { BranchesPage } from './pages/BranchesPage';
import { CategoryPage } from './pages/CategoryPage';
import { LanguageProvider } from './context/LanguageContext';
import { branchContacts } from './data/menuData';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [selectedBranch, setSelectedBranch] = useState(branchContacts[0].id);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#fbfbf9] text-stone-800">
          {/* Main Top Navbar */}
          <Navbar
            onOpenQRCode={() => setIsQRModalOpen(true)}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            onOpenCallModal={() => setIsCallModalOpen(true)}
          />

          {/* Page Routing (pb-16 on mobile for bottom navigation bar clearance) */}
          <main className="flex-1 pb-16 md:pb-0">
            <Routes>
              {/* Home Page (First page customers see) */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Menu Page (Complete menu with categories, items, prices, images) */}
              <Route path="/menu" element={<MenuPage />} />

              {/* Dedicated Branches Page (All 6 branches) */}
              <Route path="/branches" element={<BranchesPage />} />

              {/* Dedicated Category Pages */}
              <Route path="/category/:categoryId" element={<CategoryPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile Sticky Bottom Navigation Bar (md:hidden) */}
          <MobileBottomNav
            selectedBranch={selectedBranch}
            onOpenCallModal={() => setIsCallModalOpen(true)}
          />

          {/* Direct Branch Call Modal / Bottom Sheet */}
          <CallBranchModal
            isOpen={isCallModalOpen}
            onClose={() => setIsCallModalOpen(false)}
          />

          {/* QR Code & Printable Table Card Modal */}
          <QRCodeModal
            isOpen={isQRModalOpen}
            onClose={() => setIsQRModalOpen(false)}
          />

          {/* Back to Top Floating Button (Visible only after scrolling down) */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 p-2.5 sm:p-3 rounded-full bg-emerald-700 text-white shadow-xl hover:bg-emerald-800 transition-all hover:-translate-y-1 z-30"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
