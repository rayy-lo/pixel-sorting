import { Button } from "../components/Button";
import { Select } from "../components/Select";
import styles from "../styles/modules/Header.module.css";
interface HeaderProp {
  handleChange: React.ChangeEventHandler;
  isSorting: boolean;
}

const gridSizeOptions: string[] = ["32", "64", "128"];

function Sidebar({ handleChange, isSorting }: HeaderProp) {
  return (
    <div className={styles.sidebar}>
      <Select
        labelText="Select Grid Size: "
        htmlFor="grid-size"
        handleChange={handleChange}
        options={gridSizeOptions}
      />
      <Button>{isSorting ? "Pause" : "Start"}</Button>
    </div>
  );
}

export default Sidebar;
