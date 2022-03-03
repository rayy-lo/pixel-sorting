import React from 'react'
import { canvasHeight, canvasWidth } from '../utils/constants'
import { CanvasConfig, Piece } from '../types'

export const useWorker = (canvasConfig: CanvasConfig, canvasRef: React.RefObject<HTMLCanvasElement>, pieces: Piece[]) => {
    
    const sortWorker = new Worker(new URL('../workers/sorting.ts', import.meta.url))
    const paintWorker = new Worker()
    
    const stopSort = () => sortWorker.terminate()
    const startSort = () => {
        const pieceWidth = canvasWidth / canvasConfig.squares
        const pieceHeight = canvasHeight / canvasConfig.squares
        const ctx = canvasRef.current?.getContext('2d')

        sortWorker.postMessage([canvasConfig.sortingMethod, pieces])
        sortWorker.onmessage = (e) => {
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