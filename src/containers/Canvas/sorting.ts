import { Piece } from "../../types";

/**
 * Sort pixel data - Time Complexity O(n^2)
 *
 * @param {Piece[]} piecesArray
 *
 */
export const quadraticSort = (piecesArray: Piece[]) => {
  for (let i = 0; i < piecesArray.length; i++) {
    for (let j = i + 1; j < piecesArray.length; j++) {
      if (piecesArray[j] < piecesArray[i]) {
        const temp = piecesArray[i];
        piecesArray[i] = piecesArray[j];
        piecesArray[j] = temp;
      }
    }
  }
};
