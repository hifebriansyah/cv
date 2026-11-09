import React, { useState, useEffect, useMemo } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  BookOpen,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { useCv } from '../context/CvContext';
import { computeBookSpreads, getDisplayedFooterNumber } from '../utils/imposition';
import { CvPageRenderer } from '../components/pages/CvPageRenderer';

export const BookModeView: React.FC = () => {
  const { pages } = useCv();
  const spreads = useMemo(() => computeBookSpreads(pages), [pages]);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [zoom, setZoom] = useState(0.68);

  // Clamp spreadIndex if page count shrinks
  useEffect(() => {
    if (spreadIndex >= spreads.length) {
      setSpreadIndex(Math.max(0, spreads.length - 1));
    }
  }, [spreads.length, spreadIndex]);

  // Keyboard arrow navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setSpreadIndex((s) => Math.min(spreads.length - 1, s + 1));
      } else if (e.key === 'ArrowLeft') {
        setSpreadIndex((s) => Math.max(0, s - 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [spreads.length]);

  const currentSpread = spreads[spreadIndex] || [null, null];
  const [leftPage, rightPage] = currentSpread;

  const leftIndex = leftPage ? pages.findIndex((p) => p.id === leftPage.id) : -1;
  const rightIndex = rightPage ? pages.findIndex((p) => p.id === rightPage.id) : -1;

  // Jump from TOC item (content page 1..N) to the spread containing that page
  const handleJumpToContentPage = (contentPageNum: number) => {
    // Content page 1 is cv-4 (array index 3)
    const targetArrayIdx = contentPageNum + 2;
    const targetPage = pages[targetArrayIdx];
    if (!targetPage) return;
    const foundSpread = spreads.findIndex(
      ([l, r]) => l?.id === targetPage.id || r?.id === targetPage.id
    );
    if (foundSpread !== -1) {
      setSpreadIndex(foundSpread);
    }
  };

  const getSpreadLabel = (idx: number) => {
    const [l, r] = spreads[idx];
    if (!l && r) return `Front Cover (cv-1)`;
    if (l && !r) return `Back Cover (cv-${pages.length})`;
    const lIdx = l ? pages.findIndex((p) => p.id === l.id) + 1 : '';
    const rIdx = r ? pages.findIndex((p) => p.id === r.id) + 1 : '';
    const lFoot = l ? getDisplayedFooterNumber(pages, Number(lIdx) - 1) : null;
    const rFoot = r ? getDisplayedFooterNumber(pages, Number(rIdx) - 1) : null;
    const footLabel =
      lFoot !== null || rFoot !== null
        ? ` · Page ${lFoot ?? '—'}–${rFoot ?? '—'}`
        : '';
    return `Spread ${idx} (cv-${lIdx} | cv-${rIdx}${footLabel})`;
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-64px)] bg-stone-900 text-stone-100 pb-12">
      {/* Secondary Reader Toolbar */}
      <div className="w-full bg-stone-800/80 border-b border-stone-700/80 px-6 py-3 flex flex-wrap items-center justify-between gap-4 sticky top-16 z-30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-stone-200">
            {getSpreadLabel(spreadIndex)}
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-stone-700 text-stone-300 font-mono">
            {pages.length} Total A4 Pages ({pages.length / 8} A2 Sheets)
          </span>
        </div>

        {/* Spread Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSpreadIndex(0)}
            disabled={spreadIndex === 0}
            className="p-1.5 rounded-lg bg-stone-700/70 hover:bg-stone-600 disabled:opacity-40 transition-colors"
            title="First Spread (Cover)"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setSpreadIndex((s) => Math.max(0, s - 1))}
            disabled={spreadIndex === 0}
            className="px-3 py-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 disabled:opacity-40 flex items-center gap-1 text-xs font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Prev Spread
          </button>

          <select
            value={spreadIndex}
            onChange={(e) => setSpreadIndex(Number(e.target.value))}
            className="bg-stone-900 border border-stone-700 rounded-lg px-3 py-1.5 text-xs text-stone-200 font-medium outline-none focus:border-amber-400"
          >
            {spreads.map((_, idx) => (
              <option key={idx} value={idx}>
                {getSpreadLabel(idx)}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => setSpreadIndex((s) => Math.min(spreads.length - 1, s + 1))}
            disabled={spreadIndex === spreads.length - 1}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 disabled:opacity-40 flex items-center gap-1 text-xs font-bold transition-colors"
          >
            Next Spread <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setSpreadIndex(spreads.length - 1)}
            disabled={spreadIndex === spreads.length - 1}
            className="p-1.5 rounded-lg bg-stone-700/70 hover:bg-stone-600 disabled:opacity-40 transition-colors"
            title="Last Spread (Back Cover)"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.4, Number((z - 0.08).toFixed(2))))}
            className="p-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono w-12 text-center text-stone-300">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.15, Number((z + 0.08).toFixed(2))))}
            className="p-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Page Side-by-Side Booklet Viewport */}
      <div className="flex-1 w-full flex items-center justify-center overflow-auto py-8 px-4">
        <div
          style={{
            width: `${1588 * zoom}px`,
            height: `${1123 * zoom}px`,
          }}
          className="relative transition-all duration-200 flex items-center justify-center"
        >
          <div
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              width: '1588px',
              height: '1123px',
            }}
            className="absolute top-0 left-0 flex shadow-2xl rounded-xs"
          >
            {/* Left Side of Open Booklet */}
            <div className="w-[794px] h-[1123px] relative">
              {leftPage ? (
                <>
                  <CvPageRenderer
                    page={leftPage}
                    footerPageNumber={getDisplayedFooterNumber(pages, leftIndex)}
                    onNavigateToContentPage={handleJumpToContentPage}
                  />
                  {/* Inner spine right-edge shading */}
                  <div
                    className="absolute top-0 bottom-0 right-0 w-8 pointer-events-none z-30"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.09))',
                    }}
                  />
                </>
              ) : (
                <div className="w-full h-full bg-stone-950/40 border border-dashed border-stone-800 flex items-center justify-center text-stone-600 text-sm font-mono">
                  Closed Booklet Left Side (Front Cover is on Right)
                </div>
              )}
            </div>

            {/* Center Saddle-Stitch Spine Crease */}
            <div className="w-[2px] h-[1123px] bg-stone-400/60 z-40 shrink-0" />

            {/* Right Side of Open Booklet */}
            <div className="w-[794px] h-[1123px] relative">
              {rightPage ? (
                <>
                  <CvPageRenderer
                    page={rightPage}
                    footerPageNumber={getDisplayedFooterNumber(pages, rightIndex)}
                    onNavigateToContentPage={handleJumpToContentPage}
                  />
                  {/* Inner spine left-edge shading */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none z-30"
                    style={{
                      background:
                        'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.09))',
                    }}
                  />
                </>
              ) : (
                <div className="w-full h-full bg-stone-950/40 border border-dashed border-stone-800 flex items-center justify-center text-stone-600 text-sm font-mono">
                  Closed Booklet Right Side (Back Cover is on Left)
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Strip of All Spreads */}
      <div className="w-full max-w-6xl px-6">
        <div className="flex items-center gap-2 overflow-x-auto py-2 px-2 bg-stone-800/60 rounded-xl border border-stone-700/70">
          {spreads.map(([l, r], idx) => {
            const lIdx = l ? pages.findIndex((p) => p.id === l.id) + 1 : '—';
            const rIdx = r ? pages.findIndex((p) => p.id === r.id) + 1 : '—';
            const active = idx === spreadIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSpreadIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all ${
                  active
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'bg-stone-900/80 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
                }`}
              >
                [{lIdx} | {rIdx}]
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
