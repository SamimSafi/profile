import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// GitHub Pages: use repo name as base (e.g. /portfolio/).
// Override with BASE_PATH env when your repo name differs (e.g. BASE_PATH=/my-repo/).
// Local dev: base stays '/' so it works at http://localhost:5173/
const base =
  process.env.BASE_PATH ||
  (process.env.NODE_ENV === 'production' ? '/portfolio/' : '/')

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
