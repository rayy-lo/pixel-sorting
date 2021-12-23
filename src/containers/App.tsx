import { useState, ChangeEvent } from 'react'
import Header from './Header'
import '../styles/App.css'
import { Canvas } from './Canvas/Canvas'
import kittenImg from '../assets/kitten.jpg'
import { useCanvas } from '../hooks/useCanvas'
// import { quadraticSort } from './Canvas/sorting'

const App = () => {
  const [canvasConfig, setCanvasConfig] = useState({
    numOfSquaresPerSide: 16,
    timeComplexity: 'quadratic',
  })
  const [isSorting, setIsSorting] = useState(false)

  const [canvasRef, pieces] = useCanvas(kittenImg, canvasConfig.numOfSquaresPerSide)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setCanvasConfig({
      ...canvasConfig,
      [event.target.name]: Number(value) ? Number(value) : value,
    })
  }

  const sortImage = async () => {
    // const ctx = canvasRef.current?.getContext("2d");
    const worker = new Worker(new URL('../workers/sorting.ts', import.meta.url))
    worker.postMessage(pieces)
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} sortImage={sortImage} isSorting={isSorting} />
      <Canvas ref={canvasRef} />
    </div>
  )
}

export default App
