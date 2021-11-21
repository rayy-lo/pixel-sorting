import { useEffect } from "react";
import styles from "../../styles/modules/Canvas.module.css";
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
  /**
   * Pixel array to render on canvas
   */
  imageData: Uint8Array;
}

export const Canvas = ({
  imageData,
  width = 800,
  height = 800,
}: CanvasProp) => {
  const { container, canvas } = styles;

  useEffect(() => {
    console.log("render pixel array onto canvas", imageData);
  }, []);

  return (
    <div className={container}>
      <canvas
        className={canvas}
        width={width}
        height={height}
        id="canvas"
      ></canvas>
    </div>
  );
};
