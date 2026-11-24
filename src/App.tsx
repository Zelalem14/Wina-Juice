import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QRCodeModal } from './components/QRCodeModal';
import { CallBranchModal } from './components/CallBranchModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { BranchesPage } from './pages/BranchesPage';
import { CategoryPage } from './pages/CategoryPage';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { branchContacts } from './data/menuData';
import { ArrowUp } from 'lucide-react';

function AppContent() {
  const [selectedBranch, setSelectedBranch] = useState(branchContacts[0].id);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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
    <div className={`min-h-screen flex flex-col text-stone-800 ${isHomePage ? 'bg-emerald-950' : 'bg-[#fbfbf9]'}`}>
      {/* Main Top Navbar (Call button on top remains functional) */}
      <Navbar
        onOpenQRCode={() => setIsQRModalOpen(true)}
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        onOpenCallModal={() => setIsCallModalOpen(true)}
      />

      {/* Page Routing (pb-16 on mobile for bottom navigation bar clearance) */}
      <main className={`flex-1 flex flex-col ${isHomePage ? 'pb-12 md:pb-0 bg-emerald-950' : 'pb-16 md:pb-0'}`}>
        <Routes>
          {/* Home Page (Short, clean, focused hero section) */}
          <Route path="/" element={<HomePage />} />

          {/* Dedicated Menu Page (Complete menu with categories, items, prices, images) */}
          <Route path="/menu" element={<MenuPage />} />

          {/* Dedicated About Page (Popular categories, hours, branches & story) */}
          <Route path="/about" element={<AboutPage />} />

          {/* Dedicated Branches Page (All 6 branches) */}
          <Route path="/branches" element={<BranchesPage />} />

          {/* Dedicated Category Pages */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer (Rendered on non-home pages only, keeping home short & clean) */}
      {!isHomePage && <Footer />}

      {/* Mobile Sticky Bottom Navigation Bar (md:hidden) */}
      <MobileBottomNav />

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

      {/* Back to Top Floating Button (Visible only after scrolling down on non-home pages) */}
      {showScrollTop && !isHomePage && (
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
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
