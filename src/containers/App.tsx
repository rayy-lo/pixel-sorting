import Header from "./Header";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import kittenImg from "../assets/kitten.jpg";
import { useState } from "react";

function App() {
  const [gridSize, setGridSize] = useState(32);
  const [timeComplexity, setTimeComplexity] = useState("");
  const [isSorting, setIsSorting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGridSize(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <Header handleChange={handleChange} isSorting={isSorting} />
      <Canvas
        isSorting={isSorting}
        timeComplexity={timeComplexity}
        gridSize={gridSize}
        imageSrc={kittenImg}
      />
    </div>
  );
}

export default App;
