import { Piece } from "../../types";

/**
 * Shuffle array in place
 *
 * @param arr
 *
 */

export const shuffle = (arr: []) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
  }
};

/**
 * Create array of objects to represent each puzzle piece
 * @param gridSize
 *
 * @returns {Piece}
 */

export const generatePieces = (gridSize: number): Piece[] => {
  const pieces = [];
  const rows = gridSize;
  const cols = gridSize;
  let piece = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      pieces.push({
        row: i,
        col: j,
        pieceNum: piece++,
      });
    }
  }

  return pieces;
};
