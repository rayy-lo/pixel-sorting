import { useState, ChangeEvent } from 'react'

import Header from './Header'
import { Canvas } from './Canvas'
import { CanvasConfig } from '../types'
import { useCanvas } from '../utils/useCanvas'

import kittenImg from '../assets/images/kitten.jpeg'

const App = () => {
  const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
    /**
     * Number of rows and columns
     */
    squares: 10,
    timeComplexity: 'quadratic',
    height: 600,
    width: 600,
  })

  const [canvasRef, pieces] = useCanvas(kittenImg, canvasConfig.squares)
  const worker = new Worker(new URL('../workers/sorting.ts', import.meta.url))

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setCanvasConfig({
      ...canvasConfig,
      [event.target.name]: Number(value) ? Number(value) : value,
    })
  }

  const handleStop = () => {
    console.log('stop sorting')

    worker.terminate()
  }

  const handleSort = () => {
    const pieceWidth = canvasConfig.width / canvasConfig.squares
    const pieceHeight = canvasConfig.height / canvasConfig.squares
    const ctx = canvasRef.current?.getContext('2d')

    if (!window.Worker) {
      console.log('create new worker')
    }

    worker.postMessage([canvasConfig.timeComplexity, pieces])
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
      <Header handleChange={handleChange} handleStop={handleStop} handleSort={handleSort} />
      <Canvas height={canvasConfig.height} width={canvasConfig.width} ref={canvasRef} />
    </div>
  )
}

export default App
