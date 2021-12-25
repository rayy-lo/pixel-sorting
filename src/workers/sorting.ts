/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import { Piece } from '../types/index'

const quadraticSort = (pieces: Piece[]) => {
    for (let i = 0; i < pieces.length; i++) {
      for (let j = i + 1; j < pieces.length; j++) {
        if (pieces[j].pieceNum < pieces[i].pieceNum) {
          postMessage([pieces[i], pieces[j]])

          const temp = pieces[i];
          pieces[i] = pieces[j]
          pieces[j] = temp
        }
      }
  }
}

self.onmessage = (e) => {
    quadraticSort(e.data);
}

export {}