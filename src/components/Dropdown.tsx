type DropdownProp = {
  options: string[];
  label: string;
};

export const Dropdown = ({ options, label }: DropdownProp) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <select>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
};
