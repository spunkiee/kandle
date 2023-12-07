import globals from "./styles/global";
import "../src/styles/App.css";
import LeftSection from "./components/LeftSection";
import NavBar from "./components/NavBar";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div style={globals.bgColor1} className="w-full flex flex-row">
      <LeftSection />
      <div className="flex flex-1 flex-col">
        <NavBar />
        <div className="p-12 pt-8">
          <GameBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
