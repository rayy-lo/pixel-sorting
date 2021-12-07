import Header from "./Header";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import kittenImg from "../assets/kitten.jpg";
import { useState } from "react";

function App() {
  const [canvasConfig, setCanvasConfig] = useState({
    numOfSquaresPerSide: "32",
    timeComplexity: "quadratic",
  });
  const [isSorting, setIsSorting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCanvasConfig({
      ...canvasConfig,
      [event.target.name]: event.target.value,
    });
  };

  const sortImage = () => {
    console.log("sort image");
  };

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        sortImage={sortImage}
        isSorting={isSorting}
      />
      <Canvas
        canvasConfig={canvasConfig}
        isSorting={isSorting}
        imageSrc={kittenImg}
      />
    </div>
  );
}

export default App;
