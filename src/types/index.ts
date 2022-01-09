export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 5 | 10 | 15
  sortingMethod: 'naive' | 'selection' | 'insertion' | 'bubble'
  height: 600
  width: 600
}
