import { useState, ChangeEvent } from 'react'
import Header from './Header'
import '../styles/App.css'
import { Canvas } from './Canvas/Canvas'
import kittenImg from '../assets/kitten.jpg'
import { useCanvas } from '../hooks/useCanvas'
// import { quadraticSort } from './Canvas/sorting'
import Worker from '../worker/index'

const workerInstance = new Worker()

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

    const processed = await workerInstance.quadraticSort(pieces)
    console.log(processed)

    // const data = "Some data";

    // return new Promise(async (resolve) => {
    // Use a web worker to process the data
    // const processed = await workerInstance.processData(data);

    // resolve(processed);
    // });

    // quadraticSort(pieces, canvasRef.current!);
    // console.log(pieces);
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} sortImage={sortImage} isSorting={isSorting} />
      <Canvas ref={canvasRef} isSorting={isSorting} />
    </div>
  )
}

export default App
