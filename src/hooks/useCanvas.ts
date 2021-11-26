import { useRef, useEffect } from "react";
import {
  associateDataWithIndex,
  getShuffledImageData,
} from "../containers/Canvas";
import { quadraticSort } from "../containers/Canvas/sorting";

export const useCanvas = (imageData: ImageData) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef(0);
  const indexedData = associateDataWithIndex(imageData.data);
  const shuffledData = getShuffledImageData(
    new Uint8ClampedArray(Object.values(indexedData))
  );

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (shuffledData) {
      ctx?.putImageData(shuffledData.imageData, 0, 0);
    }

    intervalRef.current = window.setInterval(() => {
      quadraticSort(shuffledData.randomizedOrder);
    }, 10000);
  }, []);

  return canvasRef;
};
