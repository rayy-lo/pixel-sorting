import { forwardRef } from 'react'
import styles from '../../styles/modules/Canvas.module.css'

interface CanvasProp {
  /**
   * Width of canvas
   * @defaultValue 800
   */
  width?: number
  /**
   * Height of canvas
   * @defaultValue 800
   */
  height?: number
  /**
   * If canvas is in process of sorting
   */
  isSorting: boolean
}

type Ref = HTMLCanvasElement

export const Canvas = forwardRef<Ref, CanvasProp>(({ width = 800, height = 800 }, ref) => {
  const { container, canvas } = styles

  return (
    <div className={container}>
      <canvas ref={ref} className={canvas} width={width} height={height} id="canvas" />
    </div>
  )
})
