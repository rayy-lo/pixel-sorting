import { useState, ChangeEvent } from 'react'

import Header from '../components/Header'
import { MemoCanvas } from '../components/Canvas'
import { CanvasConfig } from '../types'
import { useCanvas } from '../hooks/useCanvas'

const App = () => {
    const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
        /**
         * Number of rows and columns
         */
        squares: 10,
        sortingMethod: 'bubble sort',
        height: 600,
        width: 600,
    })

    const [canvasRef, pieces] = useCanvas(canvasConfig.squares)

    const worker = new Worker(new URL('../workers/sorting.ts', import.meta.url))

    const onConfigChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setCanvasConfig({
            ...canvasConfig,
            [event.target.name]: Number(value) ? Number(value) : value,
        })
    }

    const stopSort = () => {
        worker.terminate()
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
            <Header stopSort={stopSort} startSort={startSort} onConfigChange={onConfigChange} />
            <MemoCanvas height={canvasConfig.height} width={canvasConfig.width} ref={canvasRef} />
        </div>
    )
}

export default App
