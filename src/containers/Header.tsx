import { Dropdown } from "../components/Dropdown";
import styles from "../styles/modules/Header.module.css";

interface SidebarProp {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options: string[] = ["32", "64", "128"];

function Sidebar({ handleChange }: SidebarProp) {
  return (
    <div className={styles.sidebar}>
      <Dropdown
        handleChange={handleChange}
        label="Grid Size: "
        options={options}
      />
    </div>
  );
}

export default Sidebar;
