import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      external: ['leaflet'],
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
        },
        globals: {
          leaflet: 'L'
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'leaflet']
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "leaflet/dist/leaflet.css";`
      }
    }
  }
})

