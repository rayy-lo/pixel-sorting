import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import { useImage } from "../hooks/useImage";
import kittenImg from "../assets/kitten.jpg";

function App() {
  const imageData = useImage(kittenImg);
  console.log(imageData);

  return (
    <div className="App">
      <Sidebar />
      {imageData != null ? <Canvas imageData={imageData.data} /> : null}
    </div>
  );
}

export default App;
