import { Button } from "../components/Button";
import { Select } from "../components/Select";
import styles from "../styles/modules/Header.module.css";
interface HeaderProp {
  handleChange: React.ChangeEventHandler;
  isSorting: boolean;
}

const gridSizeOptions = ["32", "64", "128"];
const timeComplexityOptions = ["quadratic", "linear"];

function Sidebar({ handleChange, isSorting }: HeaderProp) {
  return (
    <div className={styles.sidebar}>
      <Select
        labelText="Grid Size: "
        htmlFor="grid-size"
        handleChange={handleChange}
        options={gridSizeOptions}
      />
      <Select
        labelText="Time Complexity: "
        htmlFor="time-complexity"
        handleChange={handleChange}
        options={timeComplexityOptions}
      />
      <Button>{isSorting ? "Pause" : "Start"}</Button>
    </div>
  );
}

export default Sidebar;
