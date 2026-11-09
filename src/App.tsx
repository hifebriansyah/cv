import React from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { BookOpen, Printer, Edit3, Sparkles } from 'lucide-react';
import { CvProvider, useCv } from './context/CvContext';
import { BookModeView } from './views/BookModeView';
import { PrintModeView } from './views/PrintModeView';
import { EditModeView } from './views/EditModeView';
import { StorybookCatalogView } from './views/StorybookCatalogView';

const TopNav: React.FC = () => {
  const { pages } = useCv();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
      isActive
        ? 'bg-amber-500 text-stone-950 shadow-sm'
        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
    }`;

  return (
    <header className="no-print h-16 bg-stone-950 border-b border-stone-800 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#F5E6D8] flex items-center justify-center font-bold text-[#1DA1F2] text-lg shadow-xs">
          hf
        </div>
        <div>
          <div className="text-sm font-bold text-white tracking-wide">
            FEBRIANSYAH — CV BOOKLET STUDIO
          </div>
          <div className="text-[11px] text-stone-400">
            {pages.length} A4 Pages · {Math.ceil(pages.length / 8)} A2 Print Sheets · Saddle-Stitch
            Format
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-2">
        <NavLink to="/book" className={navLinkClass}>
          <BookOpen className="w-4 h-4" />
          1. Book Mode (2-Page Spread)
        </NavLink>
        <NavLink to="/print" className={navLinkClass}>
          <Printer className="w-4 h-4" />
          2. Print Mode (A2 2×2)
        </NavLink>
        <NavLink to="/edit" className={navLinkClass}>
          <Edit3 className="w-4 h-4" />
          3. Edit Mode (+4 Pages)
        </NavLink>
        <NavLink to="/storybook" className={navLinkClass}>
          <Sparkles className="w-4 h-4" />
          4. Storybook Components
        </NavLink>
      </nav>
    </header>
  );
};

export const App: React.FC = () => {
  return (
    <CvProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-stone-900">
          <TopNav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/book" replace />} />
              <Route path="/book" element={<BookModeView />} />
              <Route path="/print" element={<PrintModeView />} />
              <Route path="/edit" element={<EditModeView />} />
              <Route path="/storybook" element={<StorybookCatalogView />} />
              <Route path="*" element={<Navigate to="/book" replace />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </CvProvider>
  );
};

export default App;
