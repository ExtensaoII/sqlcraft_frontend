import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index.tsx'
import Missions from './pages/Missions.tsx'
import Mission from './pages/Mission.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/mission/:id" element={<Mission />} />
    </Routes>
  )
}

export default App
