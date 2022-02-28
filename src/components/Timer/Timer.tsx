import styles from './Timer.module.css'

interface TimerProps {
    minutes: string
    seconds: string
}

const Timer = ({ minutes, seconds }: TimerProps) => {
    const { container } = styles

    return (
        <div className={container}>
            <span>{minutes}</span>:<span>{seconds}</span>
        </div>
    )
}

export default Timer
