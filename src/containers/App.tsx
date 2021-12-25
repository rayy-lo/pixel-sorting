import { useState, ChangeEvent } from 'react'

import Header from './Header'

import { Canvas } from './Canvas'
import { CanvasConfig } from '../types'
import { useCanvas } from '../utils/useCanvas'

import kittenImg from '../assets/kitten.jpg'
import '../styles/App.css'

const App = () => {
  const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
    /**
     * Number of rows and columns to divide canvas
     */
    squares: 16,
    timeComplexity: 'quadratic',
    height: 600,
    width: 600,
  })

  const [canvasRef, pieces] = useCanvas(kittenImg, canvasConfig.squares)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setCanvasConfig({
      ...canvasConfig,
      [event.target.name]: Number(value) ? Number(value) : value,
    })
  }

  const sortImage = () => {
    const rows = 16
    const cols = 16
    const pieceWidth = canvasConfig.width / cols
    const pieceHeight = canvasConfig.height / rows
    const ctx = canvasRef.current?.getContext('2d')

    const worker = new Worker(new URL('../workers/sorting.ts', import.meta.url))

    worker.postMessage([canvasConfig.timeComplexity, pieces])
    worker.onmessage = (e) => {
      // update canvas
      const offscreen = new OffscreenCanvas(canvasConfig.width, canvasConfig.height)
      const offCtx = offscreen.getContext('2d')
      offCtx?.drawImage(canvasRef.current as HTMLCanvasElement, 0, 0)

      ctx?.drawImage(
        offscreen,
        e.data[0].col * pieceWidth,
        e.data[0].row * pieceHeight,
        pieceWidth,
        pieceHeight,
        e.data[1].col * pieceWidth,
        e.data[1].row * pieceHeight,
        pieceWidth,
        pieceHeight
      )

      ctx?.drawImage(
        offscreen,
        e.data[1].col * pieceWidth,
        e.data[1].row * pieceHeight,
        pieceWidth,
        pieceHeight,
        e.data[0].col * pieceWidth,
        e.data[0].row * pieceHeight,
        pieceWidth,
        pieceHeight
      )
    }
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} sortImage={sortImage} />
      <Canvas height={canvasConfig.height} width={canvasConfig.width} ref={canvasRef} />
    </div>
  )
}

export default App
