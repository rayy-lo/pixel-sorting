import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import { useMemoryCanvas } from "../hooks/useMemoryCanvas";
import kittenImg from "../assets/kitten.jpg";

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
