import { useRef, useEffect } from "react";
import { generatePieces, shuffle } from "../containers/Canvas/helpers";
import { quadraticSort } from "../containers/Canvas/sorting";

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
      const cw = canvasRef.current?.width;
      const ch = canvasRef.current?.height;
      const rows = gridSize;
      const cols = gridSize;
      const pieceWidth = cw! / cols;
      const pieceHeight = ch! / rows;
      let count = 0;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const piece = pieces[count++];

          ctx?.drawImage(
            img,
            j * pieceWidth,
            i * pieceHeight,
            pieceWidth,
            pieceHeight,
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
  }, [imageSrc, gridSize, pieces]);

  useEffect(() => {
    console.log("effect hook 2");
  });

  return canvasRef;
};
