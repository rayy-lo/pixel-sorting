import styles from '../styles/modules/Select.module.css'

interface SelectProp {
  /**
   * options to render for select
   */
  options: string[] | number[]
  handleChange: React.ChangeEventHandler
  htmlFor: string
  labelText: string
}

const { container, label } = styles

export var Select = function ({ labelText, options, handleChange, htmlFor }: SelectProp) {
  return (
    <div className={container}>
      <label className={label} htmlFor={htmlFor}>
        {labelText}
      </label>
      <select name={htmlFor} id={htmlFor} onChange={handleChange}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
