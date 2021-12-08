import { forwardRef } from "react";
import { useCanvas } from "../../hooks/useCanvas";
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
  imageSrc: string;
  canvasConfig: {
    numOfSquaresPerSide: string;
    timeComplexity: string;
  };
  /**
   * If canvas is in process of sorting
   */
  isSorting: boolean;
}

export type Ref = HTMLCanvasElement;

export const Canvas = forwardRef<Ref, CanvasProp>(
  ({ imageSrc, canvasConfig, width = 800, height = 800 }, ref) => {
    const { container, canvas } = styles;
    // const canvasRef = useCanvas(
    //   imageSrc,
    //   parseInt(canvasConfig.numOfSquaresPerSide)
    // );

    return (
      <div className={container}>
        <canvas
          ref={ref}
          className={canvas}
          width={width}
          height={height}
          id="canvas"
        ></canvas>
      </div>
    );
  }
);
