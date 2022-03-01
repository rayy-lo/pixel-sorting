import { ChangeEventHandler } from 'react'
import styles from './Select.module.css'

interface SelectProp {
    /**
     * options to render for select
     */
    options: string[] | number[]
    onConfigChange: ChangeEventHandler
    htmlFor: string
    labelText: string
    disabled: boolean
}

const { container, label } = styles

export const Select = ({ disabled, labelText, options, onConfigChange, htmlFor }: SelectProp) => {
    return (
        <div className={container}>
            <label className={label} htmlFor={htmlFor}>
                {labelText}
            </label>
            <select
                disabled={disabled}
                aria-disabled={disabled}
                name={htmlFor}
                id={htmlFor}
                onChange={onConfigChange}
            >
                {options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
