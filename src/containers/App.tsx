import Sidebar from "./Sidebar";
import "../styles/App.css";
import { Canvas } from "./Canvas";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Canvas />
    </div>
  );
}

export default App;
