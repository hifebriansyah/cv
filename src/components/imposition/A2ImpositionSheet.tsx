import React from 'react';
import { Scissors } from 'lucide-react';
import { CvPageData } from '../../types/cv';
import { CvPageRenderer } from '../pages/CvPageRenderer';
import { getDisplayedFooterNumber } from '../../utils/imposition';

export interface A2ImpositionSheetProps {
  sheetTitle: string;
  fileName: string;
  side: 'front' | 'back';
  quadrants: {
    topLeft: number | null;     // 1-based CV page number (1..N)
    topRight: number | null;
    bottomLeft: number | null;
    bottomRight: number | null;
    isBottomHalfDuplicate?: boolean;
  };
  pages: CvPageData[];
  showGuides?: boolean;
}

/**
 * Renders a single A2 Imposition Sheet (1588px x 2246px, representing 4960 x 7016 px at print scale),
 * placing 4 A4 pages in a 2x2 grid ready for horizontal cutting and center saddle-stitch folding.
 */
export const A2ImpositionSheet: React.FC<A2ImpositionSheetProps> = ({
  sheetTitle,
  fileName,
  quadrants,
  pages,
  showGuides = true,
}) => {
  const renderSlot = (oneBasedIndex: number | null, slotLabel: string) => {
    if (oneBasedIndex === null || !pages[oneBasedIndex - 1]) {
      return (
        <div className="a4-page bg-stone-100 border border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400">
          <div className="text-lg font-semibold">Blank / Unused Half-A2 Slot</div>
          <div className="text-xs mt-1">({slotLabel} — Wasted bottom half for 4-page signature)</div>
        </div>
      );
    }

    const pageIndex = oneBasedIndex - 1;
    const pageData = pages[pageIndex];
    const footerNum = getDisplayedFooterNumber(pages, pageIndex);

    return (
      <div className="relative a4-page">
        <CvPageRenderer page={pageData} footerPageNumber={footerNum} />
        {showGuides && (
          <div className="no-print absolute top-3 left-3 z-30 px-2.5 py-1 rounded-md bg-stone-900/75 text-white text-[11px] font-mono backdrop-blur-xs">
            cv-{oneBasedIndex} {footerNum !== null ? `(p.${footerNum})` : ''}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Metadata Header above A2 Sheet (hidden when printing) */}
      <div className="no-print w-full flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-sm font-bold border border-amber-500/30">
            {fileName}
          </span>
          <span className="text-stone-200 font-semibold text-base">{sheetTitle}</span>
          {quadrants.isBottomHalfDuplicate && (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/30">
              Bottom Half Duplicated (2x Copy Print Saver)
            </span>
          )}
        </div>
        <div className="text-xs text-stone-400 font-mono">
          Top: [cv-{quadrants.topLeft ?? '—'}, cv-{quadrants.topRight ?? '—'}] · Bottom: [cv-
          {quadrants.bottomLeft ?? '—'}, cv-{quadrants.bottomRight ?? '—'}]
        </div>
      </div>

      {/* Physical A2 2x2 Grid */}
      <div className="a2-sheet shadow-2xl ring-1 ring-stone-700/60 relative">
        {renderSlot(quadrants.topLeft, 'Top-Left')}
        {renderSlot(quadrants.topRight, 'Top-Right')}
        {renderSlot(quadrants.bottomLeft, 'Bottom-Left')}
        {renderSlot(quadrants.bottomRight, 'Bottom-Right')}

        {/* Horizontal Cut Line & Vertical Center Fold Line Guides */}
        {showGuides && (
          <>
            {/* Horizontal Cut Line across center (y = 1123px) */}
            <div className="no-print absolute top-[1123px] left-0 right-0 border-t-2 border-dashed border-rose-500/80 z-40 pointer-events-none flex items-center justify-between px-4">
              <span className=" -mt-3 bg-rose-600 text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 shadow">
                <Scissors className="w-3 h-3" /> CUT HORIZONTALLY INTO TWO A3 SPREADS
              </span>
              <span className="-mt-3 bg-rose-600 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow">
                CUT LINE
              </span>
            </div>

            {/* Vertical Fold Line down center (x = 794px) */}
            <div className="no-print absolute top-0 bottom-0 left-[794px] border-l-2 border-dashed border-sky-500/75 z-40 pointer-events-none flex flex-col justify-between py-4 items-center">
              <span className="bg-sky-600 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow">
                CENTER FOLD & STAPLE (SADDLE-STITCH)
              </span>
              <span className="bg-sky-600 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow">
                FOLD LINE
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
