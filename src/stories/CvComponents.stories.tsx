import type { Meta, StoryObj } from '@storybook/react';
import { CvPageRenderer } from '../components/pages/CvPageRenderer';
import { INITIAL_CV_PAGES } from '../data/initialCvData';

const meta: Meta<typeof CvPageRenderer> = {
  title: 'CV Booklet/Page Components',
  component: CvPageRenderer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    editable: { control: 'boolean' },
    footerPageNumber: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof CvPageRenderer>;

export const FrontCover: Story = {
  args: {
    page: INITIAL_CV_PAGES[0],
    footerPageNumber: null,
    editable: false,
  },
};

export const ProfileAndRoleWaveSkills: Story = {
  args: {
    page: INITIAL_CV_PAGES[3],
    footerPageNumber: 1,
    editable: false,
  },
};

export const PracticalSkillsGrid: Story = {
  args: {
    page: INITIAL_CV_PAGES[4],
    footerPageNumber: 2,
    editable: false,
  },
};

export const WorkExperienceTimeline: Story = {
  args: {
    page: INITIAL_CV_PAGES[7],
    footerPageNumber: 5,
    editable: false,
  },
};

export const EducationTimeline: Story = {
  args: {
    page: INITIAL_CV_PAGES[11],
    footerPageNumber: 9,
    editable: false,
  },
};

export const AwardAndOrganizationDualTimeline: Story = {
  args: {
    page: INITIAL_CV_PAGES[12],
    footerPageNumber: 10,
    editable: false,
  },
};

export const CertificatesDocumentTablet: Story = {
  args: {
    page: INITIAL_CV_PAGES[14],
    footerPageNumber: 12,
    editable: false,
  },
};

export const SoftwarePortfolioZigzag: Story = {
  args: {
    page: INITIAL_CV_PAGES[15],
    footerPageNumber: 13,
    editable: false,
  },
};

export const LogoDesignPortfolio: Story = {
  args: {
    page: INITIAL_CV_PAGES[17],
    footerPageNumber: 15,
    editable: false,
  },
};

export const AiPersonaPortfolio: Story = {
  args: {
    page: INITIAL_CV_PAGES[18],
    footerPageNumber: 16,
    editable: false,
  },
};

export const UnsortedArchitectureDiagram: Story = {
  args: {
    page: INITIAL_CV_PAGES[20],
    footerPageNumber: 18,
    editable: false,
  },
};

export const ContactInfoSmartphoneQr: Story = {
  args: {
    page: INITIAL_CV_PAGES[28],
    footerPageNumber: 26,
    editable: false,
  },
};
