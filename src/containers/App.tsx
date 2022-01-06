import { useState, ChangeEvent } from 'react'

import Header from './Header'
import { MemoCanvas } from './Canvas'
import { CanvasConfig } from '../types'
import { useCanvas } from '../utils/useCanvas'

const App = () => {
  const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
    /**
     * Number of rows and columns
     */
    squares: 5,
    sortingMethod: 'naive',
    height: 600,
    width: 600,
  })

  const [canvasRef, pieces] = useCanvas(canvasConfig.squares)

  const worker = new Worker(new URL('../workers/sorting.ts', import.meta.url))

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setCanvasConfig({
      ...canvasConfig,
      [event.target.name]: Number(value) ? Number(value) : value,
    })
  }

  const startSort = () => {
    const pieceWidth = canvasConfig.width / canvasConfig.squares
    const pieceHeight = canvasConfig.height / canvasConfig.squares
    const ctx = canvasRef.current?.getContext('2d')

    worker.postMessage([canvasConfig.sortingMethod, pieces])
    worker.onmessage = (e) => {
      const firstPiece = e.data[0]
      const secondPiece = e.data[1]

      const offscreen = new OffscreenCanvas(canvasConfig.width, canvasConfig.height)
      const offCtx = offscreen.getContext('2d')
      offCtx?.drawImage(canvasRef.current as HTMLCanvasElement, 0, 0)

      ctx?.drawImage(
        offscreen,
        firstPiece.col * pieceWidth,
        firstPiece.row * pieceHeight,
        pieceWidth,
        pieceHeight,
        secondPiece.col * pieceWidth,
        secondPiece.row * pieceHeight,
        pieceWidth,
        pieceHeight
      )

      ctx?.drawImage(
        offscreen,
        secondPiece.col * pieceWidth,
        secondPiece.row * pieceHeight,
        pieceWidth,
        pieceHeight,
        firstPiece.col * pieceWidth,
        firstPiece.row * pieceHeight,
        pieceWidth,
        pieceHeight
      )
    }
  }

  return (
    <div className="App">
      <Header startSort={startSort} handleChange={handleChange} />
      <MemoCanvas height={canvasConfig.height} width={canvasConfig.width} ref={canvasRef} />
    </div>
  )
}

export default App
