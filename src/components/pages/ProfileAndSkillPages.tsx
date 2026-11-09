import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { PageComponentProps } from './CoverAndSpreadPages';
import { A4PageShell } from '../common/A4PageShell';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import { EditableText } from '../common/EditableText';
import { PlaceholderAsset } from '../../types/cv';

/**
 * cv-4.png (Page 1): Profile, Soft Skill, Language, and Role Based Skill (wave cards)
 */
export const ProfilePage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const data = page.profileData;
  if (!data) return null;

  const updatePhoto = (nextPhoto: PlaceholderAsset) => {
    onUpdatePage?.({
      ...page,
      profileData: { ...data, photo: nextPhoto },
    });
  };

  return (
    <A4PageShell
      footerPageNumber={footerPageNumber}
      showTopWedge={false}
      showBottomWedge={true}
    >
      <div className="w-full h-full grid grid-cols-[216px_1fr]">
        {/* Left Sidebar (#F2F2F2) */}
        <div className="bg-[#F2F2F2] h-full flex flex-col">
          {/* Diagonal clipped portrait photo at top-left */}
          <div
            className="w-full h-[212px] relative overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
            }}
          >
            <ImagePlaceholder
              asset={data.photo}
              variant="avatar"
              editable={editable}
              onUpdateAsset={updatePhoto}
              className="w-full h-full"
            />
          </div>

          {/* Contact items */}
          <div className="px-6 pt-5 space-y-3.5 text-[11px] text-stone-700">
            {data.contacts.map((c, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {c.icon === 'phone' && <Phone className="w-4 h-4 text-stone-700 shrink-0" />}
                {c.icon === 'mail' && <Mail className="w-4 h-4 text-stone-700 shrink-0" />}
                {c.icon === 'globe' && <Globe className="w-4 h-4 text-stone-700 shrink-0" />}
                <EditableText
                  value={c.value}
                  editable={editable}
                  className="tracking-wider font-normal break-all"
                  onChange={(val) => {
                    const nextContacts = [...data.contacts];
                    nextContacts[idx] = { ...c, value: val };
                    onUpdatePage?.({
                      ...page,
                      profileData: { ...data, contacts: nextContacts },
                    });
                  }}
                />
              </div>
            ))}
          </div>

          {/* SOFT SKILL */}
          <div className="px-6 pt-12">
            <h3 className="text-[15px] font-bold tracking-[0.2em] text-stone-800 mb-5">
              SOFT SKILL
            </h3>
            <div className="space-y-4">
              {data.softSkills.map((sk, idx) => (
                <div key={idx}>
                  <div className="text-[10.5px] tracking-wider text-stone-700 mb-1.5">
                    <EditableText
                      value={sk.name}
                      editable={editable}
                      onChange={(val) => {
                        const next = [...data.softSkills];
                        next[idx] = { ...sk, name: val };
                        onUpdatePage?.({
                          ...page,
                          profileData: { ...data, softSkills: next },
                        });
                      }}
                    />
                  </div>
                  <div className="w-full h-2.5 bg-stone-300/80 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-[#39C98A] rounded-sm"
                      style={{ width: `${sk.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LANGUAGE */}
          <div className="px-6 pt-12">
            <h3 className="text-[15px] font-bold tracking-[0.2em] text-stone-800 mb-5">
              LANGUAGE
            </h3>
            <div className="space-y-4">
              {data.languages.map((lang, idx) => (
                <div key={idx}>
                  <div className="text-[10.5px] tracking-wider text-stone-700 mb-1.5">
                    <EditableText
                      value={lang.name}
                      editable={editable}
                      onChange={(val) => {
                        const next = [...data.languages];
                        next[idx] = { ...lang, name: val };
                        onUpdatePage?.({
                          ...page,
                          profileData: { ...data, languages: next },
                        });
                      }}
                    />
                  </div>
                  <div className="w-full h-2.5 bg-stone-300/80 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-[#28A8E0] rounded-sm"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex flex-col h-full">
          {/* Top Diagonal Cream Banner */}
          <div
            className="w-full h-[185px] bg-[#F5E6D8] px-10 pt-10 relative"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 86% 72%, 0 100%)',
            }}
          >
            <div className="flex items-baseline flex-wrap gap-1">
              <EditableText
                as="h1"
                value={data.fullName}
                editable={editable}
                className="text-[36px] font-bold tracking-[0.14em] text-[#3C3C3B] leading-none"
                onChange={(val) =>
                  onUpdatePage?.({
                    ...page,
                    profileData: { ...data, fullName: val },
                  })
                }
              />
              <EditableText
                as="span"
                value={data.credentials}
                editable={editable}
                className="text-[13px] font-bold tracking-[0.12em] text-[#3C3C3B]"
                onChange={(val) =>
                  onUpdatePage?.({
                    ...page,
                    profileData: { ...data, credentials: val },
                  })
                }
              />
            </div>

            <div className="mt-3 inline-block">
              <div className="text-[12px] tracking-[0.15em] text-stone-400 font-light pb-1 border-b border-stone-400/60 pr-8">
                <EditableText
                  value={data.tagline}
                  editable={editable}
                  onChange={(val) =>
                    onUpdatePage?.({
                      ...page,
                      profileData: { ...data, tagline: val },
                    })
                  }
                />
              </div>
              <div className="text-[12px] tracking-[0.1em] text-stone-400 font-light pt-1">
                <EditableText
                  value={data.experienceYears}
                  editable={editable}
                  onChange={(val) =>
                    onUpdatePage?.({
                      ...page,
                      profileData: { ...data, experienceYears: val },
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* PROFILE section */}
          <div className="px-10 pt-4">
            <h2 className="text-[15px] font-bold tracking-[0.2em] text-[#3C3C3B] mb-3">
              PROFILE
            </h2>
            <div className="space-y-3 text-[12.5px] leading-relaxed text-stone-700">
              {data.bioParagraphs.map((p, idx) => (
                <EditableText
                  key={idx}
                  as="p"
                  value={p}
                  editable={editable}
                  className={idx === 1 ? 'font-medium text-stone-800' : ''}
                  onChange={(val) => {
                    const next = [...data.bioParagraphs];
                    next[idx] = val;
                    onUpdatePage?.({
                      ...page,
                      profileData: { ...data, bioParagraphs: next },
                    });
                  }}
                />
              ))}
            </div>
          </div>

          {/* ROLE BASED SKILL (2x3 wave cards) */}
          <div className="px-10 pt-9 flex-1">
            <h2 className="text-[15px] font-bold tracking-[0.2em] text-[#3C3C3B] mb-5">
              ROLE BASED SKILL
            </h2>

            <div className="grid grid-cols-2 gap-x-7 gap-y-6">
              {data.roleSkills.map((rs, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-[12.5px] tracking-[0.14em] text-stone-700 mb-2">
                    <EditableText
                      value={rs.title}
                      editable={editable}
                      onChange={(val) => {
                        const next = [...data.roleSkills];
                        next[idx] = { ...rs, title: val };
                        onUpdatePage?.({
                          ...page,
                          profileData: { ...data, roleSkills: next },
                        });
                      }}
                    />
                  </div>
                  <div className="w-full h-[156px] bg-[#F2F2F2] rounded-xl relative overflow-hidden">
                    {/* Wave SVG fill */}
                    <div
                      className="absolute bottom-0 left-0 right-0 transition-all"
                      style={{
                        height: `${rs.percent}%`,
                        backgroundColor: rs.color,
                      }}
                    >
                      <svg
                        viewBox="0 0 200 20"
                        preserveAspectRatio="none"
                        className="w-full h-4 -mt-3.5"
                        style={{ fill: rs.color }}
                      >
                        <path d="M0,10 C50,0 100,20 150,10 C175,5 190,8 200,10 L200,20 L0,20 Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </A4PageShell>
  );
};

/**
 * cv-5.png, cv-6.png, cv-7.png (Pages 2, 3, 4): Practical Skill (1/3, 2/3, 3/3)
 */
export const PracticalSkillPage: React.FC<PageComponentProps> = ({
  page,
  footerPageNumber,
  editable = false,
  onUpdatePage,
}) => {
  const groups = page.skillGroups || [];

  return (
    <A4PageShell footerPageNumber={footerPageNumber}>
      <div className="px-16 pt-20 pb-14 flex flex-col h-full">
        <EditableText
          as="h1"
          value={page.title || 'PRACTICAL SKILL'}
          editable={editable}
          className="text-[16px] font-bold tracking-[0.22em] text-[#3C3C3B] mb-9"
          onChange={(val) => onUpdatePage?.({ ...page, title: val })}
        />

        <div className="space-y-9">
          {groups.map((group, gIdx) => (
            <div key={gIdx}>
              <EditableText
                as="h2"
                value={group.category}
                editable={editable}
                className="text-[13px] tracking-[0.18em] text-stone-700 font-normal mb-5"
                onChange={(val) => {
                  const nextGroups = [...groups];
                  nextGroups[gIdx] = { ...group, category: val };
                  onUpdatePage?.({ ...page, skillGroups: nextGroups });
                }}
              />

              <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-4">
                    <ImagePlaceholder
                      asset={item.logo}
                      variant="logo"
                      editable={editable}
                      onUpdateAsset={(updatedLogo) => {
                        const nextGroups = [...groups];
                        const nextItems = [...group.items];
                        nextItems[iIdx] = { ...item, logo: updatedLogo };
                        nextGroups[gIdx] = { ...group, items: nextItems };
                        onUpdatePage?.({ ...page, skillGroups: nextGroups });
                      }}
                      className="w-[56px] h-[56px] rounded-xl border shrink-0 shadow-2xs"
                    />
                    <div className="flex flex-col min-w-0">
                      <EditableText
                        value={item.name}
                        editable={editable}
                        className={`text-[12.5px] font-bold text-stone-800 leading-snug ${
                          item.underlined ? 'underline decoration-stone-700 underline-offset-2' : ''
                        }`}
                        onChange={(val) => {
                          const nextGroups = [...groups];
                          const nextItems = [...group.items];
                          nextItems[iIdx] = { ...item, name: val };
                          nextGroups[gIdx] = { ...group, items: nextItems };
                          onUpdatePage?.({ ...page, skillGroups: nextGroups });
                        }}
                      />
                      <EditableText
                        value={item.level}
                        editable={editable}
                        className="text-[11.5px] text-stone-600 mt-0.5"
                        onChange={(val) => {
                          const nextGroups = [...groups];
                          const nextItems = [...group.items];
                          nextItems[iIdx] = {
                            ...item,
                            level: (val as 'Expert' | 'Advanced' | 'Novice') || 'Advanced',
                          };
                          nextGroups[gIdx] = { ...group, items: nextItems };
                          onUpdatePage?.({ ...page, skillGroups: nextGroups });
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
