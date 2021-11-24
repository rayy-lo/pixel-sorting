import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import { useMemoryCanvas } from "../hooks/useMemoryCanvas";
import kittenImg from "../assets/kitten.jpg";
import {
  associateDataWithIndex,
  getShuffledImageData,
} from "../containers/Canvas";
import { useEffect } from "react";

function App() {
  const imageData = useMemoryCanvas(kittenImg);
  const shuffledData = getShuffledImageData(imageData?.data!)!;

  return (
    <div className="App">
      <Sidebar />
      {imageData ? (
        <Canvas imageData={imageData} shuffledData={shuffledData} />
      ) : null}
    </div>
  );
}

export default App;
