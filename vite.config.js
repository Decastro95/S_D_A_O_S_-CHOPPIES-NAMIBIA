import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'dashboard', 
  publicDir: 'dashboard/public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'dashboard/src'),
    },
  },
  server: {
    port: 5173,
    host: true,  // important for Codesandbox
    allowedHosts: ['.csb.app'] // allow any sandbox preview URL
  }
})

