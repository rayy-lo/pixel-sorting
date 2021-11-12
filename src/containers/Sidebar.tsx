import { Dropdown } from "../components/Dropdown";
import '../styles/Sidebar.css';

const options: string[] = ['32x32', '64x64', '128x128']

function Sidebar() {
  return (
    <div className="Sidebar">
      <Dropdown label="Select Pixel Size:" options={options} />
    </div>
  );
}

export default Sidebar;
