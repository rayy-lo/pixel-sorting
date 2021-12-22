import { ChangeEventHandler } from 'react'
import styles from '../styles/modules/Select.module.css'

interface SelectProp {
  /**
   * options to render for select
   */
  options: string[] | number[]
  handleChange: ChangeEventHandler
  htmlFor: string
  labelText: string
}

const { container, label } = styles

export const Select = ({ labelText, options, handleChange, htmlFor }: SelectProp) => {
  return (
    <div className={container}>
      <label className={label} htmlFor={htmlFor}>
        {labelText}
      </label>
      <select name={htmlFor} id={htmlFor} onChange={handleChange}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
