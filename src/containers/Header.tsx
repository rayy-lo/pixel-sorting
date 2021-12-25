import { ChangeEventHandler } from 'react'
import { Button } from '../components/Button'
import { Select } from '../components/Select'
import styles from '../styles/modules/Header.module.css'

interface HeaderProp {
  handleChange: ChangeEventHandler
  sortImage: () => void
}

const { header } = styles

const gridSizeOptions = ['32', '64', '128']
const timeComplexityOptions = ['quadratic', 'linear']

const Header = ({ sortImage, handleChange }: HeaderProp) => {
  return (
    <div className={header}>
      <Select
        labelText="Grid Size: "
        htmlFor="numOfSquaresPerSide"
        handleChange={handleChange}
        options={gridSizeOptions}
      />
      <Select
        labelText="Time Complexity: "
        htmlFor="timeComplexity"
        handleChange={handleChange}
        options={timeComplexityOptions}
      />
      <Button handleClick={sortImage}>Sort</Button>
    </div>
  )
}

export default Header
