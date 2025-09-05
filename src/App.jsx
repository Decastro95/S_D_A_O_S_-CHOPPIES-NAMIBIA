import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import POSDashboard from "./pages/POSDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pos" element={<POSDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

