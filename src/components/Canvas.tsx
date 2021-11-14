import { useRef, useEffect } from "react";
import styles from "../styles/modules/Canvas.module.css";

type CanvasProp = {
  width?: number;
  height?: number;
  src: string;
};

export const Canvas = ({ width = 800, height = 800, src }: CanvasProp) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const image = new Image();
      image.src = src;

      if (context !== null) {
        context.drawImage(image, 0, 0, width, height);
      }
    }
  }, []);

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
