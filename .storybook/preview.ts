import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark-studio',
      values: [
        { name: 'dark-studio', value: '#1c1917' },
        { name: 'warm-cream', value: '#f5e6d8' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
