import React from 'react';
import { CvPageData } from '../../types/cv';
import { A4PageShell } from '../common/A4PageShell';
import { EditableText } from '../common/EditableText';

export interface PageComponentProps {
  page: CvPageData;
  footerPageNumber: number | null;
  editable?: boolean;
  onUpdatePage?: (updated: CvPageData) => void;
  onNavigateToContentPage?: (contentPageNum: number) => void;
}

/**
 * cv-1.png: Front Cover with centered sky-blue "hf" monogram on #F5E6D8 cream background
 */
export const CoverFrontPage: React.FC<PageComponentProps> = () => {
  return (
    <A4PageShell
      backgroundColor="#F5E6D8"
      showTopWedge={false}
      showBottomWedge={false}
    >
      <div className="w-full h-full flex items-center justify-center">
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="hf monogram logo"
        >
          {/* "h" */}
          <path
            d="M36 30 V190 M36 125 C36 96, 102 96, 102 125 V190"
            stroke="#1DA1F2"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* "f" */}
          <path
            d="M180 40 C162 28, 142 36, 142 62 V190 M126 105 H168"
            stroke="#1DA1F2"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-2.png & cv-3.png: Left & Right halves of the macOS Terminal Window Table of Contents ("Hello World")
 */
export const TocSpreadPage: React.FC<PageComponentProps> = ({
  page,
  editable = false,
  onUpdatePage,
  onNavigateToContentPage,
}) => {
  const isLeft = page.kind === 'toc-left';

  const handleHeroChange = (val: string) => {
    onUpdatePage?.({ ...page, cursiveHero: val });
  };

  return (
    <A4PageShell
      backgroundColor="#F5E6D8"
      showTopWedge={false}
      showBottomWedge={false}
    >
      <div className="w-full h-full flex items-center py-28">
        <div
          className={`w-full h-[880px] border-[#808285] bg-[#F5E6D8] flex flex-col justify-between ${
            isLeft
              ? 'ml-40 border-l-[12px] border-t-[12px] border-b-[12px] rounded-l-[28px]'
              : 'mr-40 border-r-[12px] border-t-[12px] border-b-[12px] rounded-r-[28px]'
          }`}
        >
          {/* Top macOS window bar */}
          <div className="h-20 border-b-[12px] border-[#808285] flex items-center px-8 gap-5">
            {isLeft && (
              <>
                <span className="w-7 h-7 rounded-full bg-[#FF1E00] inline-block" />
                <span className="w-7 h-7 rounded-full bg-[#FFAE00] inline-block" />
                <span className="w-7 h-7 rounded-full bg-[#00FF19] inline-block" />
              </>
            )}
          </div>

          {/* Center Hero + Terminal Command */}
          <div className={`flex-1 flex flex-col justify-center ${isLeft ? 'pl-20 pr-8' : 'pl-10 pr-20'}`}>
            {isLeft && (
              <div className="text-2xl tracking-widest text-stone-500 font-mono mb-6">
                <EditableText
                  value={page.terminalCommand || '> ./start.sh'}
                  editable={editable}
                  onChange={(val) => onUpdatePage?.({ ...page, terminalCommand: val })}
                />
              </div>
            )}
            {!isLeft && <div className="h-14" />}

            <div className="font-handwriting text-[128px] leading-none text-[#3C3C3B] select-none my-4">
              <EditableText
                value={page.cursiveHero || (isLeft ? 'Hello' : 'World')}
                editable={editable}
                onChange={handleHeroChange}
              />
            </div>

            {/* Table of Contents columns */}
            <div className={`mt-14 grid ${isLeft ? 'grid-cols-3 gap-8' : 'grid-cols-2 gap-12 max-w-md'}`}>
              {(page.tocGroups || []).map((group, gIdx) => {
                // Parse first page number in "[ 1, 4 ]" for quick jump in Book Mode
                const match = group.range.match(/\d+/);
                const targetPageNum = match ? parseInt(match[0], 10) : 1;

                return (
                  <div key={gIdx} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => onNavigateToContentPage?.(targetPageNum)}
                      className="text-left text-2xl font-normal text-stone-500 tracking-wider mb-4 hover:text-stone-900 transition-colors"
                      title={`Jump to section ${group.range}`}
                    >
                      {group.range}
                    </button>
                    <ul className="space-y-1.5 text-[12px] text-stone-500 font-sans">
                      {group.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          onClick={() => onNavigateToContentPage?.(targetPageNum)}
                          className="cursor-pointer hover:text-stone-900 transition-colors"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-6" />
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-30.png & cv-31.png: Closing "Thank" / "You..!" Spread
 */
export const ThankYouSpreadPage: React.FC<PageComponentProps> = ({
  page,
  editable = false,
  onUpdatePage,
}) => {
  const isLeft = page.kind === 'thank-you-left';
  return (
    <A4PageShell
      backgroundColor="#F5E6D8"
      showTopWedge={false}
      showBottomWedge={false}
    >
      <div
        className={`w-full h-full flex items-center ${
          isLeft ? 'justify-end pr-14' : 'justify-start pl-14'
        }`}
      >
        <div className="font-handwriting text-[132px] text-[#3C3C3B] leading-none">
          <EditableText
            value={page.cursiveHero || (isLeft ? 'Thank' : 'You..!')}
            editable={editable}
            onChange={(val) => onUpdatePage?.({ ...page, cursiveHero: val })}
          />
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-32.png: Solid #F5E6D8 Back Cover
 */
export const CoverBackPage: React.FC<PageComponentProps> = () => {
  return (
    <A4PageShell
      backgroundColor="#F5E6D8"
      showTopWedge={false}
      showBottomWedge={false}
    >
      <div className="w-full h-full" />
    </A4PageShell>
  );
};
