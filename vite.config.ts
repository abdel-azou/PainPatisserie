import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // Bien pour GitHub Pages
  build: {
    // Assurez-vous que les assets sont correctement liés
    assetsDir: 'assets',
    // Génération du fichier 404.html pour la redirection SPA
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion']
        }
      }
    }
  }
});
