import styles from './Timer.module.css'

interface TimerProps {
    time: Date
}

const Timer = ({ time }: TimerProps) => {
    const { container } = styles

    const minutes = 0
    const seconds = 0
    const milliseconds = 0

    return (
        <div className={container}>
            <span>00</span>:<span>00</span>:<span>00</span>
        </div>
    )
}

export default Timer
