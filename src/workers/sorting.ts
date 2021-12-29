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

interface algoObject {
  [key: string] : any
}

self.onmessage = (e) => {
  const complexity = e.data[0];
  const pieces = e.data[1];

  const algorithms: algoObject = {
    'quadratic': quadraticSort(pieces),
    'linear': linearSort(pieces)
  }

  if(algorithms[complexity] === undefined) return

  algorithms[complexity]();
}

export {}