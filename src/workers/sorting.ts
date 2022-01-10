/* eslint-disable no-param-reassign */
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

const bubbleSort = (pieces: Piece[]) => {
  const arr = [...pieces];

  for(let i = arr.length - 1; i > 0; i--){
    for(let j = 0; j < i; j++ ){
      if(arr[j].pieceNum > arr[j + 1].pieceNum){
        postMessage([arr[j+1], arr[j]])
        
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
      
}

const insertionSort = (pieces: Piece[]) => {
  const arr = [...pieces];

  for(let i = 1; i < arr.length; i++){

    while(i > 0 && arr[i].pieceNum < arr[i-1].pieceNum){
      postMessage([arr[i-1], arr[i]])
      const temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp 
      i-= 1;
    }
  }
}

/**
 * TODO:
 * Quick sort implementation
 * @param pieces 
 * @param startIndex 
 * @param endIndex 
 */
// const quickSort = (pieces: Piece[], startIndex: number, endIndex: number) => {
 
//   function partition(arr, startIndex, endIndex){
//     const pivot = arr[endIndex].pieceNum;
//     let j = startIndex - 1;
    
//     for (let i = 0; i < endIndex; i++) {
//       if(arr[i].pieceNum < pivot){
//         j += 1;
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp 
//       }
//     }



//     return j + 1;
//   }

// }

interface algoObject {
  [key: string] : any
}

self.onmessage = (e) => {
  const complexity = e.data[0];
  const pieces = e.data[1];

  const algorithms: algoObject = {
    // 'selection': () => selectionSort(pieces),
    'brute': () => naiveSort(pieces),
    'insertion': () => insertionSort(pieces),
    'bubble': () => bubbleSort(pieces),
    // 'quick': () => quickSort(pieces, 0, pieces.length)
  }

  if(algorithms[complexity] === undefined) {
    console.error('No algorithm found based on complexity')
    return
  }

  algorithms[complexity]();

  self.close();
}

export {}