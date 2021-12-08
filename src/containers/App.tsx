import Header from "./Header";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import kittenImg from "../assets/kitten.jpg";
import { useRef, useState } from "react";
import { useCanvas } from "../hooks/useCanvas";

function App() {
  const [canvasConfig, setCanvasConfig] = useState({
    numOfSquaresPerSide: 32,
    timeComplexity: "quadratic",
  });
  const [isSorting, setIsSorting] = useState(false);

  const canvasRef = useCanvas(kittenImg, canvasConfig.numOfSquaresPerSide);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCanvasConfig({
      ...canvasConfig,
      [event.target.name]: Number(value) ? Number(value) : value,
    });
  };

  const sortImage = () => {
    console.log(canvasRef.current);
  };

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        sortImage={sortImage}
        isSorting={isSorting}
      />
      <Canvas ref={canvasRef} isSorting={isSorting} />
    </div>
  );
}

export default App;
