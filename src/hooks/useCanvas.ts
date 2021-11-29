import { useRef, useEffect } from "react";
import { quadraticSort } from "../containers/Canvas/sorting";

export const useCanvas = (imageSrc: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const handleImageLoad = () => {
      var cw = canvasRef.current?.width;
      var ch = canvasRef.current?.height;
      var rows = 3;
      var cols = 3;
      var count = 0;
      var pieceWidth = cw! / cols;
      var pieceHeight = ch! / rows;

      var pieces = [
        { col: 2, row: 2 },
        { col: 1, row: 2 },
        { col: 0, row: 2 },
        { col: 1, row: 1 },
        { col: 0, row: 1 },
        { col: 2, row: 1 },
        { col: 2, row: 0 },
        { col: 1, row: 0 },
        { col: 0, row: 0 },
      ];

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
