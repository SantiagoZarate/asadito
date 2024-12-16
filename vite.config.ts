import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/jumbo': {
        target: 'https://www.jumbo.com.ar',
        changeOrigin: true,
        secure: process.env.NODE_ENV === 'production',
        rewrite: (path) =>
          path.replace(
            /^\/api\/jumbo/,
            '/api/catalog_system/pub/products/search/',
          ),
      },
    },
  },
});
