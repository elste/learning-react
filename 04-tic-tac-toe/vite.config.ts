import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2023',
    // opzionale: per output più moderno
    minify: 'esbuild',
    sourcemap: true
  }
})
