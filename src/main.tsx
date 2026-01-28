import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'

// Vite's BASE_URL matches the `base` in vite.config ('' for /, or e.g. '/portfolio/' for GH Pages).
// React Router basename must have a leading slash and no trailing slash.
const base = import.meta.env.BASE_URL
const basename = base === '/' ? '/' : base.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
