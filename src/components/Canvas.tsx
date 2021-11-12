type CanvasProp = {
  width?: number;
  height?: number;
};

export const Canvas = ({ width = 500, height = 500 }: CanvasProp) => {
  return <canvas width={width} height={height} id="canvas"></canvas>;
};
