import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Missions from "./pages/Missions";
import Mission from "./pages/Mission";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <>
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/mission/:id" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
