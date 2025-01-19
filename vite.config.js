import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v': {
        target: 'https://api.digikala.com',
        changeOrigin: true,
      },
    },
  },
});
