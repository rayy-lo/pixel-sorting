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
  /**
   * Sorted image data of image
   */
  imageSrc: string;
}

export const Canvas = ({ imageSrc, width = 800, height = 800 }: CanvasProp) => {
  const { container, canvas } = styles;
  const canvasRef = useCanvas(imageSrc);

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
