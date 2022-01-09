export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 5 | 10 | 15
  sortingMethod: 'brute' | 'selection' | 'insertion' | 'bubble' | 'quick'
  height: 600
  width: 600
}
