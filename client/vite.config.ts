import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/profile': 'http://localhost:3001',
      '/api/products': 'http://localhost:4000/',
      '/api/chat': 'http://localhost:5000/',
      '/api/news': 'http://localhost:6000/',
      '/api': 'http://localhost:3000',
    },
  },
});
