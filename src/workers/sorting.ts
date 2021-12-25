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

const linearSort = (pieces: Piece[]) => {
  console.log('A linear sort algo')
}

self.onmessage = (e) => {
    const complexity = e.data[0];

    switch(complexity) {
      case 'quadratic':
        quadraticSort(e.data[1]);
        break;
      case 'linear':
        linearSort(e.data[1]);
        break;
      default:
        console.error('No sorting fn executed')
    }
}

export {}