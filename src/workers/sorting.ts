/* eslint-disable no-restricted-globals */
import { Piece } from '../types/index'

const naiveSort = (pieces: Piece[]) => {
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
  const arr = [...pieces];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j].pieceNum < arr[minIndex].pieceNum){
        minIndex = j;
      }
    }
    
    postMessage([arr[minIndex], arr[i]])
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp 
  }
}

interface algoObject {
  [key: string] : any
}

self.onmessage = (e) => {
  const complexity = e.data[0];
  const pieces = e.data[1];

  const algorithms: algoObject = {
    'selection sort': () => selectionSort(pieces),
    'naive': () => naiveSort(pieces),
  }

  if(algorithms[complexity] === undefined) {
    console.error('No algorithm found based on complexity')
    return
  }

  algorithms[complexity]();

  self.close();
}

export {}