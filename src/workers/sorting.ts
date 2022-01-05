/* eslint-disable no-restricted-globals */
import { Piece } from '../types/index'

const quadraticSort = (pieces: Piece[]) => {
    const arr = [...pieces];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].pieceNum < arr[i].pieceNum) {
          postMessage([arr[j], arr[i]])
          
          const temp = arr[i];
          arr[i] = arr[j]
          arr[j] = temp

        }
      }
    }
}

const selectionSort = (pieces: Piece[]) => {
  console.log('selection sort')
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
    quadratic: () => quadraticSort(pieces),
    linear: () => linearSort(pieces)
  }

  if(algorithms[complexity] === undefined) {
    console.error('No algorithm found based on complexity')
    return
  }

  algorithms[complexity]();

  self.close();
}

export {}