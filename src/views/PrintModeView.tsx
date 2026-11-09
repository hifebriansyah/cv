import React, { useState, useMemo } from 'react';
import { Printer, Scissors, Layers, Copy, Eye } from 'lucide-react';
import { useCv } from '../context/CvContext';
import { computeA2Imposition } from '../utils/imposition';
import { A2ImpositionSheet } from '../components/imposition/A2ImpositionSheet';

export const PrintModeView: React.FC = () => {
  const { pages } = useCv();
  const [duplicateHalfSheet, setDuplicateHalfSheet] = useState(false);
  const [showGuides, setShowGuides] = useState(true);
  const [selectedFileFilter, setSelectedFileFilter] = useState<string>('all');
  const [previewScale, setPreviewScale] = useState(0.42);

  const impositionPairs = useMemo(
    () => computeA2Imposition(pages.length, duplicateHalfSheet),
    [pages.length, duplicateHalfSheet]
  );

  const hasHalfUsedLastSheet = pages.length % 8 === 4;

  // Flatten into individual A2 printable sides (a1.png, a2.png, b1.png, b2.png, ...)
  const allSides = useMemo(() => {
    const list: {
      sheetNumber: number;
      fileName: string;
      sheetTitle: string;
      side: 'front' | 'back';
      quadrants: {
        topLeft: number | null;
        topRight: number | null;
        bottomLeft: number | null;
        bottomRight: number | null;
        isBottomHalfDuplicate?: boolean;
      };
    }[] = [];

    impositionPairs.forEach((pair, idx) => {
      list.push({
        sheetNumber: idx + 1,
        fileName: pair.frontFile,
        sheetTitle: `Paper ${idx + 1} Front (${pair.frontFile})`,
        side: 'front',
        quadrants: pair.front,
      });
      list.push({
        sheetNumber: idx + 1,
        fileName: pair.backFile,
        sheetTitle: `Paper ${idx + 1} Back (${pair.backFile})`,
        side: 'back',
        quadrants: pair.back,
      });
    });

    return list;
  }, [impositionPairs]);

  const visibleSides =
    selectedFileFilter === 'all'
      ? allSides
      : allSides.filter((s) => s.fileName === selectedFileFilter);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 pb-20">
      {/* Print Mode Controls Header (hidden during window.print()) */}
      <div className="no-print bg-stone-800/90 border-b border-stone-700 px-6 py-4 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              A2 Saddle-Stitch Print Imposition ({pages.length} A4 Pages →{' '}
              {impositionPairs.length} A2 Sheets / {allSides.length} Print Files)
            </h1>
            <p className="text-xs text-stone-400 mt-0.5">
              Each A2 sheet holds 4 A4 pages per side (8 pages front & back). After printing, cut
              horizontally in half into two A3 spreads, stack in order, fold down the center, and
              staple.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter by specific A2 side (a1, a2, b1, b2, ...) */}
            <select
              value={selectedFileFilter}
              onChange={(e) => setSelectedFileFilter(e.target.value)}
              className="bg-stone-900 border border-stone-700 rounded-lg px-3 py-1.5 text-xs font-mono text-stone-200"
            >
              <option value="all">Show All {allSides.length} Sides (a1..)</option>
              {allSides.map((s) => (
                <option key={s.fileName} value={s.fileName}>
                  {s.sheetTitle}
                </option>
              ))}
            </select>

            {/* Toggle Cut/Fold Guides */}
            <button
              type="button"
              onClick={() => setShowGuides((g) => !g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors ${
                showGuides
                  ? 'bg-sky-500/20 border-sky-500/50 text-sky-300'
                  : 'bg-stone-900 border-stone-700 text-stone-400'
              }`}
            >
              <Scissors className="w-3.5 h-3.5" />
              {showGuides ? 'Guides On' : 'Guides Off'}
            </button>

            {/* Toggle Duplicating Bottom Half when N % 8 === 4 */}
            {hasHalfUsedLastSheet && (
              <button
                type="button"
                onClick={() => setDuplicateHalfSheet((d) => !d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors ${
                  duplicateHalfSheet
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : 'bg-stone-900 border-stone-700 text-stone-300'
                }`}
              >
                <Copy className="w-3.5 h-3.5" />
                {duplicateHalfSheet
                  ? 'Bottom Half: Duplicated (Zero Waste)'
                  : 'Bottom Half: Blank (Wasted)'}
              </button>
            )}

            {/* Preview Scale Slider */}
            <div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-700">
              <Eye className="w-3.5 h-3.5 text-stone-400" />
              <input
                type="range"
                min={0.25}
                max={0.75}
                step={0.03}
                value={previewScale}
                onChange={(e) => setPreviewScale(Number(e.target.value))}
                className="w-20 accent-amber-400"
              />
              <span className="text-xs font-mono text-stone-300">
                {Math.round(previewScale * 100)}%
              </span>
            </div>

            {/* Trigger Browser Print / Save A2 PDF */}
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print / Export A2 Sheets
            </button>
          </div>
        </div>
      </div>

      {/* Imposition Mapping Summary Table (Hidden on physical print) */}
      <div className="no-print max-w-7xl mx-auto px-6 pt-6">
        <div className="bg-stone-800/60 border border-stone-700/80 rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-800 border-b border-stone-700 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
              A2 Imposition Layout Schedule (2×2 Grid per Side)
            </span>
            <span className="text-[11px] font-mono text-stone-400">
              Formula: Front Top [N-4s, 1+4s] · Bottom [N-4s-2, 3+4s] | Back Top [2+4s, N-4s-1] ·
              Bottom [4+4s, N-4s-3]
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-stone-900/60 text-stone-400 border-b border-stone-700/60">
                <tr>
                  <th className="py-2 px-4">A2 Sheet</th>
                  <th className="py-2 px-4">File</th>
                  <th className="py-2 px-4">Top-Left</th>
                  <th className="py-2 px-4">Top-Right</th>
                  <th className="py-2 px-4">Bottom-Left</th>
                  <th className="py-2 px-4">Bottom-Right</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700/50">
                {allSides.map((s) => (
                  <tr
                    key={s.fileName}
                    onClick={() =>
                      setSelectedFileFilter((prev) =>
                        prev === s.fileName ? 'all' : s.fileName
                      )
                    }
                    className={`cursor-pointer hover:bg-stone-700/40 transition-colors ${
                      selectedFileFilter === s.fileName ? 'bg-amber-500/15 text-amber-200' : ''
                    }`}
                  >
                    <td className="py-2 px-4 font-sans font-medium">
                      Paper {s.sheetNumber} {s.side === 'front' ? 'Front' : 'Back'}
                    </td>
                    <td className="py-2 px-4 text-amber-400 font-bold">{s.fileName}</td>
                    <td className="py-2 px-4">
                      {s.quadrants.topLeft ? `cv-${s.quadrants.topLeft}` : 'BLANK'}
                    </td>
                    <td className="py-2 px-4">
                      {s.quadrants.topRight ? `cv-${s.quadrants.topRight}` : 'BLANK'}
                    </td>
                    <td className="py-2 px-4">
                      {s.quadrants.bottomLeft ? `cv-${s.quadrants.bottomLeft}` : 'BLANK (Wasted)'}
                    </td>
                    <td className="py-2 px-4">
                      {s.quadrants.bottomRight ? `cv-${s.quadrants.bottomRight}` : 'BLANK (Wasted)'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Rendered A2 Sheets */}
      <div className="max-w-7xl mx-auto px-6 pt-8 space-y-12 flex flex-col items-center">
        {visibleSides.map((sideItem) => (
          <div
            key={sideItem.fileName}
            className="print-sheet-wrapper flex flex-col items-center"
            style={{
              width: `${1588 * previewScale}px`,
              height: `${2246 * previewScale + 44}px`,
            }}
          >
            <div
              style={{
                transform: `scale(${previewScale})`,
                transformOrigin: 'top center',
              }}
            >
              <A2ImpositionSheet
                sheetTitle={sideItem.sheetTitle}
                fileName={sideItem.fileName}
                side={sideItem.side}
                quadrants={sideItem.quadrants}
                pages={pages}
                showGuides={showGuides}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
