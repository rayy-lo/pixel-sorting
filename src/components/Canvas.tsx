import { useRef } from "react";

type CanvasProp = {
  width?: number;
  height?: number;
};

export const Canvas = ({ width = 500, height = 500 }: CanvasProp) => {
  const ref = useRef(null);

  return <canvas width={width} height={height} id="canvas"></canvas>;
};
