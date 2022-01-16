export interface Piece {
  col: number
  row: number
  pieceNum: number
}

export interface CanvasConfig {
  squares: 5 | 10 | 15
  sortingMethod: 'brute force' | 'selection sort' | 'insertion sort' | 'bubble sort' | 'quick sort'
  height: 600
  width: 600
}
