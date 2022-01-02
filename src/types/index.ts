export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 5 | 10 | 15
  timeComplexity: 'quadratic' | 'linear'
  height: 600
  width: 600
}
