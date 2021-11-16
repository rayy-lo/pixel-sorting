import { useRef, useEffect, MutableRefObject } from "react";
import { CanvasProp } from "../types/index";
import kittenImg from "../assets/kitten.png";
import styles from "../styles/modules/Canvas.module.css";

/**
 * Generate an image element for Canvas component to render
 *
 * @param src - String source of image
 *
 * @returns HTMLImageElement
 */

const createImageElementForCanvas = (src: string) => {
  const image = new Image();
  image.src = src;

  return image;
};

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

export const Canvas = ({ width = 800, height = 800 }: CanvasProp) => {
  const { container } = styles;
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const canvasImage = createImageElementForCanvas(kittenImg);
    canvasImage.onload = () => {
      context?.drawImage(canvasImage, 0, 0);
    };
  }, []);

  return (
    <div className={container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={width}
        height={height}
        id="canvas"
      ></canvas>
    </div>
  );
};
