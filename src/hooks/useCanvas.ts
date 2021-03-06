import { useRef, useEffect } from 'react'
import { generatePieces, shuffle } from "../utils/helpers"
import { images } from "../utils/constants";

export const useCanvas = (gridSize: number) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pieces = shuffle(generatePieces(gridSize))
  const image = images[Math.floor(Math.random() * images.length)];
  
  /**
   * Render shuffled image pieces onto canvas
   */
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    const handleImageLoad = () => {
      const canvasWidth = canvasRef.current?.width
      const canvasHeight = canvasRef.current?.height
      const rows = gridSize
      const cols = gridSize
      const pieceWidth = canvasWidth! / cols
      const pieceHeight = canvasHeight! / rows
      let count = 0

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const piece = pieces[count++]

          ctx?.drawImage(
            // eslint-disable-next-line no-use-before-define
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            img,
            x * pieceWidth,
            y * pieceHeight,
            pieceWidth,
            pieceHeight,
            piece.col * pieceWidth,
            piece.row * pieceHeight,
            pieceWidth,
            pieceHeight
          )
        }
      }
    }

    const img = new Image()
    img.onload = handleImageLoad
    img.src = image
  }, [image, gridSize, pieces])

  return [canvasRef, pieces] as const
}
