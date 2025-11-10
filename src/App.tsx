import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index.tsx'
import Missions from './pages/Missions.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>
  )
}

export default App
