import React, { useRef } from 'react';
import { Image as ImageIcon, Upload, Sparkles, QrCode, Award, Building2, User, Smartphone, Layers } from 'lucide-react';
import { PlaceholderAsset } from '../../types/cv';

export interface ImagePlaceholderProps {
  asset: PlaceholderAsset;
  className?: string;
  editable?: boolean;
  onUpdateAsset?: (updated: PlaceholderAsset) => void;
  variant?: 'default' | 'logo' | 'avatar' | 'certificate' | 'qr' | 'art' | 'photo';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  asset,
  className = '',
  editable = false,
  onUpdateAsset,
  variant = 'default',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateAsset) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUpdateAsset({
          ...asset,
          imageUrl: reader.result,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    if (editable && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const renderIcon = () => {
    switch (variant) {
      case 'qr':
        return <QrCode className="w-8 h-8 opacity-70" />;
      case 'certificate':
        return <Award className="w-6 h-6 opacity-70" />;
      case 'avatar':
        return <User className="w-6 h-6 opacity-75" />;
      case 'logo':
        return <Building2 className="w-4 h-4 opacity-60" />;
      case 'art':
        return <Sparkles className="w-10 h-10 opacity-75" />;
      case 'photo':
        return <ImageIcon className="w-6 h-6 opacity-75" />;
      default:
        return <Layers className="w-5 h-5 opacity-65" />;
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: asset.bgColor || '#F3F4F6',
        color: asset.textColor || '#374151',
        borderColor: asset.accentColor || '#D1D5DB',
      }}
      className={`relative overflow-hidden flex flex-col items-center justify-center text-center select-none transition-all ${
        editable ? 'cursor-pointer ring-2 ring-amber-400/70 hover:ring-amber-500 group' : ''
      } ${className}`}
      title={editable ? `Click to replace placeholder (${asset.label})` : asset.label}
    >
      {asset.imageUrl ? (
        <img
          src={asset.imageUrl}
          alt={asset.label}
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {/* Subtle diagonal blueprint pattern for placeholders */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '14px 14px',
            }}
          />

          <div className="relative z-10 px-2 py-1 flex flex-col items-center justify-center gap-1 max-w-full">
            {variant !== 'logo' && renderIcon()}
            <span className="font-bold leading-tight tracking-tight break-words text-xs sm:text-sm">
              {asset.label}
            </span>
            {asset.sublabel && (
              <span className="text-[10px] leading-tight opacity-75 line-clamp-2">
                {asset.sublabel}
              </span>
            )}
            {asset.badgeText && (
              <span className="mt-1 px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold rounded bg-black/15">
                {asset.badgeText}
              </span>
            )}
          </div>
        </>
      )}

      {editable && (
        <>
          <div className="absolute inset-0 bg-stone-900/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-medium gap-1 p-2 z-20">
            <Upload className="w-4 h-4" />
            <span>Replace Asset</span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </>
      )}
    </div>
  );
};
