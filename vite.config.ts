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
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset'
          const info = name.split('.')
          let extType = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
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
