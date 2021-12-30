import { ChangeEventHandler } from 'react'
import { Button } from '../components/Button'
import { Select } from '../components/Select'
import styles from '../styles/modules/Header.module.css'
import { squareOptions, timeOptions } from '../utils/constants'

interface HeaderProp {
  handleChange: ChangeEventHandler
  handleSort: () => void
  handleStop: () => void
}

const { header } = styles

const Header = ({ handleSort, handleStop, handleChange }: HeaderProp) => {
  return (
    <div className={header}>
      <Select
        labelText="Columns & Rows: "
        htmlFor="squares"
        handleChange={handleChange}
        options={squareOptions}
      />
      <Select
        labelText="Time Complexity: "
        htmlFor="timeComplexity"
        handleChange={handleChange}
        options={timeOptions}
      />
      <div className="">
        <Button handleClick={handleSort}>Start</Button>
        <Button handleClick={handleStop}>Stop</Button>
      </div>
    </div>
  )
}

export default Header
