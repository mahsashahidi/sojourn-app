import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tour from "./pages/Tour";
function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </Router>
  );
}

export default App;
