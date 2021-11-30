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
  gridSize: number;
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
