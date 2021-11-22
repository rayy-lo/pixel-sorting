import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import { useMemoryCanvas } from "../hooks/useMemoryCanvas";
import kittenImg from "../assets/kitten.jpg";

// 1. create image with src
// 2. once created, draw image on canvas
// 3. getImageData from canvas
// 4. Shuffle pixelArray
// 5. pass pixel array to render on canvas

function App() {
  const imageData = useMemoryCanvas(kittenImg);

  return (
    <div className="App">
      <Sidebar />
      {imageData ? <Canvas imageData={imageData} /> : null}
    </div>
  );
}

export default App;
