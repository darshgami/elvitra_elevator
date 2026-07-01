import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    compression({ algorithm: 'brotliCompress' }),
    compression({ algorithm: 'gzip' })
  ],
  build: {
    target: 'esnext',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('framer-motion')) return 'vendor-framer-motion'
            if (id.includes('lucide-react')) return 'vendor-lucide'
            return 'vendor'
          }
        }
      }
    }
  }
})
