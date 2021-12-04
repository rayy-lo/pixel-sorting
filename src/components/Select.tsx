import "../styles/modules/Select.module.css";

interface SelectProp {
  options: string[];
  handleChange: React.ChangeEventHandler;
}

export const Select = ({ options, handleChange }: SelectProp) => {
  return (
    <>
      <select onChange={handleChange}>
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}x{option}
            </option>
          );
        })}
      </select>
    </>
  );
};
