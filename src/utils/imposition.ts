import { A2ImpositionPair, CvPageData } from '../types/cv';

/**
 * Computes the A2 2x2 saddle-stitch imposition sheets for N total pages.
 * Note: N must always be a multiple of 4 (each folded A3 strip = 4 A4 pages).
 *
 * Formula for sheet s (0 = a, 1 = b, 2 = c, 3 = d, ...):
 * - Top strip (1st folded A3 spread):
 *   Front Top: [N - 4s, 1 + 4s]
 *   Back Top:  [2 + 4s, N - 4s - 1]
 * - Bottom strip (2nd folded A3 spread):
 *   Front Bottom: [N - 4s - 2, 3 + 4s]
 *   Back Bottom:  [4 + 4s, N - 4s - 3]
 *
 * When N is a multiple of 4 but not 8 (e.g. 36 pages), the last sheet only needs
 * the top A3 strip (4 pages). The bottom half is either left blank (null) or
 * duplicated from the top strip if `duplicateHalfSheet` is true.
 */
export function computeA2Imposition(
  totalPages: number,
  duplicateHalfSheet = false
): A2ImpositionPair[] {
  const normalizedN = Math.ceil(totalPages / 4) * 4;
  const numA2Sheets = Math.ceil(normalizedN / 8);
  const sheets: A2ImpositionPair[] = [];

  for (let s = 0; s < numA2Sheets; s++) {
    const letter = String.fromCharCode(97 + s); // 0 -> 'a', 1 -> 'b', etc.
    const topLeftFront = normalizedN - 4 * s;
    const topRightFront = 1 + 4 * s;
    const topLeftBack = 2 + 4 * s;
    const topRightBack = normalizedN - 4 * s - 1;

    // Check if the bottom strip exists within the remaining unallocated pages
    const hasBottomStrip = topRightFront + 2 < topLeftFront - 2;

    let bottomLeftFront: number | null = null;
    let bottomRightFront: number | null = null;
    let bottomLeftBack: number | null = null;
    let bottomRightBack: number | null = null;
    let isBottomHalfDuplicate = false;

    if (hasBottomStrip) {
      bottomLeftFront = normalizedN - 4 * s - 2;
      bottomRightFront = 3 + 4 * s;
      bottomLeftBack = 4 + 4 * s;
      bottomRightBack = normalizedN - 4 * s - 3;
    } else if (duplicateHalfSheet) {
      bottomLeftFront = topLeftFront;
      bottomRightFront = topRightFront;
      bottomLeftBack = topLeftBack;
      bottomRightBack = topRightBack;
      isBottomHalfDuplicate = true;
    }

    sheets.push({
      sheetIndex: s,
      sheetLetter: letter,
      frontFile: `${letter}1.png`,
      backFile: `${letter}2.png`,
      front: {
        topLeft: topLeftFront,
        topRight: topRightFront,
        bottomLeft: bottomLeftFront,
        bottomRight: bottomRightFront,
        isBottomHalfDuplicate,
      },
      back: {
        topLeft: topLeftBack,
        topRight: topRightBack,
        bottomLeft: bottomLeftBack,
        bottomRight: bottomRightBack,
        isBottomHalfDuplicate,
      },
    });
  }

  return sheets;
}

/**
 * Computes the 2-page side-by-side reader spreads for Book Mode:
 * - Spread 0: [null, Page 1 (Front Cover)]
 * - Spread 1: [Page 2, Page 3]
 * - Spread 2: [Page 4, Page 5]
 * ...
 * - Last Spread: [Page N (Back Cover), null]
 */
export function computeBookSpreads(pages: CvPageData[]): [CvPageData | null, CvPageData | null][] {
  if (pages.length === 0) return [];
  const spreads: [CvPageData | null, CvPageData | null][] = [];

  // Front cover alone on the right side
  spreads.push([null, pages[0]]);

  // Inside spreads in pairs
  let i = 1;
  while (i < pages.length - 1) {
    const left = pages[i] ?? null;
    const right = i + 1 < pages.length - 1 ? pages[i + 1] : null;
    spreads.push([left, right]);
    i += 2;
  }

  // Back cover alone on the left side
  if (pages.length > 1) {
    spreads.push([pages[pages.length - 1], null]);
  }

  return spreads;
}

/**
 * Returns the displayed footer page number (1-indexed starting at cv-4)
 * or null for covers, TOC, full-bleed art spreads, and closing Thank You pages.
 */
export function getDisplayedFooterNumber(pages: CvPageData[], pageIndex: number): number | null {
  const page = pages[pageIndex];
  if (!page || page.hideFooterNumber) return null;
  // cv-4 is at index 3 -> footer number 1
  const footerNum = pageIndex - 2;
  return footerNum > 0 ? footerNum : null;
}
