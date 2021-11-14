import { useRef, useEffect, MutableRefObject } from "react";
import styles from "../styles/modules/Canvas.module.css";

interface CanvasProp {
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
  /**
   * Image element to render on canvas
   */
  image: HTMLImageElement;
}

/**
 * Shuffles pixels of canvas
 *
 * @param data - Canvas data: Uint8ClampedArray
 *
 * @returns Uint8ClampedArray
 */

const shuffleImageData = (data: Uint8ClampedArray) => {
  console.log(data);
};

export const Canvas = ({ width = 800, height = 800, image }: CanvasProp) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context?.drawImage(image, 0, 0, width, height);
    const imageData = context?.getImageData(0, 0, 50, 50);

    if (imageData !== undefined) {
      shuffleImageData(imageData.data);
    }
    console.log(imageData);
  });

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      width={width}
      height={height}
      id="canvas"
    ></canvas>
  );
};
