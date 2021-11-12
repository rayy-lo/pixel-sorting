import Sidebar from "./Sidebar";
import styles from "../styles/App.module.css";
import { CanvasContainer } from "./CanvasContainer";

const { app } = styles;

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <CanvasContainer />
    </div>
  );
}

export default App;
