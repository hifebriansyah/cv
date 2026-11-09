import React from 'react';
import { PageComponentProps } from './CoverAndSpreadPages';
import { A4PageShell } from '../common/A4PageShell';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import { EditableText } from '../common/EditableText';

const TAG_BORDER_CLASSES: Record<string, string> = {
  blue: 'border-sky-300 text-stone-700',
  orange: 'border-amber-300 text-stone-700',
  green: 'border-emerald-300 text-stone-700',
  red: 'border-rose-300 text-stone-700',
  gray: 'border-stone-300 text-stone-700',
};

/**
 * cv-8 to cv-11 (Pages 5 to 8): Work Experience, Internship Experience & Contract Experience
 */
export const ExperiencePage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const sections = page.experienceSections || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-12 flex flex-col h-full space-y-8">
        {sections.map((sec, sIdx) => (
          <div key={sIdx} className="space-y-7">
            <EditableText
              as="h1"
              value={sec.heading}
              editable={editable}
              className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B] pl-[82px]"
              onChange={(val) => {
                const next = [...sections];
                next[sIdx] = { ...sec, heading: val };
                onUpdatePage?.({ ...page, experienceSections: next });
              }}
            />

            <div className="space-y-8">
              {sec.items.map((item, iIdx) => (
                <div key={iIdx} className="grid grid-cols-[64px_1fr] gap-x-[18px]">
                  {/* Left Column: Company Logo + Vertical Role Timeline Dots */}
                  <div className="flex flex-col items-center">
                    <ImagePlaceholder
                      asset={item.logo}
                      variant="logo"
                      editable={editable}
                      onUpdateAsset={(updatedLogo) => {
                        const nextSecs = [...sections];
                        const nextItems = [...sec.items];
                        nextItems[iIdx] = { ...item, logo: updatedLogo };
                        nextSecs[sIdx] = { ...sec, items: nextItems };
                        onUpdatePage?.({ ...page, experienceSections: nextSecs });
                      }}
                      className={`w-[56px] h-[56px] ${
                        item.logo.shape === 'circle' ? 'rounded-full' : 'rounded-xl'
                      } border border-stone-200 shrink-0`}
                    />

                    {item.subRoles && item.subRoles.length > 0 && (
                      <div className="flex flex-col items-center mt-2">
                        <div className="w-[1.5px] h-12 bg-stone-400" />
                        {item.subRoles.map((_, rIdx) => (
                          <React.Fragment key={rIdx}>
                            <span
                              className={`w-2.5 h-2.5 rounded-full my-1 ${
                                item.logo.bgColor === '#D90416'
                                  ? 'bg-[#D90416]'
                                  : 'bg-[#004B8D]'
                              }`}
                            />
                            {rIdx < (item.subRoles?.length || 0) - 1 && (
                              <div className="w-[1.5px] h-10 bg-stone-400" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Role Details */}
                  <div className="flex flex-col text-[12px] text-stone-800">
                    <EditableText
                      as="h2"
                      value={item.companyOrRole}
                      editable={editable}
                      className={`text-[13px] font-bold text-stone-900 ${
                        item.subtitle ? 'italic' : ''
                      }`}
                      onChange={(val) => {
                        const nextSecs = [...sections];
                        const nextItems = [...sec.items];
                        nextItems[iIdx] = { ...item, companyOrRole: val };
                        nextSecs[sIdx] = { ...sec, items: nextItems };
                        onUpdatePage?.({ ...page, experienceSections: nextSecs });
                      }}
                    />

                    {item.subtitle && (
                      <EditableText
                        as="div"
                        value={item.subtitle}
                        editable={editable}
                        className="text-[12.5px] text-stone-800 mt-0.5"
                        onChange={(val) => {
                          const nextSecs = [...sections];
                          const nextItems = [...sec.items];
                          nextItems[iIdx] = { ...item, subtitle: val };
                          nextSecs[sIdx] = { ...sec, items: nextItems };
                          onUpdatePage?.({ ...page, experienceSections: nextSecs });
                        }}
                      />
                    )}

                    <EditableText
                      as="div"
                      value={item.period}
                      editable={editable}
                      className="text-[12px] text-stone-600 mt-0.5"
                      onChange={(val) => {
                        const nextSecs = [...sections];
                        const nextItems = [...sec.items];
                        nextItems[iIdx] = { ...item, period: val };
                        nextSecs[sIdx] = { ...sec, items: nextItems };
                        onUpdatePage?.({ ...page, experienceSections: nextSecs });
                      }}
                    />

                    {/* Skill Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-0.5 rounded-full border text-[10px] tracking-wider ${
                            TAG_BORDER_CLASSES[t.color] || TAG_BORDER_CLASSES.gray
                          }`}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>

                    {/* Sub-roles timeline list */}
                    {item.subRoles && item.subRoles.length > 0 && (
                      <div className="mt-4 space-y-3.5">
                        {item.subRoles.map((sr, rIdx) => (
                          <div key={rIdx}>
                            <EditableText
                              as="div"
                              value={sr.title}
                              editable={editable}
                              className={`font-bold italic text-[12.5px] text-stone-900 ${
                                sr.underlined ? 'underline underline-offset-2' : ''
                              }`}
                              onChange={(val) => {
                                const nextSecs = [...sections];
                                const nextItems = [...sec.items];
                                const nextSub = [...(item.subRoles || [])];
                                nextSub[rIdx] = { ...sr, title: val };
                                nextItems[iIdx] = { ...item, subRoles: nextSub };
                                nextSecs[sIdx] = { ...sec, items: nextItems };
                                onUpdatePage?.({ ...page, experienceSections: nextSecs });
                              }}
                            />
                            <div className="text-[11.5px] text-stone-700 mt-0.5">
                              {sr.period}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* RESPONSIBILITIES */}
                    <div className="mt-4">
                      <div className="underline text-[11.5px] tracking-wide text-stone-700 mb-1">
                        RESPONSIBILITIES
                      </div>
                      {item.responsibilitiesIntro && (
                        <div className="text-[11.5px] text-stone-800 mb-0.5">
                          {item.responsibilitiesIntro}
                        </div>
                      )}
                      {item.ResponsibilitiesNumbered ? (
                        <ol className="list-decimal list-inside space-y-0.5 text-[11.5px] text-stone-800 leading-snug">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>
                              <EditableText
                                value={resp}
                                editable={editable}
                                onChange={(val) => {
                                  const nextSecs = [...sections];
                                  const nextItems = [...sec.items];
                                  const nextResp = [...item.responsibilities];
                                  nextResp[rIdx] = val;
                                  nextItems[iIdx] = { ...item, responsibilities: nextResp };
                                  nextSecs[sIdx] = { ...sec, items: nextItems };
                                  onUpdatePage?.({ ...page, experienceSections: nextSecs });
                                }}
                              />
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <div className="space-y-1 text-[11.5px] text-stone-800 leading-relaxed">
                          {item.responsibilities.map((resp, rIdx) => (
                            <EditableText
                              key={rIdx}
                              as="p"
                              value={resp}
                              editable={editable}
                              onChange={(val) => {
                                const nextSecs = [...sections];
                                const nextItems = [...sec.items];
                                const nextResp = [...item.responsibilities];
                                nextResp[rIdx] = val;
                                nextItems[iIdx] = { ...item, responsibilities: nextResp };
                                nextSecs[sIdx] = { ...sec, items: nextItems };
                                onUpdatePage?.({ ...page, experienceSections: nextSecs });
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* ACHIEVEMENT */}
                    <div className="mt-3.5">
                      <div className="underline text-[11.5px] tracking-wide text-stone-700 mb-1">
                        ACHIEVEMENT
                      </div>
                      {item.achievementIntro && (
                        <div className="text-[11.5px] text-stone-800 mb-0.5">
                          {item.achievementIntro}
                        </div>
                      )}
                      {item.achievementsNumbered ? (
                        <ol className="list-decimal list-inside space-y-0.5 text-[11.5px] text-stone-800 leading-snug">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx}>
                              <EditableText
                                value={ach}
                                editable={editable}
                                onChange={(val) => {
                                  const nextSecs = [...sections];
                                  const nextItems = [...sec.items];
                                  const nextAch = [...item.achievements];
                                  nextAch[aIdx] = val;
                                  nextItems[iIdx] = { ...item, achievements: nextAch };
                                  nextSecs[sIdx] = { ...sec, items: nextItems };
                                  onUpdatePage?.({ ...page, experienceSections: nextSecs });
                                }}
                              />
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <div className="space-y-1 text-[11.5px] text-stone-800">
                          {item.achievements.map((ach, aIdx) => (
                            <EditableText
                              key={aIdx}
                              as="p"
                              value={ach}
                              editable={editable}
                              onChange={(val) => {
                                const nextSecs = [...sections];
                                const nextItems = [...sec.items];
                                const nextAch = [...item.achievements];
                                nextAch[aIdx] = val;
                                nextItems[iIdx] = { ...item, achievements: nextAch };
                                nextSecs[sIdx] = { ...sec, items: nextItems };
                                onUpdatePage?.({ ...page, experienceSections: nextSecs });
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </A4PageShell>
  );
};

/**
 * cv-12, cv-13, cv-14 (Pages 9, 10, 11): Single & Dual Vertical Dashed Timelines
 * (Education, Award & Org, Certification & Course)
 */
export const TimelinePage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const cols = page.timelineColumns || [];
  const isSingle = page.kind === 'timeline-single';

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="relative w-full h-full flex flex-col justify-between">
        {/* Subtle slanted light gray top & bottom background accents matching cv-12..14 */}
        <div
          className="absolute top-0 left-0 right-0 h-56 bg-[#F4F4F4] pointer-events-none"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 65%)' }}
        />

        {isSingle && cols[0] ? (
          /* Single Timeline (EDUCATION) */
          <div className="relative z-10 w-full h-full pt-32 pb-12">
            {/* Pill Header */}
            <div className="flex justify-center pr-16">
              <div
                className="px-9 py-1.5 rounded-full text-white text-[14px] font-bold tracking-[0.22em]"
                style={{ backgroundColor: cols[0].pillColor }}
              >
                {cols[0].pillLabel}
              </div>
            </div>

            {/* Vertical Dashed Line at x = 355px */}
            <div
              className="absolute top-[160px] bottom-[36px] left-[355px] border-l-2 border-dashed"
              style={{ borderColor: cols[0].lineColor }}
            />

            {/* Nodes */}
            <div className="mt-28 space-y-36">
              {cols[0].nodes.map((node, nIdx) => (
                <div key={nIdx} className="relative flex items-center">
                  {/* Left Logo */}
                  <div className="w-[330px] flex justify-end pr-6">
                    <ImagePlaceholder
                      asset={node.logo}
                      variant="logo"
                      editable={editable}
                      onUpdateAsset={(updatedLogo) => {
                        const nextCols = [...cols];
                        const nextNodes = [...cols[0].nodes];
                        nextNodes[nIdx] = { ...node, logo: updatedLogo };
                        nextCols[0] = { ...cols[0], nodes: nextNodes };
                        onUpdatePage?.({ ...page, timelineColumns: nextCols });
                      }}
                      className="w-20 h-16 rounded-lg border border-stone-200 bg-white shadow-2xs"
                    />
                  </div>

                  {/* Center Dot */}
                  <div className="w-[50px] flex justify-center relative z-10">
                    <span
                      className="w-4 h-4 rounded-full ring-4 ring-white border"
                      style={{ backgroundColor: node.dotColor, borderColor: node.dotColor }}
                    />
                  </div>

                  {/* Right Text */}
                  <div className="flex-1 pl-4 pr-12">
                    <EditableText
                      as="div"
                      value={node.title}
                      editable={editable}
                      className="text-[12.5px] font-bold italic text-stone-900"
                      onChange={(val) => {
                        const nextCols = [...cols];
                        const nextNodes = [...cols[0].nodes];
                        nextNodes[nIdx] = { ...node, title: val };
                        nextCols[0] = { ...cols[0], nodes: nextNodes };
                        onUpdatePage?.({ ...page, timelineColumns: nextCols });
                      }}
                    />
                    <EditableText
                      as="div"
                      value={node.subtitle}
                      editable={editable}
                      className="text-[12px] text-stone-700 mt-1"
                      onChange={(val) => {
                        const nextCols = [...cols];
                        const nextNodes = [...cols[0].nodes];
                        nextNodes[nIdx] = { ...node, subtitle: val };
                        nextCols[0] = { ...cols[0], nodes: nextNodes };
                        onUpdatePage?.({ ...page, timelineColumns: nextCols });
                      }}
                    />
                    <div className="text-[11.5px] text-stone-600 mt-1">{node.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Dual Timeline (AWARD & ORG or CERTIFICATION & COURSE) */
          <div className="relative z-10 w-full h-full pt-24 pb-12 px-8 grid grid-cols-2 gap-4">
            {cols.map((col, cIdx) => {
              const isLeftCol = col.side === 'left';
              return (
                <div key={cIdx} className="relative h-full flex flex-col">
                  {/* Pill Header */}
                  <div
                    className={`flex ${
                      isLeftCol ? 'justify-end pr-8 mt-6' : 'justify-start pl-8'
                    }`}
                  >
                    <div
                      className="px-7 py-1.5 rounded-full text-white text-[13px] font-bold tracking-[0.22em]"
                      style={{ backgroundColor: col.pillColor }}
                    >
                      {col.pillLabel}
                    </div>
                  </div>

                  {/* Vertical Dashed Line */}
                  <div
                    className={`absolute bottom-0 border-l-2 border-dashed ${
                      isLeftCol ? 'top-[64px] right-[58px]' : 'top-[40px] left-[58px]'
                    }`}
                    style={{ borderColor: col.lineColor }}
                  />

                  {/* Nodes */}
                  <div
                    className={`flex-1 flex flex-col justify-around py-12 ${
                      isLeftCol ? 'pr-2' : 'pl-2'
                    }`}
                  >
                    {col.nodes.map((node, nIdx) => (
                      <div
                        key={nIdx}
                        className={`flex items-center gap-3 ${
                          isLeftCol ? 'flex-row justify-end' : 'flex-row-reverse justify-end'
                        }`}
                      >
                        {/* Text Block */}
                        <div
                          className={`flex-1 ${
                            isLeftCol ? 'text-right pr-2' : 'text-left pl-2'
                          }`}
                        >
                          <EditableText
                            as="div"
                            value={node.title}
                            editable={editable}
                            className={`text-[12px] font-bold italic text-stone-900 ${
                              node.underlined ? 'underline underline-offset-2' : ''
                            }`}
                            onChange={(val) => {
                              const nextCols = [...cols];
                              const nextNodes = [...col.nodes];
                              nextNodes[nIdx] = { ...node, title: val };
                              nextCols[cIdx] = { ...col, nodes: nextNodes };
                              onUpdatePage?.({ ...page, timelineColumns: nextCols });
                            }}
                          />
                          <EditableText
                            as="div"
                            value={node.subtitle}
                            editable={editable}
                            className="text-[11.5px] text-stone-700 mt-1"
                            onChange={(val) => {
                              const nextCols = [...cols];
                              const nextNodes = [...col.nodes];
                              nextNodes[nIdx] = { ...node, subtitle: val };
                              nextCols[cIdx] = { ...col, nodes: nextNodes };
                              onUpdatePage?.({ ...page, timelineColumns: nextCols });
                            }}
                          />
                          <div className="text-[11px] text-stone-600 mt-1">
                            {node.period}
                          </div>
                        </div>

                        {/* Dot on dashed line */}
                        <div className="relative z-10 flex items-center justify-center w-5">
                          <span
                            className="w-3.5 h-3.5 rounded-full ring-4 ring-white"
                            style={{ backgroundColor: node.dotColor }}
                          />
                        </div>

                        {/* Small Badge Logo */}
                        <ImagePlaceholder
                          asset={node.logo}
                          variant="logo"
                          editable={editable}
                          onUpdateAsset={(updatedLogo) => {
                            const nextCols = [...cols];
                            const nextNodes = [...col.nodes];
                            nextNodes[nIdx] = { ...node, logo: updatedLogo };
                            nextCols[cIdx] = { ...col, nodes: nextNodes };
                            onUpdatePage?.({ ...page, timelineColumns: nextCols });
                          }}
                          className="w-11 h-11 rounded-lg border border-stone-200 bg-white shrink-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </A4PageShell>
  );
};

/**
 * cv-15.png (Page 12): Document (6 Certificate Cards inside Tablet Frame)
 */
export const DocumentsPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const certs = page.certificateItems || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-10 pt-20 pb-10 flex flex-col h-full">
        {/* Centered Header */}
        <div className="text-center px-8 mb-6">
          <EditableText
            as="h1"
            value={page.title || 'DOCUMENT'}
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

        {/* Tablet Frame */}
        <div className="flex-1 border border-stone-300 rounded-t-[36px] bg-white px-7 pt-8 pb-6 shadow-xs flex flex-col">
          {/* Top Speaker Notch */}
          <div className="w-28 h-2 bg-stone-200 rounded-full mx-auto -mt-8 mb-6" />

          <div className="grid grid-cols-2 gap-5 flex-1">
            {certs.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-xl border-2 p-4 flex flex-col justify-between relative overflow-hidden bg-white shadow-2xs"
                style={{ borderColor: cert.borderColor }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div
                      className="text-[11px] font-bold tracking-wider uppercase"
                      style={{ color: cert.accentColor }}
                    >
                      {cert.issuer}
                    </div>
                    <EditableText
                      as="div"
                      value={cert.title}
                      editable={editable}
                      className="text-[10.5px] font-extrabold text-stone-800 mt-1 leading-snug"
                      onChange={(val) => {
                        const next = [...certs];
                        next[idx] = { ...cert, title: val };
                        onUpdatePage?.({ ...page, certificateItems: next });
                      }}
                    />
                  </div>
                  <span
                    className="px-2 py-1 rounded text-[9px] font-bold text-white shrink-0"
                    style={{ backgroundColor: cert.accentColor }}
                  >
                    {cert.badgeCode}
                  </span>
                </div>

                <div className="my-2">
                  <div className="text-[14px] font-semibold text-stone-900">
                    {cert.recipient}
                  </div>
                  <p className="text-[8.5px] text-stone-500 mt-1 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Placeholder thumbnail / upload slot */}
                <ImagePlaceholder
                  asset={cert.placeholder}
                  variant="certificate"
                  editable={editable}
                  onUpdateAsset={(updatedAsset) => {
                    const next = [...certs];
                    next[idx] = { ...cert, placeholder: updatedAsset };
                    onUpdatePage?.({ ...page, certificateItems: next });
                  }}
                  className="w-full h-14 rounded border border-dashed my-1"
                />

                <div className="flex items-end justify-between text-[8.5px] text-stone-500 pt-1 border-t border-stone-200/80">
                  <div>
                    <div className="font-semibold text-stone-700">{cert.signerName}</div>
                    <div>{cert.signerTitle}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-stone-700">{cert.date}</div>
                    <div>Certification Date</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </A4PageShell>
  );
};
