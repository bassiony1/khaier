import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/our-mission" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
