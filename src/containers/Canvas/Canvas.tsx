import { useEffect, useRef } from "react";
import styles from "../../styles/modules/Canvas.module.css";

interface CanvasProp {
  /**
   * Width of canvas
   * @defaultValue 1080
   */
  width?: number;
  /**
   * Height of canvas
   * @defaultValue 1080
   */
  height?: number;
  /**
   * Image data to render on canvas
   */
  imageData: ImageData;
}

export const Canvas = ({
  imageData,
  width = 1080,
  height = 1080,
}: CanvasProp) => {
  const { container, canvas } = styles;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.putImageData(imageData, 0, 0);
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
