import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './hooks/useTheme'
import './styles/globals.css'

// Vite's BASE_URL matches the `base` in vite.config.
// React Router basename must have a leading slash and no trailing slash.
// If BASE_URL is './' or '/', basename should be '/'.
const getBasename = () => {
  const base = import.meta.env.BASE_URL
  if (base === './' || base === '/' || !base) return '/'
  // Ensure it starts with / and remove trailing slash
  return (base.startsWith('/') ? base : '/' + base).replace(/\/$/, '')
}

const basename = getBasename()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
