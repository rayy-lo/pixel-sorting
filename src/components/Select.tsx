import "../styles/modules/Select.module.css";

interface SelectProp {
  /**
   * options to render for select
   */
  options: string[] | number[];
  handleChange: React.ChangeEventHandler;
  htmlFor: string;
  labelText: string;
}

export const Select = ({
  labelText,
  options,
  handleChange,
  htmlFor,
}: SelectProp) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}</label>
      <select name={htmlFor} id={htmlFor} onChange={handleChange}>
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
