import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gbu/', // 👈 repo name for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // cleaner aliasing
    },
  },
  server: {
    historyApiFallback: true, // Handle SPA routing fallback (for dev only)
  }
})
