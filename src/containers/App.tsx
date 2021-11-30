import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import kittenImg from "../assets/kitten.jpg";
import { useState } from "react";

function App() {
  const [gridSize, setGridSize] = useState(5);
  return (
    <div className="App">
      <Sidebar />
      <Canvas gridSize={gridSize} imageSrc={kittenImg} />
    </div>
  );
}

export default App;
