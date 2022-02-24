import { forwardRef, memo } from 'react'
import { canvasWidth, canvasHeight } from '../utils/constants'
import styles from '../styles/modules/Canvas.module.css'

const Canvas = forwardRef<HTMLCanvasElement>((ref) => {
    const { container, canvas } = styles

    return (
        <div className={container}>
            <canvas
                ref={ref}
                className={canvas}
                width={canvasWidth}
                height={canvasHeight}
                id="canvas"
            />
        </div>
    )
})

export const MemoCanvas = memo(Canvas)
