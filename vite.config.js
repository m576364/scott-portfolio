import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const isPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: isPages ? '/scott-portfolio/' : '/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        projects: resolve(rootDir, 'projects.html'),
        certifications: resolve(rootDir, 'certifications.html'),
        security: resolve(rootDir, 'security.html'),
      },
    },
  },
});
