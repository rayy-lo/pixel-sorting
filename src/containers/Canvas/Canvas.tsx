import { useEffect, useRef } from "react";
import { getShuffledImageData } from ".";
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
   * Sorted image data of image
   */
  imageData: ImageData;
}

export const Canvas = ({
  imageData,
  width = 800,
  height = 800,
}: CanvasProp) => {
  const { container, canvas } = styles;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shuffledData = getShuffledImageData(imageData.data);

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
