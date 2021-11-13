import { useRef } from "react";
import styles from "../styles/modules/Canvas.module.css";

type CanvasProp = {
  width?: number;
  height?: number;
};

export const Canvas = ({ width = 800, height = 800 }: CanvasProp) => {
  const ref = useRef(null);

  return (
    <canvas
      className={styles.canvas}
      width={width}
      height={height}
      id="canvas"
    ></canvas>
  );
};
