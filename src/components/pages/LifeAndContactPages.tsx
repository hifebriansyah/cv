import React from 'react';
import { Phone, Mail, Globe, Linkedin } from 'lucide-react';
import { PageComponentProps } from './CoverAndSpreadPages';
import { A4PageShell } from '../common/A4PageShell';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import { EditableText } from '../common/EditableText';

/**
 * cv-26 & cv-27 (Pages 23 & 24): Slices of My Life
 */
export const SlicesOfLifePage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const items = page.slicesItems || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-14 flex flex-col h-full">
        {page.title && (
          <div className="mb-8">
            <EditableText
              as="h1"
              value={page.title}
              editable={editable}
              className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
              onChange={(val) => onUpdatePage?.({ ...page, title: val })}
            />
            {page.subtitle && (
              <EditableText
                as="p"
                value={page.subtitle}
                editable={editable}
                className="text-[11px] text-stone-700 mt-3 leading-relaxed"
                onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
              />
            )}
          </div>
        )}

        <div className="flex-1 flex flex-col justify-around space-y-6">
          {items.map((item, idx) => {
            const isRightPhoto =
              item.layout === 'wide-right' || item.layout === 'square-right';

            return (
              <div
                key={idx}
                className="grid grid-cols-2 gap-8 items-center"
              >
                <div className={isRightPhoto ? 'order-2' : 'order-1'}>
                  <ImagePlaceholder
                    asset={item.photo}
                    variant="photo"
                    editable={editable}
                    onUpdateAsset={(updated) => {
                      const next = [...items];
                      next[idx] = { ...item, photo: updated };
                      onUpdatePage?.({ ...page, slicesItems: next });
                    }}
                    className={`w-full rounded-[32px] shadow-xs ${
                      item.layout === 'pill-bottom'
                        ? 'h-[230px] w-[160px] mx-auto rounded-full'
                        : 'h-[220px]'
                    }`}
                  />
                </div>

                <div
                  className={`${
                    isRightPhoto ? 'order-1 text-right' : 'order-2 text-left'
                  } text-[13px] text-stone-700 leading-relaxed font-light`}
                >
                  <EditableText
                    as="p"
                    value={item.caption}
                    editable={editable}
                    className="whitespace-pre-line"
                    onChange={(val) => {
                      const next = [...items];
                      next[idx] = { ...item, caption: val };
                      onUpdatePage?.({ ...page, slicesItems: next });
                    }}
                  />
                  <div className="text-stone-500 mt-1">{item.date}</div>
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
 * cv-28 (Page 25): Contact Reference
 */
export const ContactReferencePage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const groups = page.referenceGroups || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-14 flex flex-col h-full">
        <div className="mb-10">
          <EditableText
            as="h1"
            value={page.title || 'CONTACT REFERENCE'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11.5px] text-stone-700 mt-3 leading-relaxed whitespace-pre-line"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        <div className="space-y-10">
          {groups.map((grp, gIdx) => (
            <div key={gIdx}>
              <h2 className="text-[14px] font-bold tracking-[0.18em] text-stone-800 mb-6">
                {grp.heading}
              </h2>

              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {grp.people.map((person, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-5">
                    {/* Avatar with Overlapping Company Logo Badge */}
                    <div className="relative w-20 h-20 shrink-0">
                      <ImagePlaceholder
                        asset={person.avatar}
                        variant="avatar"
                        editable={editable}
                        onUpdateAsset={(updated) => {
                          const nextGroups = [...groups];
                          const nextPeople = [...grp.people];
                          nextPeople[pIdx] = { ...person, avatar: updated };
                          nextGroups[gIdx] = { ...grp, people: nextPeople };
                          onUpdatePage?.({ ...page, referenceGroups: nextGroups });
                        }}
                        className="w-16 h-16 rounded-lg ml-3 mt-3 shadow-xs"
                      />
                      <div className="absolute top-0 left-0 w-9 h-9 rounded-lg overflow-hidden shadow-xs">
                        <ImagePlaceholder
                          asset={person.companyLogo}
                          variant="logo"
                          editable={editable}
                          onUpdateAsset={(updated) => {
                            const nextGroups = [...groups];
                            const nextPeople = [...grp.people];
                            nextPeople[pIdx] = { ...person, companyLogo: updated };
                            nextGroups[gIdx] = { ...grp, people: nextPeople };
                            onUpdatePage?.({ ...page, referenceGroups: nextGroups });
                          }}
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col text-[12px]">
                      <EditableText
                        as="div"
                        value={person.name}
                        editable={editable}
                        className="font-bold italic text-stone-900"
                        onChange={(val) => {
                          const nextGroups = [...groups];
                          const nextPeople = [...grp.people];
                          nextPeople[pIdx] = { ...person, name: val };
                          nextGroups[gIdx] = { ...grp, people: nextPeople };
                          onUpdatePage?.({ ...page, referenceGroups: nextGroups });
                        }}
                      />
                      <EditableText
                        as="div"
                        value={person.role}
                        editable={editable}
                        className="text-stone-700 mt-1"
                        onChange={(val) => {
                          const nextGroups = [...groups];
                          const nextPeople = [...grp.people];
                          nextPeople[pIdx] = { ...person, role: val };
                          nextGroups[gIdx] = { ...grp, people: nextPeople };
                          onUpdatePage?.({ ...page, referenceGroups: nextGroups });
                        }}
                      />
                      <EditableText
                        as="div"
                        value={person.relation}
                        editable={editable}
                        className="text-stone-700 mt-1"
                        onChange={(val) => {
                          const nextGroups = [...groups];
                          const nextPeople = [...grp.people];
                          nextPeople[pIdx] = { ...person, relation: val };
                          nextGroups[gIdx] = { ...grp, people: nextPeople };
                          onUpdatePage?.({ ...page, referenceGroups: nextGroups });
                        }}
                      />
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
 * cv-29 (Page 26): Contact Info (Smartphone Frame + QR Code + Social Links)
 */
export const ContactInfoQrPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const data = page.contactQrData;
  if (!data) return null;

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-14 flex flex-col items-center h-full">
        <div className="text-center mb-10">
          <EditableText
            as="h1"
            value={page.title || 'CONTACT INFO'}
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

        {/* Smartphone Bezel Frame */}
        <div className="w-[388px] h-[750px] border-[7px] border-[#808285] rounded-[42px] bg-white px-9 py-10 flex flex-col items-center justify-between shadow-sm">
          {/* Top Avatar + Name */}
          <div className="flex flex-col items-center text-center">
            <ImagePlaceholder
              asset={data.avatar}
              variant="avatar"
              editable={editable}
              onUpdateAsset={(updated) =>
                onUpdatePage?.({
                  ...page,
                  contactQrData: { ...data, avatar: updated },
                })
              }
              className="w-16 h-16 rounded-full border border-stone-200 mb-3"
            />
            <EditableText
              as="div"
              value={data.name}
              editable={editable}
              className="text-[11px] font-bold tracking-[0.14em] text-stone-800"
              onChange={(val) =>
                onUpdatePage?.({
                  ...page,
                  contactQrData: { ...data, name: val },
                })
              }
            />
            <EditableText
              as="div"
              value={data.certificationLine}
              editable={editable}
              className="text-[10.5px] tracking-[0.12em] text-stone-700 mt-1"
              onChange={(val) =>
                onUpdatePage?.({
                  ...page,
                  contactQrData: { ...data, certificationLine: val },
                })
              }
            />
          </div>

          {/* QR Code Placeholder */}
          <div className="my-2">
            <ImagePlaceholder
              asset={data.qrPlaceholder}
              variant="qr"
              editable={editable}
              onUpdateAsset={(updated) =>
                onUpdatePage?.({
                  ...page,
                  contactQrData: { ...data, qrPlaceholder: updated },
                })
              }
              className="w-[290px] h-[290px] rounded-2xl border-2 border-stone-800"
            />
          </div>

          {/* Contact Links */}
          <div className="w-full space-y-2.5 text-[10.5px] text-stone-700">
            {data.links.map((lk, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {lk.icon === 'phone' && <Phone className="w-4 h-4 text-stone-800 shrink-0" />}
                {lk.icon === 'mail' && <Mail className="w-4 h-4 text-stone-800 shrink-0" />}
                {lk.icon === 'globe' && <Globe className="w-4 h-4 text-stone-800 shrink-0" />}
                {lk.icon === 'linkedin' && (
                  <Linkedin className="w-4 h-4 text-stone-800 shrink-0" />
                )}
                <EditableText
                  value={lk.value}
                  editable={editable}
                  className="tracking-wider"
                  onChange={(val) => {
                    const nextLinks = [...data.links];
                    nextLinks[idx] = { ...lk, value: val };
                    onUpdatePage?.({
                      ...page,
                      contactQrData: { ...data, links: nextLinks },
                    });
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-36 h-2 bg-stone-300 rounded-full mt-2" />
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * Custom Section Page (Created in batches of 4 when clicking "+ Add 4 Pages" in Edit Mode)
 */
export const CustomSectionPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const blocks = page.customBlocks || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-14 flex flex-col h-full">
        <div className="text-center mb-10">
          <EditableText
            as="h1"
            value={page.title || 'CUSTOM SECTION'}
            editable={editable}
            className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B]"
            onChange={(val) => onUpdatePage?.({ ...page, title: val })}
          />
          <EditableText
            as="p"
            value={page.subtitle || ''}
            editable={editable}
            className="text-[11.5px] text-stone-600 mt-3 leading-relaxed max-w-xl mx-auto"
            onChange={(val) => onUpdatePage?.({ ...page, subtitle: val })}
          />
        </div>

        <div className="flex-1 flex flex-col justify-around space-y-8">
          {blocks.map((blk, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-8 items-center border border-stone-200 rounded-2xl p-6 bg-stone-50/50"
            >
              <div>
                <EditableText
                  as="h2"
                  value={blk.heading}
                  editable={editable}
                  className="text-[14px] font-bold text-stone-900"
                  onChange={(val) => {
                    const next = [...blocks];
                    next[idx] = { ...blk, heading: val };
                    onUpdatePage?.({ ...page, customBlocks: next });
                  }}
                />
                <EditableText
                  as="div"
                  value={blk.subheading}
                  editable={editable}
                  className="text-[11.5px] text-stone-500 mt-1"
                  onChange={(val) => {
                    const next = [...blocks];
                    next[idx] = { ...blk, subheading: val };
                    onUpdatePage?.({ ...page, customBlocks: next });
                  }}
                />
                <EditableText
                  as="p"
                  value={blk.body}
                  editable={editable}
                  className="text-[12px] text-stone-700 mt-3 leading-relaxed"
                  onChange={(val) => {
                    const next = [...blocks];
                    next[idx] = { ...blk, body: val };
                    onUpdatePage?.({ ...page, customBlocks: next });
                  }}
                />
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {blk.tags.map((tg, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full border border-sky-300 text-[10px] text-stone-700"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <ImagePlaceholder
                asset={blk.placeholder}
                variant="photo"
                editable={editable}
                onUpdateAsset={(updated) => {
                  const next = [...blocks];
                  next[idx] = { ...blk, placeholder: updated };
                  onUpdatePage?.({ ...page, customBlocks: next });
                }}
                className="w-full h-[210px] rounded-xl border border-stone-300"
              />
            </div>
          ))}
        </div>
      </div>
    </A4PageShell>
  );
};
