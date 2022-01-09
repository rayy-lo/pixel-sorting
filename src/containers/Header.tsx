import { ChangeEventHandler } from 'react'
import { Button } from '../components/Button'
import { Select } from '../components/Select'
import { squareOptions, algoOptions } from '../utils/constants'
import styles from '../styles/modules/Header.module.css'

interface HeaderProp {
  handleChange: ChangeEventHandler
  startSort: () => void
}

const { header, buttonWrapper } = styles

const Header = ({ startSort, handleChange }: HeaderProp) => {
  return (
    <div className={header}>
      <Select
        labelText="Sorting Method"
        htmlFor="sortingMethod"
        handleChange={handleChange}
        options={algoOptions}
      />
      <Select
        labelText="Columns & Rows"
        htmlFor="squares"
        handleChange={handleChange}
        options={squareOptions}
      />
      <div className={buttonWrapper}>
        <Button type="button" handleClick={startSort}>
          Start
        </Button>
      </div>
    </div>
  )
}

export default Header
