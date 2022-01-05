import { Piece } from '../types/index'

/**
 * Returns a shuffled array
 * @param {Piece[]} pieces -
 * @returns {Piece[]} 
 */

export const shuffle = (pieces: Piece[]) => {
  const shuffledPieces = [...pieces];

  for (let i = shuffledPieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffledPieces[i]

    shuffledPieces[i] = shuffledPieces[j]
    shuffledPieces[j] = temp
  }

  return shuffledPieces
}

/**
 * Create array of objects to represent each puzzle piece
 * @param {number} gridSize - Number of rows and columns
 * @returns {Piece[]}
 */

 export const generatePieces = (gridSize: number): Piece[] => {
    const pieces = []
    const rows = gridSize
    const cols = gridSize
    let piece = 0
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        pieces.push({
          row: i,
          col: j,
          pieceNum: piece++,
        })
      }
    }
  
    return pieces
  }
  