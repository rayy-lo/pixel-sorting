import { useRef, useEffect } from "react";
import { generatePieces } from "../containers/Canvas";
import { quadraticSort } from "../containers/Canvas/sorting";

export const useCanvas = (imageSrc: string, gridSize: number) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pieces = generatePieces(gridSize);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const handleImageLoad = () => {
      var cw = canvasRef.current?.width;
      var ch = canvasRef.current?.height;
      var rows = gridSize;
      var cols = gridSize;
      var count = 0;
      var pieceWidth = cw! / cols;
      var pieceHeight = ch! / rows;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          var piece = pieces[count++];

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

    var img = new Image();
    img.onload = handleImageLoad;
    img.src = imageSrc;
  }, []);

  return canvasRef;
};
