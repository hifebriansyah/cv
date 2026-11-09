import React, { useState } from 'react';
import { Component, Sliders, Eye, Code2, Sparkles } from 'lucide-react';
import { INITIAL_CV_PAGES } from '../data/initialCvData';
import { A4PageShell } from '../components/common/A4PageShell';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { CvPageRenderer } from '../components/pages/CvPageRenderer';
import { A2ImpositionSheet } from '../components/imposition/A2ImpositionSheet';
import { computeA2Imposition } from '../utils/imposition';

interface StoryEntry {
  id: string;
  category: 'Atoms & Shells' | 'Cover & TOC Spreads' | 'CV Content Pages' | 'Portfolio Pages' | 'A2 Imposition';
  name: string;
  description: string;
  sourceFile: string;
  render: (editable: boolean) => React.ReactNode;
}

export const StorybookCatalogView: React.FC = () => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>('profile-page');
  const [editableProps, setEditableProps] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0.72);

  const sampleA2 = computeA2Imposition(32, false)[0];

  const stories: StoryEntry[] = [
    {
      id: 'image-placeholder',
      category: 'Atoms & Shells',
      name: 'ImagePlaceholder',
      description:
        'Isolated placeholder component supporting logo, avatar, certificate, QR code, and full-bleed artwork variants with click-to-upload replacement.',
      sourceFile: 'src/components/common/ImagePlaceholder.tsx',
      render: (ed) => (
        <div className="bg-white p-10 rounded-2xl shadow-xl grid grid-cols-3 gap-6 w-[720px]">
          <ImagePlaceholder
            asset={{
              id: 'demo-1',
              label: 'Company Logo',
              sublabel: '64×64 Vector Slot',
              bgColor: '#EFF6FF',
              textColor: '#1D4ED8',
            }}
            variant="logo"
            editable={ed}
            className="w-44 h-36 rounded-xl border"
          />
          <ImagePlaceholder
            asset={{
              id: 'demo-2',
              label: 'Portrait Avatar',
              sublabel: 'Circular Frame',
              bgColor: '#FEF3C7',
              textColor: '#B45309',
            }}
            variant="avatar"
            editable={ed}
            className="w-36 h-36 rounded-full border mx-auto"
          />
          <ImagePlaceholder
            asset={{
              id: 'demo-3',
              label: 'WhatsApp QR Code',
              sublabel: '+62-898-9090-112',
              bgColor: '#F3F4F6',
              textColor: '#111827',
            }}
            variant="qr"
            editable={ed}
            className="w-44 h-36 rounded-xl border"
          />
        </div>
      ),
    },
    {
      id: 'a4-page-shell',
      category: 'Atoms & Shells',
      name: 'A4PageShell',
      description:
        'Standard 794×1123px A4 portrait container with slanted warm-cream (#F5E6D8) header/footer wedges and dynamic page numbering.',
      sourceFile: 'src/components/common/A4PageShell.tsx',
      render: () => (
        <A4PageShell footerPageNumber={1}>
          <div className="flex-1 flex items-center justify-center text-stone-400 font-mono text-sm">
            A4PageShell Content Slot (794px × 1123px)
          </div>
        </A4PageShell>
      ),
    },
    {
      id: 'cover-front',
      category: 'Cover & TOC Spreads',
      name: 'CoverFrontPage (cv-1)',
      description: 'Front cover featuring centered sky-blue "hf" monogram on #F5E6D8 cream.',
      sourceFile: 'src/components/pages/CoverAndSpreadPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[0]} footerPageNumber={null} editable={ed} />
      ),
    },
    {
      id: 'toc-spread',
      category: 'Cover & TOC Spreads',
      name: 'TocSpreadPage (cv-2 & cv-3)',
      description: 'macOS Terminal Window "Hello World" Table of Contents spread.',
      sourceFile: 'src/components/pages/CoverAndSpreadPages.tsx',
      render: (ed) => (
        <div className="flex shadow-2xl">
          <CvPageRenderer page={INITIAL_CV_PAGES[1]} footerPageNumber={null} editable={ed} />
          <CvPageRenderer page={INITIAL_CV_PAGES[2]} footerPageNumber={null} editable={ed} />
        </div>
      ),
    },
    {
      id: 'profile-page',
      category: 'CV Content Pages',
      name: 'ProfilePage (cv-4)',
      description:
        'Sidebar portrait + contact list + Soft Skill/Language bars + Role Based Skill wave cards.',
      sourceFile: 'src/components/pages/ProfileAndSkillPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[3]} footerPageNumber={1} editable={ed} />
      ),
    },
    {
      id: 'practical-skill-page',
      category: 'CV Content Pages',
      name: 'PracticalSkillPage (cv-5..7)',
      description: '3-column categorized skill grid with rounded-square logo placeholders.',
      sourceFile: 'src/components/pages/ProfileAndSkillPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[4]} footerPageNumber={2} editable={ed} />
      ),
    },
    {
      id: 'experience-page',
      category: 'CV Content Pages',
      name: 'ExperiencePage (cv-8..11)',
      description:
        'Work, Internship & Contract Experience layout with role timeline dots and hashtag pills.',
      sourceFile: 'src/components/pages/ExperienceAndTimelinePages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[7]} footerPageNumber={5} editable={ed} />
      ),
    },
    {
      id: 'timeline-page',
      category: 'CV Content Pages',
      name: 'TimelinePage (cv-12..14)',
      description: 'Single (Education) and Dual (Award/Org, Certification/Course) dashed timelines.',
      sourceFile: 'src/components/pages/ExperienceAndTimelinePages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[12]} footerPageNumber={10} editable={ed} />
      ),
    },
    {
      id: 'documents-page',
      category: 'CV Content Pages',
      name: 'DocumentsPage (cv-15)',
      description: 'Tablet bezel frame showcasing 6 professional certificates.',
      sourceFile: 'src/components/pages/ExperienceAndTimelinePages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[14]} footerPageNumber={12} editable={ed} />
      ),
    },
    {
      id: 'zigzag-portfolio',
      category: 'Portfolio Pages',
      name: 'ZigzagPortfolioPage (cv-16..17)',
      description: 'Alternating left/right project showcase for Software & PWA portfolios.',
      sourceFile: 'src/components/pages/PortfolioPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[15]} footerPageNumber={13} editable={ed} />
      ),
    },
    {
      id: 'logo-portfolio',
      category: 'Portfolio Pages',
      name: 'LogoPortfolioPage (cv-18)',
      description: 'Present & Legacy logo cards with color swatch strips.',
      sourceFile: 'src/components/pages/PortfolioPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[17]} footerPageNumber={15} editable={ed} />
      ),
    },
    {
      id: 'ai-persona',
      category: 'Portfolio Pages',
      name: 'AiPersonaPortfolioPage (cv-19)',
      description: 'Tri-circle ornamental persona frames + sample chat dialogs.',
      sourceFile: 'src/components/pages/PortfolioPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[18]} footerPageNumber={16} editable={ed} />
      ),
    },
    {
      id: 'unsorted-diagram',
      category: 'Portfolio Pages',
      name: 'UnsortedDiagramPage (cv-21)',
      description: 'Node-connected green circuit architecture diagram across 8 project categories.',
      sourceFile: 'src/components/pages/PortfolioPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[20]} footerPageNumber={18} editable={ed} />
      ),
    },
    {
      id: 'contact-qr',
      category: 'CV Content Pages',
      name: 'ContactInfoQrPage (cv-29)',
      description: 'Smartphone bezel card with avatar, WhatsApp QR code placeholder, and links.',
      sourceFile: 'src/components/pages/LifeAndContactPages.tsx',
      render: (ed) => (
        <CvPageRenderer page={INITIAL_CV_PAGES[28]} footerPageNumber={26} editable={ed} />
      ),
    },
    {
      id: 'a2-imposition-sheet',
      category: 'A2 Imposition',
      name: 'A2ImpositionSheet (a1.png)',
      description: '2×2 A4 grid on an A2 sheet with horizontal cut line and center fold line.',
      sourceFile: 'src/components/imposition/A2ImpositionSheet.tsx',
      render: () => (
        <A2ImpositionSheet
          sheetTitle="Paper 1 Front (a1.png)"
          fileName="a1.png"
          side="front"
          quadrants={sampleA2.front}
          pages={INITIAL_CV_PAGES}
          showGuides={true}
        />
      ),
    },
  ];

  const activeStory = stories.find((s) => s.id === selectedStoryId) || stories[0];
  const categories = Array.from(new Set(stories.map((s) => s.category)));

  return (
    <div className="min-h-[calc(100vh-64px)] bg-stone-950 text-stone-100 grid grid-cols-1 lg:grid-cols-[300px_1fr]">
      {/* Left Sidebar: Component Tree */}
      <div className="bg-stone-900 border-r border-stone-800 p-4 flex flex-col">
        <div className="flex items-center gap-2 px-2 pb-4 border-b border-stone-800">
          <Sparkles className="w-5 h-5 text-pink-400" />
          <div>
            <div className="text-sm font-bold text-white">Component Storybook</div>
            <div className="text-[11px] text-stone-400">
              Isolated UI Components & `.stories.tsx`
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-5">
          {categories.map((cat) => (
            <div key={cat}>
              <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                {cat}
              </div>
              <div className="space-y-1">
                {stories
                  .filter((s) => s.category === cat)
                  .map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedStoryId(st.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2 transition-colors ${
                        st.id === activeStory.id
                          ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-semibold'
                          : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                      }`}
                    >
                      <Component className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{st.name}</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Stage: Controls + Isolated Component Canvas */}
      <div className="flex flex-col">
        <div className="bg-stone-900/80 border-b border-stone-800 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white">{activeStory.name}</h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-400 flex items-center gap-1">
                <Code2 className="w-3 h-3" /> {activeStory.sourceFile}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">{activeStory.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setEditableProps((e) => !e)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border ${
                editableProps
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-stone-800 border-stone-700 text-stone-300'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Prop `editable`: {editableProps ? 'true' : 'false'}
            </button>

            <div className="flex items-center gap-2 bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700">
              <Eye className="w-3.5 h-3.5 text-stone-400" />
              <input
                type="range"
                min={0.35}
                max={1}
                step={0.05}
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-20 accent-pink-500"
              />
              <span className="text-xs font-mono text-stone-300">
                {Math.round(scale * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Isolated Canvas */}
        <div className="flex-1 overflow-auto p-10 flex items-start justify-center bg-[radial-gradient(#292524_1px,transparent_1px)] [background-size:16px_16px]">
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
          >
            {activeStory.render(editableProps)}
          </div>
        </div>
      </div>
    </div>
  );
};
