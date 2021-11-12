import { Dropdown } from "../components/Dropdown";
import styles from "../styles/Sidebar.module.css";

const options: string[] = ["32x32", "64x64", "128x128"];

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Dropdown
        handleChange={(event) => console.log(event.target.value)}
        label="Select Pixel Size:"
        options={options}
      />
    </div>
  );
}

export default Sidebar;
