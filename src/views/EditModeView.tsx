import React, { useState, useRef } from 'react';
import {
  PlusCircle,
  Trash2,
  Download,
  Upload,
  RotateCcw,
  Edit3,
  Layers,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useCv } from '../context/CvContext';
import { CvPageRenderer } from '../components/pages/CvPageRenderer';
import { getDisplayedFooterNumber } from '../utils/imposition';

export const EditModeView: React.FC = () => {
  const {
    pages,
    updatePage,
    addFourPagesBlock,
    removeLastFourPagesBlock,
    resetToDefault,
    exportJsonData,
    importJsonData,
    canRemoveFourPages,
    customBlocksAddedCount,
  } = useCv();

  const [selectedPageIdx, setSelectedPageIdx] = useState<number>(3); // Start on cv-4 (Page 1: Profile)
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const safeIdx = Math.min(selectedPageIdx, pages.length - 1);
  const activePage = pages[safeIdx];
  const activeFooterNum = getDisplayedFooterNumber(pages, safeIdx);

  const handleAddFourPages = () => {
    const newFirstIdx = pages.length - 3; // Index where the 4 new pages are inserted
    addFourPagesBlock();
    setSelectedPageIdx(newFirstIdx);
    setBannerMsg(
      `Added 1 signature block (+4 A4 pages). Total booklet is now ${
        pages.length + 4
      } pages (${Math.ceil((pages.length + 4) / 8)} A2 sheets).`
    );
  };

  const handleRemoveFourPages = () => {
    if (!canRemoveFourPages) return;
    removeLastFourPagesBlock();
    setSelectedPageIdx((prev) => Math.min(prev, pages.length - 5));
    setBannerMsg(
      `Removed last 4-page signature block. Total booklet is now ${pages.length - 4} pages.`
    );
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const ok = importJsonData(reader.result);
        setBannerMsg(
          ok
            ? 'Imported CV booklet JSON successfully!'
            : 'Invalid JSON file (page count must be a multiple of 4).'
        );
      }
    };
    reader.readAsText(file);
  };

  const wastedBottomHalf = (pages.length % 8) === 4;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-stone-900 text-stone-100 flex flex-col">
      {/* Top Action Bar */}
      <div className="bg-stone-800/90 border-b border-stone-700 px-6 py-3.5 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                Edit Mode — Live Inline Text & Asset Editor
                <span className="px-2 py-0.5 rounded bg-stone-700 text-amber-300 font-mono text-xs">
                  {pages.length} A4 Pages ({customBlocksAddedCount} Added 4-Page Blocks)
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Click any text on the canvas to edit inline, or click any placeholder box to upload
                an image. Adding pages strictly inserts 4 A4 pages at once (1 folded A3 signature).
              </p>
            </div>
          </div>

          {/* 4-Page Add / Remove & Persistence Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleAddFourPages}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              + Add 4 Pages (1 Folded A3 Strip)
            </button>

            {canRemoveFourPages && (
              <button
                type="button"
                onClick={handleRemoveFourPages}
                className="px-3 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Remove Last 4 Pages
              </button>
            )}

            <button
              type="button"
              onClick={exportJsonData}
              className="px-3 py-2 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs font-medium flex items-center gap-1.5"
              title="Download CV Booklet JSON Backup"
            >
              <Download className="w-3.5 h-3.5" />
              Export JSON
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-2 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs font-medium flex items-center gap-1.5"
              title="Import CV Booklet JSON Backup"
            >
              <Upload className="w-3.5 h-3.5" />
              Import JSON
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              onChange={handleImportFile}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => {
                resetToDefault();
                setSelectedPageIdx(3);
                setBannerMsg('Reset to default 32-page CV booklet.');
              }}
              className="px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-300 text-xs font-medium flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset (32p)
            </button>
          </div>
        </div>

        {/* Status / A2 Usage Notification Banner */}
        <div className="max-w-7xl mx-auto mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-stone-300">
            <Layers className="w-4 h-4 text-sky-400 shrink-0" />
            {wastedBottomHalf ? (
              <span>
                <strong className="text-amber-300">A2 Sheet Status ({pages.length} pages):</strong>{' '}
                Uses {Math.floor(pages.length / 8)} full A2 sheets + top half of Sheet{' '}
                <code className="text-amber-300">
                  {String.fromCharCode(97 + Math.floor(pages.length / 8))}1 /{' '}
                  {String.fromCharCode(97 + Math.floor(pages.length / 8))}2
                </code>{' '}
                (bottom half is unused unless you add 4 more pages or enable 2x copy duplication in
                Print Mode).
              </span>
            ) : (
              <span>
                <strong className="text-emerald-400">
                  A2 Sheet Status ({pages.length} pages):
                </strong>{' '}
                Fills {pages.length / 8} A2 sheets (front & back) completely with zero wasted half-sheets!
              </span>
            )}
          </div>

          {bannerMsg && (
            <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>{bannerMsg}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Workspace: Left Page List Sidebar + Right Editable A4 Canvas */}
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-6 p-6">
        {/* Left Sidebar: All Pages Grouped by 4-Page Signatures */}
        <div className="bg-stone-800/70 border border-stone-700/80 rounded-2xl p-4 flex flex-col max-h-[calc(100vh-200px)] sticky top-40">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center justify-between">
            <span>Booklet Pages (1–{pages.length})</span>
            <span className="font-mono text-[11px] text-amber-400">
              {pages.length / 4} × 4p Strips
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
            {pages.map((p, idx) => {
              const fNum = getDisplayedFooterNumber(pages, idx);
              const isSelected = idx === safeIdx;
              const isCustom = p.kind === 'custom-section';

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPageIdx(idx)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold shadow'
                      : 'bg-stone-900/60 hover:bg-stone-700/70 text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-stone-950/20 text-stone-950' : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      cv-{idx + 1}
                    </span>
                    <span className="truncate">
                      {p.title ||
                        p.cursiveHero ||
                        (p.kind === 'profile'
                          ? 'PROFILE & SKILLS'
                          : p.kind === 'cover-back'
                          ? 'Back Cover'
                          : p.kind)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {isCustom && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                          isSelected
                            ? 'bg-stone-950/20 text-stone-950'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        +4p
                      </span>
                    )}
                    {fNum !== null && (
                      <span
                        className={`text-[10px] font-mono ${
                          isSelected ? 'text-stone-900' : 'text-stone-400'
                        }`}
                      >
                        p.{fNum}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Canvas: Live Editable A4 Page */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[794px] mb-3 flex items-center justify-between text-xs text-stone-400 px-1">
            <span>
              Editing <strong className="text-stone-200">cv-{safeIdx + 1}</strong>{' '}
              {activeFooterNum !== null ? `(Footer Page ${activeFooterNum})` : '(Unnumbered Spread)'}
            </span>
            <span className="flex items-center gap-1 text-amber-400">
              <AlertCircle className="w-3.5 h-3.5" />
              Click any text to type · Click any placeholder box to upload image
            </span>
          </div>

          <div className="shadow-2xl ring-2 ring-amber-500/40 rounded-xs overflow-hidden">
            {activePage && (
              <CvPageRenderer
                page={activePage}
                footerPageNumber={activeFooterNum}
                editable={true}
                onUpdatePage={(updated) => updatePage(safeIdx, updated)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
