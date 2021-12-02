import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import kittenImg from "../assets/kitten.jpg";
import { useState } from "react";

function App() {
  const [gridSize, setGridSize] = useState(32);

  return (
    <div className="App">
      <Sidebar
        handleChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setGridSize(parseInt(event.target.value));
        }}
      />
      <Canvas gridSize={gridSize} imageSrc={kittenImg} />
    </div>
  );
}

export default App;
