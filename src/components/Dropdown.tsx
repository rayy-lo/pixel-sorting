import React from "react";
import "../styles/modules/Dropdown.module.css";

interface DropdownProp {
  options: string[];
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown = ({ options, label, handleChange }: DropdownProp) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <select onChange={handleChange}>
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};
