import type { Meta, StoryObj } from '@storybook/react';
import { A2ImpositionSheet } from '../components/imposition/A2ImpositionSheet';
import { INITIAL_CV_PAGES } from '../data/initialCvData';
import { computeA2Imposition } from '../utils/imposition';

const meta: Meta<typeof A2ImpositionSheet> = {
  title: 'CV Booklet/A2 Print Imposition',
  component: A2ImpositionSheet,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof A2ImpositionSheet>;

const sheets32 = computeA2Imposition(32, false);

export const Paper1Front_a1: Story = {
  args: {
    sheetTitle: 'Paper 1 Front (a1.png)',
    fileName: 'a1.png',
    side: 'front',
    quadrants: sheets32[0].front,
    pages: INITIAL_CV_PAGES,
    showGuides: true,
  },
};

export const Paper1Back_a2: Story = {
  args: {
    sheetTitle: 'Paper 1 Back (a2.png)',
    fileName: 'a2.png',
    side: 'back',
    quadrants: sheets32[0].back,
    pages: INITIAL_CV_PAGES,
    showGuides: true,
  },
};
