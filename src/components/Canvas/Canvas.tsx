import { forwardRef, memo } from 'react'
import { canvasWidth, canvasHeight } from '../../utils/constants'
import styles from './Canvas.module.css'

const Canvas = forwardRef<HTMLCanvasElement>((props, ref) => {
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
