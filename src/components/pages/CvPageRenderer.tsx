import React from 'react';
import { CvPageData } from '../../types/cv';
import {
  CoverFrontPage,
  TocSpreadPage,
  ThankYouSpreadPage,
  CoverBackPage,
} from './CoverAndSpreadPages';
import { ProfilePage, PracticalSkillPage } from './ProfileAndSkillPages';
import {
  ExperiencePage,
  TimelinePage,
  DocumentsPage,
} from './ExperienceAndTimelinePages';
import {
  ZigzagPortfolioPage,
  LogoPortfolioPage,
  AiPersonaPortfolioPage,
  InvestmentPortfolioPage,
  UnsortedDiagramPage,
  AssetPortfolioPage,
  PropertyPortfolioPage,
  AiArtSpreadPage,
} from './PortfolioPages';
import {
  SlicesOfLifePage,
  ContactReferencePage,
  ContactInfoQrPage,
  CustomSectionPage,
} from './LifeAndContactPages';

export interface CvPageRendererProps {
  page: CvPageData;
  footerPageNumber: number | null;
  editable?: boolean;
  onUpdatePage?: (updated: CvPageData) => void;
  onNavigateToContentPage?: (contentPageNum: number) => void;
}

export const CvPageRenderer: React.FC<CvPageRendererProps> = (props) => {
  const { page } = props;

  switch (page.kind) {
    case 'cover-front':
      return <CoverFrontPage {...props} />;
    case 'toc-left':
    case 'toc-right':
      return <TocSpreadPage {...props} />;
    case 'profile':
      return <ProfilePage {...props} />;
    case 'practical-skill':
      return <PracticalSkillPage {...props} />;
    case 'experience':
      return <ExperiencePage {...props} />;
    case 'timeline-single':
    case 'timeline-dual':
      return <TimelinePage {...props} />;
    case 'documents':
      return <DocumentsPage {...props} />;
    case 'portfolio-zigzag':
      return <ZigzagPortfolioPage {...props} />;
    case 'logo-portfolio':
      return <LogoPortfolioPage {...props} />;
    case 'ai-persona':
      return <AiPersonaPortfolioPage {...props} />;
    case 'investment-portfolio':
      return <InvestmentPortfolioPage {...props} />;
    case 'unsorted-diagram':
      return <UnsortedDiagramPage {...props} />;
    case 'asset-portfolio':
      return <AssetPortfolioPage {...props} />;
    case 'property-portfolio':
      return <PropertyPortfolioPage {...props} />;
    case 'ai-art-left':
    case 'ai-art-right':
      return <AiArtSpreadPage {...props} />;
    case 'slices-of-life':
      return <SlicesOfLifePage {...props} />;
    case 'contact-reference':
      return <ContactReferencePage {...props} />;
    case 'contact-info':
      return <ContactInfoQrPage {...props} />;
    case 'custom-section':
      return <CustomSectionPage {...props} />;
    case 'thank-you-left':
    case 'thank-you-right':
      return <ThankYouSpreadPage {...props} />;
    case 'cover-back':
      return <CoverBackPage {...props} />;
    default:
      return <CustomSectionPage {...props} />;
  }
};
