import React from 'react';

export interface A4PageShellProps {
  children: React.ReactNode;
  footerPageNumber?: number | null;
  backgroundColor?: string;
  showTopWedge?: boolean;
  showBottomWedge?: boolean;
  className?: string;
}

/**
 * Standard A4 Portrait Page Shell (794px x 1123px, matching 2480 x 3508 aspect ratio).
 * Renders the signature warm-cream (#F5E6D8) slanted top & bottom wedges and centered page number.
 */
export const A4PageShell: React.FC<A4PageShellProps> = ({
  children,
  footerPageNumber = null,
  backgroundColor = '#FFFFFF',
  showTopWedge = true,
  showBottomWedge = true,
  className = '',
}) => {
  return (
    <div
      className={`a4-page relative flex flex-col justify-between shadow-sm ${className}`}
      style={{ backgroundColor }}
    >
      {/* Top slanted cream header wedge */}
      {showTopWedge && (
        <div
          className="absolute top-0 left-0 right-0 h-8 pointer-events-none z-10"
          style={{
            backgroundColor: '#F5E6D8',
            clipPath: 'polygon(0 0, 100% 0, 100% 42%, 0 100%)',
          }}
        />
      )}

      {/* Main Page Content */}
      <div className="relative z-10 flex-1 w-full h-full flex flex-col">
        {children}
      </div>

      {/* Bottom slanted cream footer wedge + Page Number */}
      {showBottomWedge && (
        <div className=" absolute bottom-0 left-0 right-0 h-9 pointer-events-none z-20 flex items-end justify-center pb-1.5">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#F5E6D8',
              clipPath: 'polygon(0 58%, 100% 0, 100% 100%, 0 100%)',
            }}
          />
          {footerPageNumber !== null && (
            <span className="relative z-10 text-[11px] font-medium text-stone-500 tracking-wide">
              {footerPageNumber}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
