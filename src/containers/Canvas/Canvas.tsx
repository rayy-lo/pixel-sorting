import { useEffect, useRef } from "react";
import styles from "../../styles/modules/Canvas.module.css";

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
   * Shuffled image data to render on canvas
   */
  shuffledData: ImageData;
  /**
   * Sorted image data of image
   */
  imageData: ImageData;
}

export const Canvas = ({
  imageData,
  shuffledData,
  width = 800,
  height = 800,
}: CanvasProp) => {
  const { container, canvas } = styles;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (shuffledData) {
      ctx?.putImageData(shuffledData, 0, 0);
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
