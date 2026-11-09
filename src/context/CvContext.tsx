import React, { createContext, useContext, useState, useEffect } from 'react';
import { CvPageData } from '../types/cv';
import { INITIAL_CV_PAGES, createFourNewPagesBatch } from '../data/initialCvData';

const STORAGE_KEY = 'febriansyah_cv_booklet_pages_v1';

interface CvContextValue {
  pages: CvPageData[];
  updatePage: (pageIndex: number, updated: CvPageData) => void;
  addFourPagesBlock: () => void;
  removeLastFourPagesBlock: () => void;
  resetToDefault: () => void;
  exportJsonData: () => void;
  importJsonData: (jsonString: string) => boolean;
  canRemoveFourPages: boolean;
  customBlocksAddedCount: number;
}

const CvContext = createContext<CvContextValue | undefined>(undefined);

/**
 * Keeps the Terminal TOC on cv-3 synchronized with the total number of content pages
 * whenever 4-page blocks are added or removed.
 */
function syncTocPageRanges(pages: CvPageData[]): CvPageData[] {
  // Content pages start at index 3 (cv-4 = page 1) and end at pages.length - 4 (before Thank/You/Back)
  const totalContentPages = pages.length - 6; // 32 total -> 26 content pages; 36 total -> 30 content pages
  return pages.map((p) => {
    if (p.kind === 'toc-right' && p.tocGroups && p.tocGroups.length >= 2) {
      const nextGroups = [...p.tocGroups];
      nextGroups[1] = {
        ...nextGroups[1],
        range: `[ 23, ${totalContentPages} ]`,
      };
      return { ...p, tocGroups: nextGroups };
    }
    return p;
  });
}

export const CvProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pages, setPages] = useState<CvPageData[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 32 && parsed.length % 4 === 0) {
          return syncTocPageRanges(parsed);
        }
      }
    } catch {
      // Ignore storage read error
    }
    return INITIAL_CV_PAGES;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
    } catch {
      // Ignore storage quota error
    }
  }, [pages]);

  const updatePage = (pageIndex: number, updated: CvPageData) => {
    setPages((prev) => {
      const next = [...prev];
      next[pageIndex] = updated;
      return next;
    });
  };

  /**
   * Enforces adding exactly 4 A4 pages in 1 operation so the physical A3 folded
   * booklet never has blank inner sides. Inserts the 4 pages right before the closing
   * "Thank You..!" spread (index = prev.length - 3).
   */
  const addFourPagesBlock = () => {
    setPages((prev) => {
      const newFour = createFourNewPagesBatch(prev.length);
      const insertAt = Math.max(3, prev.length - 3);
      const next = [
        ...prev.slice(0, insertAt),
        ...newFour,
        ...prev.slice(insertAt),
      ];
      return syncTocPageRanges(next);
    });
  };

  /**
   * Removes the most recently added 4-page custom block (minimum 32 pages).
   */
  const removeLastFourPagesBlock = () => {
    setPages((prev) => {
      if (prev.length <= 32) return prev;
      const removeStart = prev.length - 7; // 4 pages right before the 3 closing pages
      const next = [
        ...prev.slice(0, removeStart),
        ...prev.slice(removeStart + 4),
      ];
      return syncTocPageRanges(next);
    });
  };

  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPages(INITIAL_CV_PAGES);
  };

  const exportJsonData = () => {
    const blob = new Blob([JSON.stringify(pages, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `febriansyah-cv-${pages.length}pages.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJsonData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed) && parsed.length >= 32 && parsed.length % 4 === 0) {
        setPages(syncTocPageRanges(parsed));
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return (
    <CvContext.Provider
      value={{
        pages,
        updatePage,
        addFourPagesBlock,
        removeLastFourPagesBlock,
        resetToDefault,
        exportJsonData,
        importJsonData,
        canRemoveFourPages: pages.length > 32,
        customBlocksAddedCount: Math.max(0, (pages.length - 32) / 4),
      }}
    >
      {children}
    </CvContext.Provider>
  );
};

export const useCv = (): CvContextValue => {
  const ctx = useContext(CvContext);
  if (!ctx) {
    throw new Error('useCv must be used inside CvProvider');
  }
  return ctx;
};
