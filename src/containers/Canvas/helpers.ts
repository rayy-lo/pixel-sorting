import { Piece } from "../../types";

/**
 * Shuffle array in place
 *
 * @param {Piece[]} pieces -
 *
 */

export const shuffle = (pieces: Piece[]) => {
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pieces[i];

    pieces[i] = pieces[j];
    pieces[j] = temp;
  }

  return pieces;
};

/**
 * Create array of objects to represent each puzzle piece
 * @param gridSize
 *
 * @returns {Piece[]}
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

export const updateCanvas = (
  firstPiece: Piece,
  secondPiece: Piece,
  canvas: HTMLCanvasElement,
  offscreen: OffscreenCanvas
) => {
  const canvasWidth = 800;
  const canvasHeight = 800;
  const rows = 16;
  const cols = 16;
  const pieceWidth = canvasWidth! / cols;
  const pieceHeight = canvasHeight! / rows;

  const ctx = canvas.getContext("2d");

  // const offscreen = new OffscreenCanvas(canvasWidth, canvasHeight);
  // const offCtx = offscreen.getContext("2d");
  // offCtx?.drawImage(canvas, 0, 0);

  // if (!offCtx) {
  //   throw new Error("Offscreen Canvas is null");
  // }

  console.log("running");

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
  );

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
  );
};
