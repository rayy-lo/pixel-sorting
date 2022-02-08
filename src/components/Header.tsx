import { ChangeEventHandler, useState } from 'react'
import { Button } from './Button'
import { Select } from './Select'
import { squareOptions, algoOptions } from '../utils/constants'
import styles from '../styles/modules/Header.module.css'

interface HeaderProp {
    handleChange: ChangeEventHandler
    startSort: () => void
    stopSort: () => void
}

const { header, buttonWrapper } = styles

const Header = ({ startSort, stopSort, handleChange }: HeaderProp) => {
    const [isSorting, setIsSorting] = useState(false)

    return (
        <div className={header}>
            <Select
                labelText="Sorting Method"
                htmlFor="sortingMethod"
                handleChange={handleChange}
                options={algoOptions}
                disabled={isSorting}
            />
            <Select
                labelText="Columns & Rows"
                htmlFor="squares"
                handleChange={handleChange}
                options={squareOptions}
                disabled={isSorting}
            />
            <div className={buttonWrapper}>
                <Button
                    type="button"
                    disabled={isSorting}
                    handleClick={() => {
                        startSort()
                        setIsSorting(true)
                    }}
                >
                    Start
                </Button>
                <Button
                    disabled={!isSorting}
                    type="button"
                    handleClick={() => {
                        stopSort()
                        setIsSorting(false)
                    }}
                >
                    Stop
                </Button>
            </div>
        </div>
    )
}

export default Header
