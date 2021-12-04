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
  /**
   * Number to divide image into gridSize x gridSize on canvas
   */
  gridSize: number;
  /**
   * Time complexity for sorting algo
   */
  timeComplexity: string;
  /**
   * If canvas is in process of sorting
   */
  isSorting: boolean;
}

export const Canvas = ({
  imageSrc,
  gridSize,
  width = 800,
  height = 800,
}: CanvasProp) => {
  const { container, canvas } = styles;
  const canvasRef = useCanvas(imageSrc, gridSize);

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
