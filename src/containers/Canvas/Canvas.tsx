import { useRef, useState, useEffect } from "react";
import kittenImg from "../../assets/kitten.png";
import styles from "../../styles/modules/Canvas.module.css";
import {
  getInitialImageData,
  createImageElementForCanvas,
  shuffleArray,
} from "./index";

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

export const Canvas = ({ width = 800, height = 800 }: CanvasProp) => {
  const { container, canvas } = styles;
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    console.log("first use effect");
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");

      const canvasImage = createImageElementForCanvas(kittenImg);
      canvasImage.onload = () => {
        context?.drawImage(canvasImage, 0, 0);
        const ctxImageData = context?.getImageData(0, 0, 32, 32);
        if (ctxImageData) setImageData(ctxImageData.data);
      };

      // intervalRef.current = window.setInterval(() => {
      //   console.log("Interval function exec");
      // }, 1000);
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
