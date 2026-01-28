import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Hash routes (#projects, #experience, #contact) are in-page anchors on Home
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
