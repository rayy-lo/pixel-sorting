import { forwardRef, memo } from 'react'
import styles from '../styles/modules/Canvas.module.css'

interface CanvasProp {
  /**
   * Width of canvas
   * @defaultValue 600
   */
  width: number
  /**
   * Height of canvas
   * @defaultValue 600
   */
  height: number
}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProp>(({ width, height }, ref) => {
  const { container, canvas } = styles

  return (
    <div className={container}>
      <canvas ref={ref} className={canvas} width={width} height={height} id="canvas" />
    </div>
  )
})

export const MemoCanvas = memo(Canvas)
