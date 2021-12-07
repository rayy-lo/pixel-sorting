import { Button } from "../components/Button";
import { Select } from "../components/Select";
import styles from "../styles/modules/Header.module.css";
interface HeaderProp {
  handleChange: React.ChangeEventHandler;
  sortImage: () => void;
  isSorting: boolean;
}

const { header } = styles;

const gridSizeOptions = ["32", "64", "128"];
const timeComplexityOptions = ["quadratic", "linear"];

function Header({ sortImage, handleChange, isSorting }: HeaderProp) {
  return (
    <div className={header}>
      <Select
        labelText="Grid Size: "
        htmlFor="numOfSquaresPerSide"
        handleChange={handleChange}
        options={gridSizeOptions}
      />
      <Select
        labelText="Time Complexity: "
        htmlFor="timeComplexity"
        handleChange={handleChange}
        options={timeComplexityOptions}
      />
      <Button handleClick={sortImage}>{isSorting ? "Pause" : "Start"}</Button>
    </div>
  );
}

export default Header;
