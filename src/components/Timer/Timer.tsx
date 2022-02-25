import { useEffect, useState } from 'react'
import { useTimer } from '../../hooks/useTimer'
import styles from './Timer.module.css'

interface TimerProps {
    gameStarted: boolean
}

const Timer = ({ gameStarted }: TimerProps) => {
    const { container } = styles
    const { minutes, seconds } = useTimer(gameStarted)

    return (
        <div className={container}>
            <span>{minutes}</span>:<span>{seconds}</span>
        </div>
    )
}

export default Timer
