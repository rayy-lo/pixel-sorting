import { useState } from 'react'
import Timer from '../Timer/Timer'
import styles from './AnswerPanel.module.css'

const AnswerPanel = () => {
    const { container, button } = styles

    const [gameStarted, setGameStarted] = useState(false)

    const handleStart = () => {
        setGameStarted(true)
    }

    return (
        <div className={container}>
            {/* <h2>What Is This?</h2> */}
            <Timer gameStarted={gameStarted} />
            <button
                disabled={gameStarted}
                aria-disabled={gameStarted}
                className={button}
                type="button"
                onClick={handleStart}
            >
                Start
            </button>
        </div>
    )
}

export default AnswerPanel
