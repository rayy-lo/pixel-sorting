import Sidebar from "./Sidebar";
import "../styles/App.css";
import { CanvasContainer } from "./CanvasContainer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <CanvasContainer />
    </div>
  );
}

export default App;
