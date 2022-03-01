import { useState } from 'react'
import { useTimer } from '../../hooks/useTimer'
import Timer from '../Timer/Timer'

import styles from './AnswerPanel.module.css'

const AnswerPanel = () => {
    const { container, button } = styles
    const [start, setNow] = useState<Date | null>(null)
    const { minutes, seconds } = useTimer(start)

    const onStartGame = () => {
        setNow(new Date())
    }

    return (
        <div className={container}>
            <Timer minutes={minutes} seconds={seconds} />
            <button
                disabled={!!start}
                aria-disabled={!!start}
                className={button}
                type="button"
                onClick={onStartGame}
            >
                Start
            </button>
        </div>
    )
}

export default AnswerPanel
