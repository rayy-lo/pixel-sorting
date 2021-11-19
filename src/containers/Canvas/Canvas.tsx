import { useRef, useState, useEffect } from "react";
import kittenImg from "../../assets/kitten.jpg";
import styles from "../../styles/modules/Canvas.module.css";
import { getImageData, createImageElement, shuffleArray } from "./index";

export interface CanvasProp {
  /**
   * Width of canvas
   * @defaultValue 800
   */
  width?: number;
  /**
   * Height of canvas
   * @defaultValue 800
   */
  height?: number;
}

const image = createImageElement(kittenImg, () => console.log("log"));
const imageData = getImageData(image);

export const Canvas = ({ width = 800, height = 800 }: CanvasProp) => {
  const { container, canvas } = styles;

  const [sortedImageData, setSortedImageData] =
    useState<Uint8ClampedArray>(imageData);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");

      // canvasImage.onload = () => {
      //   context?.drawImage(canvasImage, 0, 0);
      //   const ctxImageData = context?.getImageData(0, 0, 32, 32);
      // };
    }
  }, []);

  return (
    <div className={container}>
      <canvas
        ref={canvasRef}
        className={canvas}
        width={width}
        height={height}
        id="canvas"
      ></canvas>
    </div>
  );
};
