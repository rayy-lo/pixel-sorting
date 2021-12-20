import { Piece } from '../../types'
import { updateCanvas } from './helpers'

/**
 * Sort Pieces Array In Place
 *
 * @param {Piece[]} pieces
 *
 */
export const quadraticSort = (pieces: Piece[], canvas: HTMLCanvasElement) => {
  const canvasWidth = 800
  const canvasHeight = 800
  const rows = 16
  const cols = 16
  // const pieceWidth = canvasWidth! / cols;
  // const pieceHeight = canvasHeight! / rows;

  // const ctx = canvas.getContext("2d");

  const offscreen = new OffscreenCanvas(canvasWidth, canvasHeight)
  const offCtx = offscreen.getContext('2d')
  offCtx?.drawImage(canvas, 0, 0)

  let isSorted = false

  for (let i = 0; i < pieces.length; i++) {
    for (let j = i + 1; j < pieces.length; j++) {
      if (pieces[j].pieceNum < pieces[i].pieceNum) {
        // animateCanvas(pieces);

        updateCanvas(pieces[i], pieces[j], canvas, offscreen)
        const temp = pieces[i]
        pieces[i] = pieces[j]
        pieces[j] = temp

        return
      }
    }
  }

  isSorted = true
}
