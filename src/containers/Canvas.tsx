import { useRef, useState, useEffect } from "react";
import { CanvasProp } from "../types/index";
import kittenImg from "../assets/kitten.png";
import styles from "../styles/modules/Canvas.module.css";

export const Canvas = ({ width = 800, height = 800 }: CanvasProp) => {
  const { container, canvas } = styles;
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [currentImageData, setCurrentImageData] =
    useState<Uint8ClampedArray | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    console.log("first use effect");
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");

      const canvasImage = createImageElementForCanvas(kittenImg);
      canvasImage.onload = () => {
        context?.drawImage(canvasImage, 0, 0);
        const ctxImageData = context?.getImageData(0, 0, 32, 32);
        if (ctxImageData) setImageData(ctxImageData.data);
      };

      // intervalRef.current = window.setInterval(() => {
      //   console.log("Interval function exec");
      // }, 1000);
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

/**
 * Generate an image element for Canvas component to render
 *
 * @param src - String source of image
 *
 * @returns HTMLImageElement
 */

const createImageElementForCanvas = (src: string) => {
  const image = new Image();
  image.src = src;

  return image;
};

/**
 * Shuffles array
 *
 * @param data - Canvas data: Uint8ClampedArray
 *
 * @returns Uint8ClampedArray
 */

const shuffleArray = (data: Uint8ClampedArray) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
};
