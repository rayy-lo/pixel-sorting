import { useRef, useEffect } from "react";
import { generatePieces, shuffle } from "../containers/Canvas/helpers";

export const useCanvas = (imageSrc: string, gridSize: number) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pieces = generatePieces(gridSize);
  shuffle(pieces);
  /**
   * Render shuffled image pieces onto canvas
   */
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const handleImageLoad = () => {
      const canvasWidth = canvasRef.current?.width;
      const canvasHeight = canvasRef.current?.height;
      const rows = gridSize;
      const cols = gridSize;
      const pieceWidth = canvasWidth! / cols;
      const pieceHeight = canvasHeight! / rows;
      let count = 0;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const piece = pieces[count++];

          ctx?.drawImage(
            img,
            x * pieceWidth,
            y * pieceHeight,
            pieceWidth,
            pieceHeight,
            piece.col * pieceWidth,
            piece.row * pieceHeight,
            pieceWidth,
            pieceHeight
          );

          piece.imageData = ctx?.getImageData(
            piece.col * pieceWidth,
            piece.row * pieceHeight,
            pieceWidth,
            pieceHeight
          );
        }
      }
    };

    const img = new Image();
    img.onload = handleImageLoad;
    img.src = imageSrc;
  }, [imageSrc, gridSize]);

  return [canvasRef, pieces] as const;
};
