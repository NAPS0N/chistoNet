import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/profile': 'http://localhost:3001',
      '/api': 'http://localhost:3000',
    },
  },
});