import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// GitHub Pages: use repo name as base (e.g. /portfolio/).
// Override with BASE_PATH env when your repo name differs (e.g. BASE_PATH=/my-repo/).
// Local dev: base stays '/' so it works at http://localhost:5173/
const base = process.env.BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
