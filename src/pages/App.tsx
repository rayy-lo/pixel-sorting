import { useState, ChangeEvent } from 'react'
import { CanvasConfig } from '../types'
import { useCanvas } from '../hooks/useCanvas'
import { useWorker } from '../hooks/useWorker'
import { MemoCanvas } from '../components/Canvas/Canvas'
import AnswerPanel from '../components/AnswerPanel/AnswerPanel'
import GameSettings from '../components/GameSettings/GameSettings'

const App = () => {
    const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
        squares: 10,
        sortingMethod: 'bubble sort',
    })

    const [canvasRef, pieces] = useCanvas(canvasConfig.squares)
    const { stopSort, startSort } = useWorker(canvasConfig, canvasRef, pieces)

    const onConfigChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setCanvasConfig({
            ...canvasConfig,
            [event.target.name]: Number(value) ? Number(value) : value,
        })
    }

    return (
        <div className="App">
            <MemoCanvas ref={canvasRef} />
            <AnswerPanel startSort={startSort} />
            <GameSettings />
        </div>
    )
}

export default App
