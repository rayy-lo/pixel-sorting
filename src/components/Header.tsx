import { ChangeEventHandler } from 'react'
import { Select } from './Select/Select'
import { squareOptions } from '../utils/constants'
import styles from '../styles/modules/Header.module.css'

interface HeaderProp {
    onConfigChange: ChangeEventHandler
}

const { header, buttonWrapper, button } = styles

const Header = ({ onConfigChange }: HeaderProp) => {
    return (
        <div className={header}>
            <Select
                labelText="Difficulty"
                htmlFor="squares"
                onConfigChange={onConfigChange}
                options={squareOptions}
                disabled={false}
            />
        </div>
    )
}

export default Header
