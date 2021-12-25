export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 8 |16 | 32 | 64,
  timeComplexity: 'quadratic' | 'linear'
  height: 500 | 600 | 700 | 800,
  width: 500 | 600 | 700 | 800
}