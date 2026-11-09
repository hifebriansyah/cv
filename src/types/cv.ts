export type PageKind =
  | 'cover-front'
  | 'toc-left'
  | 'toc-right'
  | 'profile'
  | 'practical-skill'
  | 'experience'
  | 'timeline-single'
  | 'timeline-dual'
  | 'documents'
  | 'portfolio-zigzag'
  | 'logo-portfolio'
  | 'ai-persona'
  | 'investment-portfolio'
  | 'unsorted-diagram'
  | 'asset-portfolio'
  | 'property-portfolio'
  | 'ai-art-left'
  | 'ai-art-right'
  | 'slices-of-life'
  | 'contact-reference'
  | 'contact-info'
  | 'custom-section'
  | 'thank-you-left'
  | 'thank-you-right'
  | 'cover-back';

export interface PlaceholderAsset {
  id: string;
  label: string;
  sublabel?: string;
  badgeText?: string;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
  shape?: 'square' | 'circle' | 'rounded' | 'portrait' | 'landscape' | 'full';
  imageUrl?: string; // Optional user-uploaded data URL or R2 asset URL
}

export interface TocGroup {
  range: string;
  items: string[];
}

export interface SkillBarItem {
  name: string;
  percent: number;
}

export interface RoleWaveItem {
  title: string;
  color: string;
  percent: number;
}

export interface PracticalSkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Novice';
  underlined?: boolean;
  logo: PlaceholderAsset;
}

export interface PracticalSkillGroup {
  category: string;
  items: PracticalSkillItem[];
}

export interface ExperienceSubRole {
  title: string;
  period: string;
  underlined?: boolean;
}

export interface ExperienceItem {
  companyOrRole: string;
  subtitle?: string;
  period: string;
  logo: PlaceholderAsset;
  tags: { label: string; color: 'blue' | 'orange' | 'green' | 'red' | 'gray' }[];
  subRoles?: ExperienceSubRole[];
  responsibilitiesIntro?: string;
  responsibilities: string[];
  ResponsibilitiesNumbered?: boolean;
  achievementIntro?: string;
  achievements: string[];
  achievementsNumbered?: boolean;
}

export interface ExperienceSectionBlock {
  heading: string;
  items: ExperienceItem[];
}

export interface TimelineNode {
  title: string;
  subtitle: string;
  period: string;
  underlined?: boolean;
  dotColor: string;
  logo: PlaceholderAsset;
}

export interface TimelineColumn {
  pillLabel: string;
  pillColor: string;
  lineColor: string;
  side: 'left' | 'right' | 'center';
  nodes: TimelineNode[];
}

export interface CertificateDocItem {
  issuer: string;
  badgeCode: string;
  title: string;
  recipient: string;
  description: string;
  date: string;
  signerName: string;
  signerTitle: string;
  borderColor: string;
  accentColor: string;
  placeholder: PlaceholderAsset;
}

export interface ZigzagProjectItem {
  title: string;
  description: string;
  align: 'left' | 'right';
  preview: PlaceholderAsset;
}

export interface LogoCardItem {
  name: string;
  period: string;
  swatches: string[];
  logo: PlaceholderAsset;
}

export interface AiPersonaItem {
  name: string;
  ringColor: string;
  userPrompt: string;
  botReply: string;
  mainAvatar: PlaceholderAsset;
  leftAvatar: PlaceholderAsset;
  rightAvatar: PlaceholderAsset;
}

export interface InvestmentEntityItem {
  name: string;
  category: string;
  period: string;
  badgeNote?: string;
  logo: PlaceholderAsset;
}

export interface UnsortedClusterBox {
  id: string;
  title: string;
  items: string[];
}

export interface SliceOfLifeItem {
  caption: string;
  date: string;
  layout: 'wide-left' | 'tall-left' | 'wide-right' | 'square-left' | 'square-right' | 'pill-bottom';
  photo: PlaceholderAsset;
}

export interface ContactRefPerson {
  name: string;
  role: string;
  relation: string;
  companyLogo: PlaceholderAsset;
  avatar: PlaceholderAsset;
}

export interface CustomBlockItem {
  heading: string;
  subheading: string;
  body: string;
  tags: string[];
  placeholder: PlaceholderAsset;
}

export interface CvPageData {
  id: string;
  originalFile?: string;
  kind: PageKind;
  title?: string;
  subtitle?: string;
  hideFooterNumber?: boolean;
  lockedStructural?: boolean; // Cover, TOC, Thank You, Back Cover

  // TOC data
  terminalCommand?: string;
  cursiveHero?: string;
  tocGroups?: TocGroup[];

  // Page 4 (Profile) data
  profileData?: {
    fullName: string;
    credentials: string;
    tagline: string;
    experienceYears: string;
    photo: PlaceholderAsset;
    contacts: { icon: 'phone' | 'mail' | 'globe' | 'linkedin'; value: string }[];
    softSkills: SkillBarItem[];
    languages: SkillBarItem[];
    bioParagraphs: string[];
    roleSkills: RoleWaveItem[];
  };

  // Practical skills (Pages 5-7)
  skillGroups?: PracticalSkillGroup[];

  // Experience sections (Pages 8-11)
  experienceSections?: ExperienceSectionBlock[];

  // Timeline columns (Pages 12-14)
  timelineColumns?: TimelineColumn[];

  // Certificates (Page 15)
  certificateItems?: CertificateDocItem[];

  // Zigzag portfolio (Pages 16-17)
  zigzagProjects?: ZigzagProjectItem[];

  // Logo portfolio (Page 18)
  logoSections?: { heading: string; cards: LogoCardItem[] }[];

  // AI Persona (Page 19)
  personas?: AiPersonaItem[];

  // Business Investment (Page 20)
  investmentSections?: { heading: string; items: InvestmentEntityItem[] }[];

  // Unsorted Diagram (Page 21)
  unsortedBoxes?: UnsortedClusterBox[];

  // Asset Portfolio (Page 22)
  assetData?: {
    equipmentList: string[];
    equipmentPhotos: PlaceholderAsset[];
    deviceList: string[];
    devicePhotos: PlaceholderAsset[];
  };

  // Property Portfolio (Page 23)
  propertyData?: {
    regions: PlaceholderAsset[];
    listings: { handle: string; lines: string[] }[];
    featuredHandle: string;
    featuredName: string;
    featuredSpec: string;
    featuredPhoto: PlaceholderAsset;
  };

  // AI Art Spread (Pages 24-25)
  aiArtData?: {
    artPlaceholder: PlaceholderAsset;
    captionTitle?: string;
    captionSubtitle?: string;
  };

  // Slices of Life (Pages 26-27)
  slicesItems?: SliceOfLifeItem[];

  // Contact Reference (Page 28)
  referenceGroups?: { heading: string; people: ContactRefPerson[] }[];

  // Contact Info QR (Page 29)
  contactQrData?: {
    name: string;
    certificationLine: string;
    avatar: PlaceholderAsset;
    qrPlaceholder: PlaceholderAsset;
    links: { icon: 'phone' | 'mail' | 'globe' | 'linkedin'; value: string }[];
  };

  // Custom added pages (when adding 4 pages in Edit mode)
  customBlocks?: CustomBlockItem[];
}

export interface A2ImpositionPair {
  sheetIndex: number;
  sheetLetter: string; // 'a', 'b', 'c', 'd', 'e', ...
  frontFile: string;   // 'a1.png'
  backFile: string;    // 'a2.png'
  front: {
    topLeft: number | null;     // 1-based CV file index (1..N)
    topRight: number | null;
    bottomLeft: number | null;
    bottomRight: number | null;
    isBottomHalfDuplicate?: boolean;
  };
  back: {
    topLeft: number | null;
    topRight: number | null;
    bottomLeft: number | null;
    bottomRight: number | null;
    isBottomHalfDuplicate?: boolean;
  };
}
