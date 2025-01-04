import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./portfolio/myportfolio";
import GameSection from "./portfolio/memorygame/gamesection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/memoryGame" element={<GameSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
