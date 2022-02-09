import { ChangeEventHandler, useState } from 'react'
import { Select } from './Select'
import { squareOptions, algoOptions } from '../utils/constants'
import styles from '../styles/modules/Header.module.css'

interface HeaderProp {
    onConfigChange: ChangeEventHandler
    startSort: () => void
    stopSort: () => void
}

const { header, buttonWrapper, button } = styles

const Header = ({ startSort, stopSort, onConfigChange }: HeaderProp) => {
    const [isSorting, setIsSorting] = useState(false)

    const handleStopClick = () => {
        stopSort()
        setIsSorting(false)
    }
    const handleStartClick = () => {
        startSort()
        setIsSorting(true)
    }

    return (
        <div className={header}>
            <Select
                labelText="Sorting Method"
                htmlFor="sortingMethod"
                onConfigChange={onConfigChange}
                options={algoOptions}
                disabled={isSorting}
            />
            <Select
                labelText="Columns & Rows"
                htmlFor="squares"
                onConfigChange={onConfigChange}
                options={squareOptions}
                disabled={isSorting}
            />
            <div className={buttonWrapper}>
                <button
                    disabled={isSorting}
                    aria-disabled={isSorting}
                    className={button}
                    type="button"
                    onClick={handleStartClick}
                >
                    Start
                </button>
                <button
                    disabled={!isSorting}
                    aria-disabled={!isSorting}
                    className={button}
                    type="button"
                    onClick={handleStopClick}
                >
                    Stop
                </button>
            </div>
        </div>
    )
}

export default Header
