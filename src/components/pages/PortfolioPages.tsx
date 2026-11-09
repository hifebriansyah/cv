import React from 'react';
import { PageComponentProps } from './CoverAndSpreadPages';
import { A4PageShell } from '../common/A4PageShell';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import { EditableText } from '../common/EditableText';

/**
 * cv-16 & cv-17 (Pages 13 & 14): Software Portfolio & PWA Portfolio (Zigzag layout)
 */
export const ZigzagPortfolioPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const projects = page.zigzagProjects || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-14 flex flex-col h-full">
        <div className="text-center mb-10">
          <EditableText
            as="h1"
            value={page.title || 'PORTFOLIO'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11.5px] text-stone-700 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        <div className="flex-1 flex flex-col justify-around space-y-6">
          {projects.map((proj, idx) => {
            const isLeftText = proj.align === 'left';
            return (
              <div
                key={idx}
                className={`grid grid-cols-2 gap-8 items-center ${
                  isLeftText ? '' : 'direction-rtl'
                }`}
              >
                <div className={`${isLeftText ? 'order-1 text-left' : 'order-2 text-right'}`}>
                  <EditableText
                    as="h2"
                    value={proj.title}
                    editable={editable}
                    className="text-[13.5px] font-bold tracking-[0.14em] text-stone-800 mb-2.5"
                    onChange={(val) => {
                      const next = [...projects];
                      next[idx] = { ...proj, title: val };
                      onUpdatePage?.({ ...page, zigzagProjects: next });
                    }}
                  />
                  <EditableText
                    as="p"
                    value={proj.description}
                    editable={editable}
                    className="text-[11.5px] text-stone-700 leading-relaxed"
                    onChange={(val) => {
                      const next = [...projects];
                      next[idx] = { ...proj, description: val };
                      onUpdatePage?.({ ...page, zigzagProjects: next });
                    }}
                  />
                </div>

                <div className={`${isLeftText ? 'order-2' : 'order-1'}`}>
                  <ImagePlaceholder
                    asset={proj.preview}
                    variant="photo"
                    editable={editable}
                    onUpdateAsset={(updatedPreview) => {
                      const next = [...projects];
                      next[idx] = { ...proj, preview: updatedPreview };
                      onUpdatePage?.({ ...page, zigzagProjects: next });
                    }}
                    className="w-full h-[185px] rounded-2xl border-2 border-stone-200 shadow-xs"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-18 (Page 15): Logo Design Portfolio (Present Logo & Legacy Logo)
 */
export const LogoPortfolioPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const sections = page.logoSections || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-10 pt-20 pb-14 flex flex-col h-full">
        <div className="text-center mb-7">
          <EditableText
            as="h1"
            value={page.title || 'LOGO DESIGN PORTFOLIO'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11px] text-stone-700 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        <div className="space-y-8 flex-1 flex flex-col justify-center">
          {sections.map((sec, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-center text-[13.5px] font-bold tracking-[0.18em] text-stone-800 mb-5">
                {sec.heading}
              </h2>

              <div className="grid grid-cols-3 gap-5">
                {sec.cards.map((card, cIdx) => (
                  <div key={cIdx} className="flex flex-col">
                    <div className="border border-stone-300 rounded-xl p-3 bg-white flex flex-col">
                      <ImagePlaceholder
                        asset={card.logo}
                        variant="logo"
                        editable={editable}
                        onUpdateAsset={(updatedLogo) => {
                          const nextSecs = [...sections];
                          const nextCards = [...sec.cards];
                          nextCards[cIdx] = { ...card, logo: updatedLogo };
                          nextSecs[sIdx] = { ...sec, cards: nextCards };
                          onUpdatePage?.({ ...page, logoSections: nextSecs });
                        }}
                        className="w-full h-[180px] rounded-lg"
                      />
                      <EditableText
                        as="div"
                        value={card.name}
                        editable={editable}
                        className="text-[12.5px] italic text-stone-800 mt-3 font-medium"
                        onChange={(val) => {
                          const nextSecs = [...sections];
                          const nextCards = [...sec.cards];
                          nextCards[cIdx] = { ...card, name: val };
                          nextSecs[sIdx] = { ...sec, cards: nextCards };
                          onUpdatePage?.({ ...page, logoSections: nextSecs });
                        }}
                      />
                      <div className="text-[11px] text-stone-500 mt-0.5 mb-1">
                        {card.period}
                      </div>
                    </div>

                    {/* Color Palette Swatch Bars */}
                    <div className="flex items-center gap-2 mt-3 pl-3">
                      {card.swatches.map((hex, hIdx) => (
                        <span
                          key={hIdx}
                          className="w-7 h-1.5 rounded-full"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-19 (Page 16): AI Persona Portfolio (Yuna Fiyina, Luna Aisha, Inara Risyah)
 */
export const AiPersonaPortfolioPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const personas = page.personas || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-12 pt-20 pb-14 flex flex-col h-full">
        <div className="text-center mb-6">
          <EditableText
            as="h1"
            value={page.title || 'AI PERSONA PORTFOLIO'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11.5px] text-stone-700 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        <div className="flex-1 flex flex-col justify-around">
          {personas.map((p, idx) => (
            <div key={idx} className="grid grid-cols-[1.2fr_1fr] gap-6 items-center">
              {/* Left: Persona Title + Tri-circle ornamental frame */}
              <div className="flex flex-col items-center">
                <EditableText
                  as="h2"
                  value={p.name}
                  editable={editable}
                  className="text-[13.5px] font-bold tracking-[0.2em] text-stone-800 mb-3"
                  onChange={(val) => {
                    const next = [...personas];
                    next[idx] = { ...p, name: val };
                    onUpdatePage?.({ ...page, personas: next });
                  }}
                />

                <div className="relative flex items-center justify-center w-full h-[170px]">
                  {/* Ornamental side loops */}
                  <div
                    className="w-8 h-5 rounded-full border-2 -mr-2 flex items-center justify-center"
                    style={{ borderColor: p.ringColor }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: p.ringColor }}
                    />
                  </div>

                  {/* Left small circle */}
                  <div
                    className="w-20 h-20 rounded-full border-[3px] overflow-hidden -mr-4 z-10 shadow-xs"
                    style={{ borderColor: p.ringColor }}
                  >
                    <ImagePlaceholder
                      asset={p.leftAvatar}
                      variant="avatar"
                      editable={editable}
                      onUpdateAsset={(a) => {
                        const next = [...personas];
                        next[idx] = { ...p, leftAvatar: a };
                        onUpdatePage?.({ ...page, personas: next });
                      }}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Center large circle */}
                  <div
                    className="w-40 h-40 rounded-full border-4 overflow-hidden z-20 shadow-md"
                    style={{ borderColor: p.ringColor }}
                  >
                    <ImagePlaceholder
                      asset={p.mainAvatar}
                      variant="avatar"
                      editable={editable}
                      onUpdateAsset={(a) => {
                        const next = [...personas];
                        next[idx] = { ...p, mainAvatar: a };
                        onUpdatePage?.({ ...page, personas: next });
                      }}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Right small circle */}
                  <div
                    className="w-20 h-20 rounded-full border-[3px] overflow-hidden -ml-4 z-10 shadow-xs"
                    style={{ borderColor: p.ringColor }}
                  >
                    <ImagePlaceholder
                      asset={p.rightAvatar}
                      variant="avatar"
                      editable={editable}
                      onUpdateAsset={(a) => {
                        const next = [...personas];
                        next[idx] = { ...p, rightAvatar: a };
                        onUpdatePage?.({ ...page, personas: next });
                      }}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Ornamental right loop */}
                  <div
                    className="w-8 h-5 rounded-full border-2 -ml-2 flex items-center justify-center"
                    style={{ borderColor: p.ringColor }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: p.ringColor }}
                    />
                  </div>
                </div>
              </div>

              {/* Right: Chat Thread */}
              <div className="flex flex-col space-y-3 pt-5 text-[10px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center shrink-0 text-[9px]">
                    You
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">You</div>
                    <div className="text-stone-600 mt-0.5">{p.userPrompt}</div>
                  </div>
                </div>

                <div className="w-[1.5px] h-4 bg-stone-300 ml-5" />

                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full text-white font-bold flex items-center justify-center shrink-0 text-[9px]"
                    style={{ backgroundColor: p.ringColor }}
                  >
                    AI
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      {p.name.split(' ')[0]}
                    </div>
                    <EditableText
                      as="p"
                      value={p.botReply}
                      editable={editable}
                      className="text-stone-600 mt-0.5 leading-snug"
                      onChange={(val) => {
                        const next = [...personas];
                        next[idx] = { ...p, botReply: val };
                        onUpdatePage?.({ ...page, personas: next });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-20 (Page 17): Business Investment Portfolio
 */
export const InvestmentPortfolioPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const sections = page.investmentSections || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-12 pt-20 pb-14 flex flex-col h-full">
        <div className="text-center mb-8">
          <EditableText
            as="h1"
            value={page.title || 'BUSINESS INVESTMENT PORTFOLIO'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11px] text-stone-700 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        <div className="flex-1 flex flex-col justify-around">
          {sections.map((sec, sIdx) => (
            <div key={sIdx} className="text-center">
              <h2 className="text-[13.5px] font-bold tracking-[0.18em] text-stone-800 mb-6">
                {sec.heading}
              </h2>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {sec.items.map((item, iIdx) => (
                  <div key={iIdx} className="w-[112px] flex flex-col items-center">
                    <ImagePlaceholder
                      asset={item.logo}
                      variant="logo"
                      editable={editable}
                      onUpdateAsset={(updatedLogo) => {
                        const nextSecs = [...sections];
                        const nextItems = [...sec.items];
                        nextItems[iIdx] = { ...item, logo: updatedLogo };
                        nextSecs[sIdx] = { ...sec, items: nextItems };
                        onUpdatePage?.({ ...page, investmentSections: nextSecs });
                      }}
                      className="w-20 h-20 rounded-2xl border border-stone-200 mb-3 shadow-2xs"
                    />
                    <div className="relative">
                      {item.badgeNote && (
                        <span className="block text-[9px] text-stone-500 text-right -mb-1">
                          {item.badgeNote}
                        </span>
                      )}
                      <EditableText
                        as="div"
                        value={item.name}
                        editable={editable}
                        className="text-[12px] font-medium text-stone-800"
                        onChange={(val) => {
                          const nextSecs = [...sections];
                          const nextItems = [...sec.items];
                          nextItems[iIdx] = { ...item, name: val };
                          nextSecs[sIdx] = { ...sec, items: nextItems };
                          onUpdatePage?.({ ...page, investmentSections: nextSecs });
                        }}
                      />
                    </div>
                    <div className="text-[10.5px] text-stone-500 mt-1">{item.category}</div>
                    <div className="text-[10.5px] italic text-stone-500 mt-0.5">
                      {item.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-21 (Page 18): Unsorted Portfolio (Node-Connected Architecture Diagram)
 */
export const UnsortedDiagramPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const boxes = page.unsortedBoxes || [];
  const getBox = (id: string) => boxes.find((b) => b.id === id);

  const renderBox = (id: string, className = '') => {
    const b = getBox(id);
    if (!b) return null;
    return (
      <div
        className={`border-[3px] border-stone-400 rounded-xl bg-white p-4 relative z-10 shadow-2xs ${className}`}
      >
        <div className="text-[11.5px] font-bold italic text-stone-800 mb-1.5">
          {b.title}
        </div>
        <ul className="space-y-0.5 text-[11px] text-stone-700 leading-snug">
          {b.items.map((it, idx) => (
            <li key={idx}>
              <EditableText
                value={it}
                editable={editable}
                onChange={(val) => {
                  const nextBoxes = boxes.map((bx) => {
                    if (bx.id !== id) return bx;
                    const nextItems = [...bx.items];
                    nextItems[idx] = val;
                    return { ...bx, items: nextItems };
                  });
                  onUpdatePage?.({ ...page, unsortedBoxes: nextBoxes });
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-12 pt-20 pb-12 flex flex-col h-full relative">
        {/* Green Connector Lines SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 794 1123"
          fill="none"
        >
          {/* WEB APPS to ANDROID/iOS APPS */}
          <path d="M358 332 H408 L498 220 H525" stroke="#148800" strokeWidth="2.5" />
          {/* ANDROID/iOS APPS to WEBSITE */}
          <path d="M632 290 V376" stroke="#148800" strokeWidth="2.5" />
          {/* WEB APPS to REST API */}
          <path d="M206 426 V458 H280 V480" stroke="#148800" strokeWidth="2.5" />
          {/* REST API to WEBSITE */}
          <path d="M456 565 H500 V475 H525" stroke="#148800" strokeWidth="2.5" />
          {/* REST API to MY PERSONAL WEB */}
          <path d="M104 568 H76 V666 L148 692 V715" stroke="#148800" strokeWidth="2.5" />
          {/* MY PERSONAL WEB to MAIL SERVER */}
          <path d="M240 758 H290" stroke="#148800" strokeWidth="2.5" />
          {/* MAIL SERVER to ANDROID TV APPS */}
          <path d="M408 826 V886 H308 V925" stroke="#148800" strokeWidth="2.5" />
          {/* MAIL SERVER to WORDPRESS */}
          <path d="M526 758 H544 V872 H572" stroke="#148800" strokeWidth="2.5" />
          {/* WEBSITE to WORDPRESS */}
          <path d="M632 596 V672 H668 V794" stroke="#148800" strokeWidth="2.5" />
        </svg>

        {/* Top Left Title & Intro + Top Right Android/iOS Box */}
        <div className="grid grid-cols-[1.35fr_1fr] gap-6 items-start">
          <div>
            <EditableText
              as="h1"
              value={page.title || 'UNSORTED PORTFOLIO'}
              editable={editable}
              className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
              onChange={(val) => onUpdatePage?.({ ...page, title: val })}
            />
            <EditableText
              as="p"
              value={page.subtitle || ''}
              editable={editable}
              className="text-[11px] text-stone-700 mt-3 leading-relaxed pr-4"
              onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
            />
            <div className="mt-8">{renderBox('web-apps', 'w-[305px]')}</div>
          </div>

          <div className="pt-8 flex flex-col items-end space-y-12">
            {renderBox('mobile-apps', 'w-[215px]')}
            {renderBox('website', 'w-[215px]')}
          </div>
        </div>

        {/* Middle REST API Box */}
        <div className="-mt-16 ml-12">{renderBox('rest-api', 'w-[350px]')}</div>

        {/* Bottom Row: Personal Web, Mail Server, WordPress */}
        <div className="mt-8 grid grid-cols-[190px_240px_1fr] gap-6 items-start">
          <div className="mt-6">{renderBox('personal-web')}</div>
          <div>{renderBox('mail-server')}</div>
          <div className="mt-16 flex justify-end">{renderBox('wordpress', 'w-[195px]')}</div>
        </div>

        {/* Bottom Center Android TV Apps */}
        <div className="-mt-6 ml-32">{renderBox('android-tv', 'w-[250px]')}</div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-22 (Page 19): Asset Portfolio (Equipment & Device Staggered Photo Cards)
 */
export const AssetPortfolioPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const data = page.assetData;
  if (!data) return null;

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="pt-20 pb-14 flex flex-col h-full justify-between">
        <div className="text-center px-16">
          <EditableText
            as="h1"
            value={page.title || 'ASSET PORTFOLIO'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11px] text-stone-700 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        {/* EQUIPMENT Band */}
        <div className="relative py-6 px-12 flex items-center gap-6 bg-[#F6F6F6]">
          <div className="w-[140px] shrink-0">
            <h2 className="text-[14px] font-bold tracking-wider text-stone-800">
              EQUIPMENT
            </h2>
            <ul className="mt-1 space-y-1 text-[13px] text-stone-700">
              {data.equipmentList.map((eq, idx) => (
                <li key={idx}>{eq}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1 grid grid-cols-4 gap-3 items-center">
            {data.equipmentPhotos.map((ph, idx) => (
              <ImagePlaceholder
                key={idx}
                asset={ph}
                variant="photo"
                editable={editable}
                onUpdateAsset={(updated) => {
                  const nextPhotos = [...data.equipmentPhotos];
                  nextPhotos[idx] = updated;
                  onUpdatePage?.({
                    ...page,
                    assetData: { ...data, equipmentPhotos: nextPhotos },
                  });
                }}
                className={`w-full h-[240px] rounded-xl shadow-sm ${
                  idx % 2 === 1 ? '-mt-8' : 'mt-6'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DEVICE Band */}
        <div className="relative py-6 px-12 flex items-center gap-8 bg-[#F6F6F6]">
          <div className="flex-1 grid grid-cols-3 gap-4 items-center">
            {data.devicePhotos.map((ph, idx) => (
              <ImagePlaceholder
                key={idx}
                asset={ph}
                variant="photo"
                editable={editable}
                onUpdateAsset={(updated) => {
                  const nextPhotos = [...data.devicePhotos];
                  nextPhotos[idx] = updated;
                  onUpdatePage?.({
                    ...page,
                    assetData: { ...data, devicePhotos: nextPhotos },
                  });
                }}
                className={`w-full h-[240px] rounded-xl shadow-sm ${
                  idx === 1 ? 'mt-8' : '-mt-6'
                }`}
              />
            ))}
          </div>

          <div className="w-[150px] shrink-0 pl-2">
            <h2 className="text-[14px] font-bold tracking-wider text-stone-800">
              DEVICE
            </h2>
            <ul className="mt-1 space-y-1 text-[13px] text-stone-700">
              {data.deviceList.map((dv, idx) => (
                <li key={idx}>{dv}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-23 (Page 20): Property Portfolio
 */
export const PropertyPortfolioPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const data = page.propertyData;
  if (!data) return null;

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="pt-20 pb-14 flex flex-col h-full justify-between">
        <div className="text-center px-16">
          <EditableText
            as="h1"
            value={page.title || 'PROPERTY PORTFOLIO'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11px] text-stone-700 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        {/* Middle Row: 4 Regional Logos + Right Property Spec List */}
        <div className="grid grid-cols-[1.35fr_1fr] border-y border-stone-100">
          <div className="grid grid-cols-4 divide-x divide-stone-200 py-6 px-4 items-center">
            {data.regions.map((reg, idx) => (
              <div key={idx} className="px-2 flex justify-center">
                <ImagePlaceholder
                  asset={reg}
                  variant="logo"
                  editable={editable}
                  onUpdateAsset={(updated) => {
                    const nextRegions = [...data.regions];
                    nextRegions[idx] = updated;
                    onUpdatePage?.({
                      ...page,
                      propertyData: { ...data, regions: nextRegions },
                    });
                  }}
                  className="w-24 h-28 rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="bg-[#F4F4F4] p-6 space-y-3 text-[11px] text-stone-800">
            {data.listings.map((item, idx) => (
              <div key={idx}>
                <div className="font-bold text-stone-900">{item.handle}</div>
                {item.lines.map((ln, lIdx) => (
                  <div key={lIdx} className="text-stone-700 leading-snug">
                    {ln}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Featured Property (Collins Boulevard) */}
        <div className="relative flex items-center px-16 py-6">
          <div className="w-[240px] pr-6">
            <div className="text-[14px] font-bold text-stone-900">
              {data.featuredHandle}
            </div>
            <div className="text-[13.5px] text-stone-800 mt-0.5">{data.featuredName}</div>
            <div className="text-[13px] text-stone-700 mt-0.5">{data.featuredSpec}</div>
          </div>

          <div className="flex-1">
            <ImagePlaceholder
              asset={data.featuredPhoto}
              variant="photo"
              editable={editable}
              onUpdateAsset={(updated) =>
                onUpdatePage?.({
                  ...page,
                  propertyData: { ...data, featuredPhoto: updated },
                })
              }
              className="w-full h-[310px] rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-24 & cv-25 (Pages 21 & 22): Full-Bleed 2-Page AI Art Portfolio Spread
 */
export const AiArtSpreadPage: React.FC<PageComponentProps> = ({
  page,
  editable = false,
  onUpdatePage,
}) => {
  const data = page.aiArtData;
  if (!data) return null;

  return (
    <A4PageShell
      showTopWedge={false}
      showBottomWedge={false}
      footerPageNumber={null}
    >
      <div className="relative w-full h-full">
        <ImagePlaceholder
          asset={data.artPlaceholder}
          variant="art"
          editable={editable}
          onUpdateAsset={(updated) =>
            onUpdatePage?.({
              ...page,
              aiArtData: { ...data, artPlaceholder: updated },
            })
          }
          className="w-full h-full"
        />

        {data.captionTitle && (
          <div className="absolute bottom-12 right-12 text-right text-white drop-shadow-md z-20">
            <EditableText
              as="h1"
              value={data.captionTitle}
              editable={editable}
              className="text-[25px] font-bold italic tracking-[0.22em]"
              onChange={(val) =>
                onUpdatePage?.({
                  ...page,
                  aiArtData: { ...data, captionTitle: val },
                })
              }
            />
            {data.captionSubtitle && (
              <EditableText
                as="p"
                value={data.captionSubtitle}
                editable={editable}
                className="text-[13px] font-bold italic tracking-[0.1em] mt-1"
                onChange={(val) =>
                  onUpdatePage?.({
                    ...page,
                    aiArtData: { ...data, captionSubtitle: val },
                  })
                }
              />
            )}
          </div>
        )}
      </div>
    </A4PageShell>
  );
};
