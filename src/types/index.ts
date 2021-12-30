export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 10 | 25 | 50,
  timeComplexity: 'quadratic' | 'linear'
  height: 600
  width: 600
}