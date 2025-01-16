import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'components': [
            './src/components/Provincia/Provincia.jsx',
            './src/components/Catamarca/Catamarca.jsx',
            './src/components/Fiambala/Fiambala.jsx',
            './src/components/Tinogasta/Tinogasta.jsx',
            './src/components/Antofagasta-De-La-Sierra/AntofagastaDeLaSierra.jsx',
            './src/components/Hospedaje/Hospedaje.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})

