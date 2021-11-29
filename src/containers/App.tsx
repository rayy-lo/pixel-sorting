import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas/Canvas";
import kittenImg from "../assets/kitten.jpg";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Canvas imageSrc={kittenImg} />
    </div>
  );
}

export default App;
