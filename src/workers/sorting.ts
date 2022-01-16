/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import { Piece } from '../types/index'

const swap = (arr: Piece[], a: number, b: number) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const naiveSort = (pieces: Piece[]) => {
    const arr = [...pieces];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].pieceNum < arr[i].pieceNum) {
          postMessage([arr[j], arr[i]])
          swap(arr, j, i);
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
        swap(arr, j+1, j)
        postMessage([arr[j+1], arr[j]])
      }
    }
  }
      
}

const insertionSort = (pieces: Piece[]) => {
  const arr = [...pieces];

  for(let i = 1; i < arr.length; i++){

    while(i > 0 && arr[i].pieceNum < arr[i-1].pieceNum){
      postMessage([arr[i-1], arr[i]])
      swap(arr, i, i-1)
      i-= 1;
    }
  }
}

const quickSort = (pieces: Piece[], startIndex: number, endIndex: number) => {
  if(startIndex >= endIndex) return;

  function partition(arr: Piece[], start: number, end: number){
    const pivot = end;
    let j = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i].pieceNum < arr[pivot].pieceNum){
        swap(arr, i, j);
        postMessage([arr[i], arr[j]]);
        j++;
      }
    }

    swap(arr, pivot, j);
    postMessage([arr[pivot], arr[j]]);
    return j;
  }

  const pivotIndex = partition(pieces, startIndex, endIndex);

  quickSort(pieces, startIndex, pivotIndex - 1);
  quickSort(pieces, pivotIndex + 1, endIndex);
}

interface algoObject {
  [key: string] : any
}

self.onmessage = (e) => {
  const complexity = e.data[0];
  const pieces = e.data[1];

  const algorithms: algoObject = {
    // 'selection': () => selectionSort(pieces),
    'brute force': () => naiveSort(pieces),
    'insertion sort': () => insertionSort(pieces),
    'bubble sort': () => bubbleSort(pieces),
    'quick sort': () => quickSort(pieces, 0, pieces.length - 1)
  }

  if(algorithms[complexity] === undefined) {
    console.error('No algorithm found based on complexity')
    return
  }

  algorithms[complexity]();

  self.close();
}

export {}