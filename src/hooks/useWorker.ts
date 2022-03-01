import { canvasHeight, canvasWidth } from '../utils/constants'

export const useWorker = (canvasConfig, canvasRef, pieces) => {
    
    const worker = new Worker(new URL('../workers/sorting.ts', import.meta.url))
    const stopSort = () => worker.terminate()
    const startSort = () => {
        const pieceWidth = canvasWidth / canvasConfig.squares
        const pieceHeight = canvasHeight / canvasConfig.squares
        const ctx = canvasRef.current?.getContext('2d')

        worker.postMessage([canvasConfig.sortingMethod, pieces])
        worker.onmessage = (e) => {
            const firstPiece = e.data[0]
            const secondPiece = e.data[1]

            const offscreen = new OffscreenCanvas(canvasWidth, canvasHeight)
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

    return {
        stopSort,
        startSort
    }
}