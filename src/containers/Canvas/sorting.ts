import { Piece } from "../../types";

/**
 * Sort Pieces Array In Place
 *
 * @param {Piece[]} piecesArray
 *
 */
export const quadraticSort = (
  piecesArray: Piece[],
  ctx: CanvasRenderingContext2D
) => {
  console.log(piecesArray);
  for (let i = 0; i < piecesArray.length; i++) {
    for (let j = i + 1; j < piecesArray.length; j++) {
      if (piecesArray[j].pieceNum < piecesArray[i].pieceNum) {
        const temp = piecesArray[i];
        piecesArray[i] = piecesArray[j];
        piecesArray[j] = temp;

        ctx.putImageData(piecesArray[i].imageData!, 0, 0);
      }
    }
  }
};
