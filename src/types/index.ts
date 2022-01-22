export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 10 | 15 | 25
  sortingMethod: 'brute force' | 'selection sort' | 'insertion sort' | 'bubble sort' | 'quick sort'
  height: 600
  width: 600
}
