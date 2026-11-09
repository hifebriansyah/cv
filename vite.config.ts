import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH: where the site is served. "/" in production (cv.situs.id); `npm run build:local` uses /for-fun/cv/ (local Apache, see .htaccess).
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
