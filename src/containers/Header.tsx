import { Select } from "../components/Select";
import styles from "../styles/modules/Header.module.css";

interface HeaderProp {
  handleChange: React.ChangeEventHandler;
}

const options: string[] = ["32", "64", "128"];

function Sidebar({ handleChange }: HeaderProp) {
  return (
    <div className={styles.sidebar}>
      <label htmlFor="">Size of Grid:</label>
      <Select handleChange={handleChange} options={options} />
    </div>
  );
}

export default Sidebar;
